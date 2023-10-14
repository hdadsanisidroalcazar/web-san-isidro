import fs from 'fs';
import yaml from 'js-yaml';
import merge from 'lodash.merge';

import type { MetaData } from '~/types';

export interface SiteConfig {
  name: string;
  site?: string;
  base?: string;
  trailingSlash?: boolean;
}
export interface MetaDataConfig extends Omit<MetaData, 'title'> {
  title?: {
    default: string;
    template: string;
  };
}

export interface AppGenericConfig {
  isEnabled: boolean;
  generic: {
    isEnabled: boolean;
    permalink: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
}

export interface AppCultConfig {
  isEnabled: boolean;
  cult: {
    isEnabled: boolean;
    permalink: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
}

export interface AppFormConfig {
  isEnabled: boolean;
  form: {
    isEnabled: boolean;
    permalink: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
}

export interface AppBlogConfig {
  isEnabled: boolean;
  postsPerPage: number;
  archivedCategories: string[];
  post: {
    isEnabled: boolean;
    permalink: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  list: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  category: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  tag: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
}
export interface RssConfig {
  instagram: string;
  facebook: string;
}

export interface GalleryConfig {
  isEnabled: boolean;
  postsPerPage: number;
  gallery: {
    isEnabled: boolean;
    permalink: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
  all: {
    isEnabled: boolean;
    pathname: string;
    robots: {
      index: boolean;
      follow: boolean;
    };
  };
}

const config = yaml.load(fs.readFileSync('src/config.yaml', 'utf8')) as {
  site?: SiteConfig;
  metadata?: MetaDataConfig;
  apps?: {
    blog?: AppBlogConfig;
    generic?: AppGenericConfig;
    cults?: AppCultConfig;
    forms?: AppFormConfig;
    gallery?: GalleryConfig;
  };
  ui?: unknown;
  rss?: RssConfig;
};

const DEFAULT_SITE_NAME = 'Hermandad de San Isidro Labrador';

const getSite = () => {
  const _default = {
    name: DEFAULT_SITE_NAME,
    site: undefined,
    base: '/',
    trailingSlash: false,
  };

  return merge({}, _default, config?.site ?? {}) as SiteConfig;
};

const getMetadata = () => {
  const siteConfig = getSite();

  const _default = {
    title: {
      default: siteConfig?.name || DEFAULT_SITE_NAME,
      template: '%s',
    },
    description: '',
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      type: 'website',
    },
  };

  return merge({}, _default, config?.metadata ?? {}) as MetaDataConfig;
};

const getAppGeneric = () => {
  const _default = {
    isEnabled: false,
    generic: {
      isEnabled: true,
      permalink: '/%slug%',
      robots: {
        index: true,
        follow: true,
      },
    },
  };

  return merge({}, _default, config?.apps?.generic ?? {}) as AppGenericConfig;
};

const getAppCults = () => {
  const _default = {
    isEnabled: false,
    cult: {
      isEnabled: true,
      permalink: '/cultos/%id%',
      robots: {
        index: true,
        follow: true,
      },
    },
  };

  return merge({}, _default, config?.apps?.cults ?? {});
};

const getAppForms = () => {
  const _default = {
    isEnabled: false,
    form: {
      isEnabled: true,
      permalink: '/inscripciones/%id%',
      robots: {
        index: true,
        follow: true,
      },
    },
  };

  return merge({}, _default, config?.apps?.forms ?? {});
};

const getAppBlog = () => {
  const _default = {
    isEnabled: false,
    postsPerPage: 6,
    archivedCategories: [],
    post: {
      isEnabled: true,
      permalink: '/actualidad/%slug%',
      robots: {
        index: true,
        follow: true,
      },
    },
    list: {
      isEnabled: true,
      pathname: 'actualidad',
      robots: {
        index: true,
        follow: true,
      },
    },
    category: {
      isEnabled: true,
      pathname: 'categoria',
      robots: {
        index: true,
        follow: true,
      },
    },
    tag: {
      isEnabled: true,
      pathname: 'tag',
      robots: {
        index: false,
        follow: true,
      },
    },
  };

  return merge({}, _default, config?.apps?.blog ?? {}) as AppBlogConfig;
};

const getUI = () => {
  const _default = {
    theme: 'system',
    classes: {},
    tokens: {},
  };

  return merge({}, _default, config?.ui ?? {});
};

const getRss = () => {
  const _default = {
    instagram: '',
    facebook: '',
  };

  return merge({}, _default, config?.rss ?? {});
};

const getGalleries = () => {
  const _default = {
    isEnabled: false,
    postsPerPage: 6,
    gallery: {
      isEnabled: true,
      permalink: '/galeria/%slug%',
      robots: {
        index: true,
        follow: true,
      },
    },
    all: {
      isEnabled: true,
      pathname: 'galeria',
      robots: {
        index: true,
        follow: true,
      },
    },
  };

  return merge({}, _default, config?.apps?.gallery ?? {}) as GalleryConfig;
};

export const SITE = getSite();
export const METADATA = getMetadata();
export const APP_BLOG = getAppBlog();
export const APP_GENERIC = getAppGeneric();
export const APP_CULTS = getAppCults();
export const APP_FORMS = getAppForms();
export const APP_GALLERY = getGalleries();
export const UI = getUI();
export const RSS = getRss();
