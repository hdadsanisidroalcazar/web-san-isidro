import { RSS } from './utils/config';
import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
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
          href: getPermalink('/hermandad/fundacion'),
        },
        {
          text: 'Evolución',
          href: getPermalink('/hermandad/evolucion'),
        },
        {
          text: 'La ermita',
          href: getPermalink('/ermita'),
        },
        {
          text: 'Medalla',
          href: getPermalink('/medalla'),
        },
        {
          text: 'Artículos',
          href: getPermalink('/articulos', 'category'),
        },
      ],
    },
    {
      text: 'San Isidro',
      links: [
        {
          text: 'Historia',
          href: getPermalink('/san-isidro/historia'),
        },
        {
          text: 'Programa de cultos y actos',
          href: getPermalink('/san-isidro/cultos'),
        },
        {
          text: 'Revistas',
          href: getPermalink('/revistas'),
        },
        {
          text: 'Cartelería',
          href: getPermalink('/san-isidro/carteleria'),
        },
      ],
    },
    {
      text: 'Santas',
      links: [
        {
          text: 'Historia',
          href: getPermalink('/santas/historia'),
        },
        {
          text: 'Programa de cultos y actos',
          href: getPermalink('/santas/cultos'),
        },
      ],
    },
    {
      text: 'Galería',
      href: getPermalink('/galeria'),
    },
    {
      text: 'Patrocinadores',
      href: getPermalink('/patrocinadores'),
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
        { text: 'Fundación', href: '/hermandad/fundacion' },
        { text: 'Evolución', href: '/hermandad/evolucion' },
        { text: 'La ermita', href: '/ermita' },
        { text: 'La medalla', href: '/medalla' },
        { text: 'Artículos', href: '/categoria/articulos' },
      ],
    },
    {
      title: 'San Isidro',
      links: [
        { text: 'Historia', href: '/san-isidro/historia' },
        { text: 'Programa de cultos y actos', href: '/san-isidro/cultos' },
        { text: 'Revistas', href: '/revistas' },
        { text: 'Cartelería', href: '/san-isidro/carteleria' },
      ],
    },
    {
      title: 'Santas',
      links: [
        { text: 'Hisoria', href: 'santas/hitoria' },
        { text: 'Programa de cultos y actos', href: '/santas/cultos' },
      ],
    },
    {
      links: [
        { text: 'Galería de fotos', href: '/galería' },
        { text: 'Patrocinadores', href: '/patrocinadores' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos y condiciones', href: getPermalink('/terms') },
    { text: 'Politica de privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: `https://www.instagram.com/${RSS.instagram}` },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: `https://www.facebook.com/${RSS.facebook}` },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
};
