import type { Collection } from 'tinacms';

export const Magazine: Collection = {
  name: 'magazine',
  label: 'Revistas',
  path: 'src/content/magazine',
  format: 'json',
  fields: [
    {
      type: 'string',
      name: 'year',
      label: 'Año',
      required: true,
    },
    {
      type: 'string',
      name: 'description',
      label: 'Descripción',
    },
    {
      type: 'image',
      name: 'image',
      label: 'Imagen',
      required: true,
    },
    {
      type: 'image',
      name: 'pdf',
      label: 'PDF',
    },
    {
      type: 'string',
      name: 'url',
      label: 'Enlace',
    },
  ],
};
