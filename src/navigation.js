import { RSS } from './utils/config';
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/')
    },
    {
      text: 'Actualidad',
      href: getPermalink('/actualidad'),
    },
    {
      text: 'Hermandad',
      links: [
        {
          text: 'Fundación',
          href: getPermalink('/#features'),
        },
        {
          text: 'Evolución',
          href: getPermalink('/services'),
        },
        {
          text: 'La ermita',
          href: getPermalink('/pricing'),
        },
        {
          text: 'Medalla',
          href: getPermalink('/about'),
        },
        {
          text: 'Contacto',
          href: getPermalink('/contacto'),
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'San Isidro',
      links: [
        {
          text: 'Historia',
          href: getPermalink('/landing/lead-generation'),
        },
        {
          text: 'Programa de cultos y actos',
          href: getPermalink('/landing/sales'),
        },
        {
          text: 'Revistas',
          href: getPermalink('/landing/click-through'),
        },
        {
          text: 'Cartelería',
          href: getPermalink('/landing/product'),
        },
        {
          text: 'Coming Soon or Pre-Launch',
          href: getPermalink('/landing/pre-launch'),
        },
        {
          text: 'Subscription',
          href: getPermalink('/landing/subscription'),
        },
      ],
    },
    {
      text: 'Santas',
      links: [
        {
          text: 'Historia',
          href: getBlogPermalink(),
        },
        {
          text: 'Programa de cultos y actos',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
        {
          text: 'Article (with MDX)',
          href: getPermalink('markdown-elements-demo-post', 'post'),
        },
        {
          text: 'Category Page',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: 'Tag Page',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Galería',
      href: '#',
    },
    {
      text: 'Patrocinadores',
      href: '#',
    },
    {
      text: 'Contacto',
      href: getPermalink('/contacto'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Hermandad',
      links: [
        { text: 'Fundación', href: '#' },
        { text: 'Evolución', href: '#' },
        { text: 'La ermita', href: '#' },
        { text: 'La medalla', href: '#' },
      ],
    },
    {
      title: 'San Isidro',
      links: [
        { text: 'Historia', href: '#' },
        { text: 'Programa de cultos y actos', href: '#' },
        { text: 'Revistas', href: '#' },
        { text: 'Cartelería', href: '#' },
      ],
    },
    {
      title: 'Santas',
      links: [
        { text: 'Hisoria', href: '#' },
        { text: 'Programa de cultos y actos', href: '#' },
      ],
    },
    {
      title: 'Otros',
      links: [
        { text: 'Galería de fotos', href: '#' },
        { text: 'Patrocinadores', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terminos y condiciones', href: getPermalink('/terms') },
    { text: 'Politica de privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: `https://www.instagram.com/${RSS.instagram}` },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: `https://www.facebook.com/${RSS.facebook}` },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
};
