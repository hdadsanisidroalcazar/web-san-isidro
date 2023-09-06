import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Cult } from '~/types';
import { APP_CULTS } from '~/utils/config';
import { cleanSlug, CULT_PERMALINK_PATTERN, trimSlash } from './permalinks';

const generatePermalink = async ({ id, slug }: { id: string }) => {
  const permalink = CULT_PERMALINK_PATTERN.replace('%id%', id);

  return permalink
    .split('/')
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
};

const getNormalizedCult = async (cult: CollectionEntry<'cult'>): Promise<Cult> => {
  const { id, data } = cult;

  return {
    id,
    permalink: await generatePermalink({ id }),
    ...data,
  };
};

const load = async function (): Promise<Array<Cult>> {
  const cults = await getCollection('cult');
  const normalizedCults = cults.map(async (cult) => await getNormalizedCult(cult));
  const results = await Promise.all(normalizedCults);

  return results;
};

let _cults: Array<Cult>;

const fetchCults = async (): Promise<Cult[]> => {
  if (!_cults) {
    _cults = await load();
  }

  return _cults;
};

export const getStaticPathsCult = async () => {
  return (await fetchCults()).flatMap((cult) => ({
    params: {
      cult: cult.permalink,
    },
    props: { cult },
  }));
};
