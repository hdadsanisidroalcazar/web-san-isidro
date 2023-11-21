import type { Collection } from 'tinacms';

export const Gallery: Collection = {
  name: 'gallery',
  label: 'Galerías',
  path: 'src/content/gallery',
  format: 'mdx',
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Titulo',
      isTitle: true,
      required: true,
    },
    {
      type: 'string',
      name: 'description',
      label: 'Descripción',
    },
    {
      type: 'datetime',
      name: 'publishDate',
      label: 'Fecha de publicación',
      required: true,
      ui: {
        dateFormat: 'DD/MM/YYYY',
      },
    },
    {
      type: 'image',
      name: 'image',
      label: 'Imagen de portada',
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Cuerpo',
      isBody: true,
    },
    {
      type: 'image',
      name: 'images',
      label: 'Images',
      list: true,
    },
  ],
};
