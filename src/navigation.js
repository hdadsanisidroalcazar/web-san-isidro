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
          text: 'Historia',
          href: getPermalink('/hermandad/historia'),
        },
        {
          text: 'La ermita',
          href: getPermalink('/ermita'),
        },
        {
          text: 'Medalla',
          href: getPermalink('/hermandad/medalla'),
        },
        {
          text: 'Artículos',
          href: getPermalink('/articulos', 'category'),
        },
        {
          text: 'Entrevistas',
          href: getPermalink('/entrevistas', 'category'),
        },
        {
          text: 'Poemas',
          href: getPermalink('/poemas', 'category'),
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
        { text: 'Evolución de la Romería', href: getPermalink('/san-isidro/evolucion') },
        {
          text: 'Programa de cultos y actos',
          href: getPermalink('/san-isidro/cultos'),
        },
        {
          text: 'Revistas',
          href: getPermalink('/revistas'),
        },
      ],
    },
    {
      text: 'Sta. Águeda y Sta. Apolonia',
      links: [
        {
          text: 'Historia',
          href: getPermalink('/santa-agueda-y-santa-apolonia/historia'),
        },
        { text: 'Evolución de las festividades', href: getPermalink('/santa-agueda-y-santa-apolonia/evolucion') },
        {
          text: 'Programa de cultos y actos',
          href: getPermalink('/santa-agueda-y-santa-apolonia/cultos'),
        },
      ],
    },
    //    {
    //      text: 'Galería',
    //      href: getPermalink('/galeria'),
    //    },
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
        { text: 'Historia', href: '/hermandad/historia' },
        { text: 'La ermita', href: '/ermita' },
        { text: 'La medalla', href: '/hermandad/medalla' },
      ],
    },
    {
      title: 'San Isidro',
      links: [
        { text: 'Historia', href: '/san-isidro/historia' },
        { text: 'Evolución de la Romería', href: '/san-isidro/evolucion' },
        { text: 'Programa de cultos y actos', href: '/san-isidro/cultos' },
        { text: 'Revistas', href: '/revistas' },
        { text: 'Cartelería', href: '/san-isidro/carteleria' },
      ],
    },
    {
      title: 'Santa Águeda y Santa Apolonia',
      links: [
        { text: 'Historia', href: '/santa-agueda-y-santa-apolonia/historia' },
        { text: 'Evolución de las festividades', href: '/santa-agueda-y-santa-apolonia/evolucion' },
        { text: 'Programa de cultos y actos', href: '/santa-agueda-y-santa-apolonia/cultos' },
      ],
    },
    {
      links: [
        //        { text: 'Galería de fotos', href: '/galería' },
        { text: 'Artículos', href: '/categoria/articulos' },
        { text: 'Entrevistas', href: '/categoria/entrevistas' },
        { text: 'Poemas', href: '/categoria/poemas' },
        // { text: 'Patrocinadores', href: '/patrocinadores' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos y condiciones', href: getPermalink('/terminos') },
    { text: 'Politica de privacidad', href: getPermalink('/privacidad') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: `https://www.instagram.com/${RSS.instagram}` },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: `https://www.facebook.com/${RSS.facebook}` },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: `https://whatsapp.com/${RSS.whatsapp}` },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: `https://www.youtube.com//${RSS.youtube}` },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
};
