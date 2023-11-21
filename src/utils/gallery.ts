import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Gallery } from '~/types';
import { APP_GALLERY } from '~/utils/config';
import { cleanSlug, trimSlash, GALLERY_PERMALINK_PATTERN } from './permalinks';

const generatePermalink = async ({ id, slug }: { id: string; slug: string }) => {
  const permalink = GALLERY_PERMALINK_PATTERN.replace('%slug%', slug).replace('%id%', id);

  return permalink
    .split('/')
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
};

const getNormalizedPost = async (post: CollectionEntry<'gallery'>): Promise<Gallery> => {
  const { id, slug: rawSlug = '', data } = post;
  const { Content } = await post.render();

  const {
    publishDate: rawPublishDate = new Date(),
    updateDate: rawUpdateDate,
    title,
    description,
    image,
    metadata = {},
    images
  } = data;

  const slug = cleanSlug(rawSlug); // cleanSlug(rawSlug.split('/').pop());
  const publishDate = new Date(rawPublishDate);
  const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : undefined;

  return {
    id: id,
    slug: slug,
    permalink: await generatePermalink({ id, slug }),

    publishDate: publishDate,
    updateDate: updateDate,

    title: title,
    description: description,
    image: image,
    images,

    metadata,

    Content: Content,
  };
};

const load = async function (): Promise<Array<Gallery>> {
  const posts = await getCollection('gallery');
  const normalizedPosts = posts.map(async (post) => await getNormalizedPost(post));

  const results = (await Promise.all(normalizedPosts)).sort(
    (a, b) => b.publishDate.valueOf() - a.publishDate.valueOf()
  );

  return results;
};

let _galleries: Array<Gallery>;

/** */
export const isGalleryEnabled = APP_GALLERY.isEnabled;
export const isGalleryListRouteEnabled = APP_GALLERY.all.isEnabled;
export const isGalleryPostRouteEnabled = APP_GALLERY.gallery.isEnabled;

export const galleryListRobots = APP_GALLERY.all.robots;
export const galleryPostRobots = APP_GALLERY.gallery.robots;

export const galleryPostsPerPage = APP_GALLERY?.postsPerPage;

/** */
export const fetchGalleries = async (): Promise<Array<Gallery>> => {
  if (!_galleries) {
    _galleries = await load();
  }

  return _galleries;
};

/** */
export const findGalleriesBySlugs = async (slugs: Array<string>): Promise<Array<Gallery>> => {
  if (!Array.isArray(slugs)) return [];

  const posts = await fetchGalleries();

  return slugs.reduce(function (r: Array<Gallery>, slug: string) {
    posts.some(function (post: Gallery) {
      return slug === post.slug && r.push(post);
    });
    return r;
  }, []);
};

/** */
export const findGalleriesByIds = async (ids: Array<string>): Promise<Array<Gallery>> => {
  if (!Array.isArray(ids)) return [];

  const posts = await fetchGalleries();

  return ids.reduce(function (r: Array<Gallery>, id: string) {
    posts.some(function (post: Gallery) {
      return id === post.id && r.push(post);
    });
    return r;
  }, []);
};

/** */
export const getStaticPathsGalleryList = async ({ paginate }) => {
  if (!isGalleryEnabled || !isGalleryListRouteEnabled) return [];
  const posts = await fetchGalleries();
  return paginate(posts, {
    params: { gallery: APP_GALLERY?.all?.pathname },
    pageSize: galleryPostsPerPage,
  });
};

/** */
export const getStaticPathsGalleryPost = async () => {
  if (!isGalleryEnabled || !isGalleryPostRouteEnabled) return [];
  return (await fetchGalleries()).flatMap((gallery) => ({
    params: {
      gallery: gallery.permalink,
    },
    props: { gallery },
  }));
};
