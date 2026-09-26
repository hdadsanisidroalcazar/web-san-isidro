import fs from 'node:fs';
import path from 'node:path';
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import type { MetaDataOpenGraph } from '~/types';

const load = async function () {
  let images: Record<string, () => Promise<unknown>> | undefined = undefined;
  try {
    images = import.meta.glob('~/assets/images/**/*.{jpeg,jpg,png,tiff,webp,gif,svg,JPEG,JPG,PNG,TIFF,WEBP,GIF,SVG}');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    // continue regardless of error
  }
  return images;
};

let _images: Record<string, () => Promise<unknown>> | undefined = undefined;

/** */
export const fetchLocalImages = async () => {
  _images = _images || (await load());
  return _images;
};

/** */
export const findImage = async (
  imagePath?: string | ImageMetadata | null
): Promise<string | ImageMetadata | undefined | null> => {
  // Not string
  if (typeof imagePath !== 'string') {
    return imagePath;
  }

  // Absolute paths
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('/')) {
    return imagePath;
  }

  // Relative paths or not "~/assets/"
  if (!imagePath.startsWith('~/assets/images')) {
    return imagePath;
  }

  const images = await fetchLocalImages();
  const key = imagePath.replace('~/', '/src/');

  return images && typeof images[key] === 'function'
    ? ((await images[key]()) as { default: ImageMetadata })['default']
    : null;
};

/** */
export const adaptOpenGraphImages = async (
  openGraph: MetaDataOpenGraph = {},
  astroSite: URL | undefined = new URL('')
): Promise<MetaDataOpenGraph> => {
  if (!openGraph?.images?.length) {
    return openGraph;
  }

  const images = openGraph.images;
  const defaultWidth = 1200;
  const defaultHeight = 626;

  const adaptedImages = await Promise.all(
    images.map(async (image) => {
      if (image?.url) {
        const resolvedImage = (await findImage(image.url)) as ImageMetadata | undefined;
        if (!resolvedImage) {
          return {
            url: '',
          };
        }

        const _image = await getImage({
          src: resolvedImage,
          alt: 'Placeholder alt',
          width: image?.width || defaultWidth,
          height: image?.height || defaultHeight,
        });

        if (typeof _image === 'object') {
          return {
            url: typeof _image.src === 'string' ? String(new URL(_image.src, astroSite)) : 'pepe',
            width: typeof _image.width === 'number' ? _image.width : undefined,
            height: typeof _image.height === 'number' ? _image.height : undefined,
          };
        }
        return {
          url: '',
        };
      }

      return {
        url: '',
      };
    })
  );

  return { ...openGraph, ...(adaptedImages ? { images: adaptedImages } : {}) };
};

/**
 * Reads intrinsic dimensions and aspect ratio directly from public files on disk
 */
export const getPublicImageDimensions = (
  imagePath?: string | null
): { width: number; height: number; aspectRatio: string } | undefined => {
  if (!imagePath || typeof imagePath !== 'string') return undefined;

  const cleanPath = decodeURIComponent(imagePath.replace(/^\/+/, ''));
  const fullPath = path.resolve('public', cleanPath);

  if (!fs.existsSync(fullPath)) return undefined;

  try {
    const buf = fs.readFileSync(fullPath);

    // WebP
    if (buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') {
      const type = buf.toString('ascii', 12, 16);
      if (type === 'VP8 ') {
        const width = buf.readUInt16LE(26) & 0x3fff;
        const height = buf.readUInt16LE(28) & 0x3fff;
        return { width, height, aspectRatio: `${width}:${height}` };
      } else if (type === 'VP8L') {
        const b1 = buf[21];
        const b2 = buf[22];
        const b3 = buf[23];
        const b4 = buf[24];
        const width = 1 + (((b2 & 0x3f) << 8) | b1);
        const height = 1 + (((b4 & 0xf) << 10) | (b3 << 2) | ((b2 & 0xc0) >> 6));
        return { width, height, aspectRatio: `${width}:${height}` };
      } else if (type === 'VP8X') {
        const width = 1 + buf.readUIntLE(24, 3);
        const height = 1 + buf.readUIntLE(27, 3);
        return { width, height, aspectRatio: `${width}:${height}` };
      }
    }

    // AVIF / HEIF (ISOBMFF ispe box)
    const ispeIdx = buf.indexOf('ispe');
    if (ispeIdx !== -1 && ispeIdx + 16 <= buf.length) {
      const width = buf.readUInt32BE(ispeIdx + 8);
      const height = buf.readUInt32BE(ispeIdx + 12);
      if (width > 0 && height > 0) {
        return { width, height, aspectRatio: `${width}:${height}` };
      }
    }

    // PNG
    if (buf.toString('ascii', 1, 4) === 'PNG') {
      const width = buf.readUInt32BE(16);
      const height = buf.readUInt32BE(20);
      return { width, height, aspectRatio: `${width}:${height}` };
    }

    // JPEG
    if (buf[0] === 0xff && buf[1] === 0xd8) {
      let offset = 2;
      while (offset < buf.length) {
        if (buf[offset] !== 0xff) break;
        const marker = buf[offset + 1];
        if (marker === 0xc0 || marker === 0xc2) {
          const height = buf.readUInt16BE(offset + 5);
          const width = buf.readUInt16BE(offset + 7);
          return { width, height, aspectRatio: `${width}:${height}` };
        }
        offset += 2 + buf.readUInt16BE(offset + 2);
      }
    }
  } catch {
    // ignore
  }

  return undefined;
};
