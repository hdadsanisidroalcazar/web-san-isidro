import { getCollection } from 'astro:content';
import type { Home, Contact, Sponsor, Magazine } from '~/types';

let _home: Home;
let _contact: Contact;
let _sponsor: Sponsor;
let _magazines: Magazine[];

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
    _contact = contacts[0]?.data;
  }

  return _contact;
};

export const fetchMagazines = async (): Promise<Magazine[]> => {
  if (!_magazines) {
    const magazines = await getCollection('magazine');
    _magazines = magazines.map((magazine) => magazine.data);
    _magazines.sort((a, b) => parseInt(b.year) - parseInt(a.year))
  }

  return _magazines;
};
