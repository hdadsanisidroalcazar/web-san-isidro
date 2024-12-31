import { getCollection } from 'astro:content';
import type { Home, Contact, Sponsor, Magazine, HazteHermano } from '~/types';

let _home: Home;
let _contact: Contact;
let _sponsor: Sponsor;
let _magazines: Magazine[];
let _hazteHermano: HazteHermano;

/** */
export const fetchHome = async (): Promise<Home> => {
  if (!_home) {
    const homes = await getCollection('home');
    _home = homes[0]?.data;
  }

  return _home;
};

export const fetchSponsors = async (): Promise<Sponsor> => {
  if (!_sponsor) {
    const sponsors = await getCollection('sponsor');
    _sponsor = sponsors[0]?.data;
  }

  return _sponsor;
};

export const fetchContact = async (): Promise<Contact> => {
  if (!_contact) {
    const contacts = await getCollection('contact');
    _contact = contacts[0]?.data as Contact;
  }

  return _contact;
};

const composeUrlPdf = (url: string) => {
  return `https://raw.githubusercontent.com/hdadsanisidroalcazar/web-san-isidro/master/public${url}`;
};

export const fetchMagazines = async (): Promise<Magazine[]> => {
  if (!_magazines) {
    const magazines = await getCollection('magazine');
    _magazines = magazines.map((magazine) => ({
      ...magazine.data,
      ...(magazine.data.pdf && { pdf: composeUrlPdf(magazine.data.pdf) }),
    }));
    _magazines.sort((a, b) => parseInt(b.year) - parseInt(a.year));
  }

  return _magazines;
};

export const fetchLastMagazine = async (): Promise<Magazine> => {
  const magazines = await fetchMagazines();
  return magazines[0];
};

export const fetchHazteHermano = async (): Promise<HazteHermano> => {
  if (!_hazteHermano) {
    const hazteHermano = await getCollection('haztehermano');
    _hazteHermano = hazteHermano[0]?.data;
    const { Content } = await hazteHermano[0].render();
    _hazteHermano.DescriptionPrivacidad = Content;
  }

  return _hazteHermano;
};
