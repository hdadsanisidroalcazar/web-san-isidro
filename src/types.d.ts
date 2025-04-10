import type { HTMLAttributes } from 'astro/types';
export interface Home {
  announceTitle?: string;
  announce?: string;
  titlefaqs?: string;
  subtitlefaqs?: string;
  taglinefaqs?: string;
  faqs?: {
    title: string;
    description: string;
  }[];
}

export interface Form {
  id: string;
  slug: string;
  permalink: string;
  /** **/
  title: string;
  Content?: unknown;
  content?: string;
  closed?: boolean;
  field?: { title: string; name: string }[];
}

export interface Cult {
  id: string;
  slug: string;
  permalink: string;
  /** **/
  title: string;
  subtitle?: string;
  tagline?: string;
  pdf?: string;
  closed?: boolean;
  days: {
    title: string;
    event: {
      title: string;
      time: string;
      map: string;
      description?: string;
      location?: string;
      image?: string;
      buttons?: {
        text: string;
        link: string;
      }[];
    }[];
  }[];
}

export interface Magazine {
  year: string;
  description?: string;
  image: string;
  pdf?: string;
  url?: string;
}

export interface HazteHermano {
  title: string;
  subtitle: string;
  descargar: string;
  dni: string;
  nombre: string;
  primerapellido: string;
  segundoapellido: string;
  fechadenacimiento: string;
  localidadnacimiento: string;
  provincianacimiento: string;
  telefono: string;
  email: string;
  direccion: string;
  localidad: string;
  provincia: string;
  codigopostal: string;
  parroquiabaustismo: string;
  localidadbaustismo: string;
  provinciabaustismo: string;
  menores: string;
  padremenor: string;
  dnimenor: string;
  titleavalista: string;
  hermano: string;
  comunicaciones: string;
  aceptacion: string;
  titlepago: string;
  desciptionpago: string;
  metalico: string;
  bizum: string;
  enviar: string;
  titlePrivacidad: string;
  DescriptionPrivacidad: unknown;
}

export interface Sponsor {
  title?: string;
  subtitle?: string;
  sponsor?: string[];
}

export interface Contact {
  title?: string;
  subtitle?: string;
  tagline?: string;
  image: string;
  titleform?: string;
  subtitleform?: string;
  disclaimer?: string;
  descrptionform?: string;
  email: string;
  phone: string;
  address: string;
  map: string;
}

export interface Gallery {
  id: string;
  slug: string;
  permalink: string;
  publishDate: Date;
  updateDate?: Date;
  title: string;
  description?: string;
  image?: string;
  metadata?: MetaData;
  Content?: unknown;
  content?: string;
  folder?: string;
  galleries?: {
    title?: string;
    description?: string;
    folder: string;
  }[];
}

export interface Generic {
  /** A unique ID number that identifies a post. */
  id: string;

  /** A post’s unique slug – part of the post’s URL based on its name, i.e. a post called “My Sample Page” has a slug “my-sample-page”. */
  slug: string;

  /**  */
  permalink: string;

  Content?: unknown;
  content?: string;

  title?: string;
  index?: boolean;
  follow?: boolean;
}

export interface Post {
  /** A unique ID number that identifies a post. */
  id: string;

  /** A post’s unique slug – part of the post’s URL based on its name, i.e. a post called “My Sample Page” has a slug “my-sample-page”. */
  slug: string;

  /**  */
  permalink: string;

  /**  */
  publishDate: Date;
  /**  */
  updateDate?: Date;

  /**  */
  title: string;
  /** Optional summary of post content. */
  description?: string;
  /**  */
  image?: string;

  /**  */
  category?: string;
  /**  */
  tags?: Array<string>;
  /**  */
  author?: string;

  /**  */
  metadata?: MetaData;

  /**  */
  draft?: boolean;

  /**  */
  Content?: unknown;
  content?: string;

  /**  */
  readingTime?: number;
}

export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;

  canonical?: string;

  robots?: MetaDataRobots;

  description?: string;

  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}

