import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Generic } from '~/types';
import { cleanSlug, trimSlash, PAGE_PERMALINK_PATTERN } from './permalinks';

const generatePermalink = async ({ id, slug }: { id: string; slug: string }) => {
  const permalink = PAGE_PERMALINK_PATTERN.replace('%slug%', slug).replace('%id%', id);

  return permalink
    .split('/')
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
};

const getNormalizedPost = async (generic: CollectionEntry<'generic'>): Promise<Generic> => {
  const { id, slug: rawSlug = '' } = generic;
  const { Content } = await generic.render();

  const slug = cleanSlug(rawSlug); // cleanSlug(rawSlug.split('/').pop());

  return {
    id: id,
    slug: slug,
    permalink: await generatePermalink({ id, slug }),

    Content: Content,
  };
};

const load = async function (): Promise<Array<Generic>> {
  const pages = await getCollection('generic');
  const normalizedPages = pages.map(async (page) => await getNormalizedPost(page));
  
  const results = await Promise.all(normalizedPages);

  return results;
};

let _pages: Array<Generic>;

/** */
export const fetchPages = async (): Promise<Array<Generic>> => {
  if (!_pages) {
    _pages = await load();
  }

  return _pages;
};

/** */
export const findPagesBySlugs = async (slugs: Array<string>): Promise<Array<Generic>> => {
  if (!Array.isArray(slugs)) return [];

  const pages = await fetchPages();

  return slugs.reduce(function (r: Array<Generic>, slug: string) {
    pages.some(function (page: Generic) {
      return slug === page.slug && r.push(page);
    });
    return r;
  }, []);
};

/** */
export const findPagesByIds = async (ids: Array<string>): Promise<Array<Generic>> => {
  if (!Array.isArray(ids)) return [];

  const pages = await fetchPages();

  return ids.reduce(function (r: Array<Generic>, id: string) {
    pages.some(function (page: Generic) {
      return id === page.id && r.push(page);
    });
    return r;
  }, []);
};

/** */
export const getStaticPathsGenericPage = async () => {
  return (await fetchPages()).flatMap((generic) => ({
    params: {
      generic: generic.permalink,
    },
    props: { generic },
  }));
};

/** */
