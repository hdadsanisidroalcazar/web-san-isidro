import { getCollection } from 'astro:content';
import type { Home } from '~/types';

let _home: Home;

/** */
export const fetchHome = async (): Promise<Home> => {
  if (!_home) {
    const homes = await getCollection('home');
    _home = homes[0]?.data;
  }

  return _home;
};
