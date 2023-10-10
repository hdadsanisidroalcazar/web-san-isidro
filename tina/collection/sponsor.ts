import type { Collection } from 'tinacms';

export const Sponsor: Collection = {
  name: 'sponsor',
  label: 'Patrocinadores',
  path: 'src/content/sponsor',
  format: 'json',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Título',
      required: true,
    },
    {
      type: 'string',
      name: 'subtitle',
      label: 'Subtítulo',
    },
    {
      type: 'image',
      name: 'sponsor',
      label: 'Patrocinadores',
      list: true,
    },
  ],
};