export interface MetaDataImage {
  url: string;
  width?: number;
  height?: number;
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface Image {
  src: string;
  alt?: string;
}

export interface Video {
  src: string;
  type?: string;
}

export interface Widget {
  id?: string;
  isDark?: boolean;
  bg?: string;
  classes?: Record<string, string>;
}

export interface Headline {
  title?: string;
  subtitle?: string;
  tagline?: string;
  classes?: Record<string, string>;
}

interface TeamMember {
  name?: string;
  job?: string;
  image?: Image;
  socials?: Array<Social>;
  description?: string;
  classes?: Record<string, string>;
}

interface Social {
  icon?: string;
  href?: string;
}

export interface Stat {
  amount?: number;
  title?: string;
  icon?: string;
}

export interface Item {
  title?: string;
  description?: string;
  icon?: string;
  classes?: Record<string, string>;
  callToAction?: CallToAction;
  image?: Image;
}

export interface Price {
  title?: string;
  subtitle?: string;
  description?: string;
  price?: number;
  period?: string;
  items?: Array<Item>;
  callToAction?: CallToAction;
  hasRibbon?: boolean;
  ribbonTitle?: string;
}

export interface Testimonial {
  title?: string;
  testimonial?: string;
  name?: string;
  job?: string;
  image?: string | unknown;
}

export interface Input {
  type: HTMLInputTypeAttribute;
  name: string;
  label?: string;
  autocomplete?: string;
  placeholder?: string;
}

export interface Textarea {
  label?: string;
  placeholder?: string;
  rows?: number;
}

export interface Disclaimer {
  label?: string;
}

// COMPONENTS
export interface CallToAction extends HTMLAttributes<a> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link';
  text?: string;
  icon?: string;
  classes?: Record<string, string>;
}

export interface ItemGrid {
  items?: Array<Item>;
  columns?: number;
  defaultIcon?: string;
  classes?: Record<string, string>;
}

export interface Collapse {
  iconUp?: string;
  iconDown?: string;
  items?: Array<Item>;
  columns?: number;
  classes?: Record<string, string>;
}

export interface Form {
  inputs?: Array<Input>;
  textarea?: Textarea;
  disclaimer?: Disclaimer;
  button?: string;
  description?: string;
}

// WIDGETS
export interface Hero extends Headline, Widget {
  content?: string;
  image?: string | unknown;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
}

export interface Team extends Headline, Widget {
  team?: Array<TeamMember>;
}

export interface Stats extends Headline, Widget {
  stats?: Array<Stat>;
}

export interface Pricing extends Headline, Widget {
  prices?: Array<Price>;
}

export interface Testimonials extends Headline, Widget {
  testimonials?: Array<Testimonial>;
  callToAction?: CallToAction;
}

export interface Brands extends Headline, Widget {
  icons?: Array<string>;
  images?: Array<Image>;
}

export interface Features extends Headline, Widget {
  image?: string | unknown;
  video?: Video;
  items: Array<Item>;
  columns: number;
  defaultIcon?: string;
  callToAction1?: CallToAction;
  callToAction2?: CallToAction;
  isReversed?: boolean;
  isBeforeContent?: boolean;
  isAfterContent?: boolean;
}

export interface Faqs extends Headline, Widget {
  iconUp?: string;
  iconDown?: string;
  items?: Array<Item>;
  columns?: number;
}

export interface Steps extends Headline, Widget {
  items: Array<{
    title: string;
    description?: string;
    icon?: string;
    classes?: Record<string, string>;
  }>;
  callToAction?: string | CallToAction;
  image?: string | Image;
  isReversed?: boolean;
}

export interface Content extends Headline, Widget {
  content?: string;
  image?: string | unknown;
  items?: Array<Item>;
  columns?: number;
  isReversed?: boolean;
  isAfterContent?: boolean;
  callToAction?: CallToAction;
}

export interface Contact extends Headline, Form, Widget {}
