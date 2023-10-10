import type { Collection } from 'tinacms';

export const Generic: Collection = {
  name: 'generic',
  label: 'Genéricas',
  path: 'src/content/generic',
  format: 'mdx',
  fields: [
    { type: 'string', name: 'title', label: 'Título', required: true },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Cuerpo',
      isBody: true,
    },
  ],
};
