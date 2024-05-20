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
      type: 'object',
      name: 'galleries',
      label: 'Galerías',
      list: true,
      ui: {
        itemProps: (item) => {
          return { label: item?.title };
        },
      },
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Título (opcional)',
        },
        {
          type: 'string',
          name: 'description',
          label: 'Descripción (opcional)',
        },
        {
          type: 'string',
          name: 'folder',
          label: 'Carpeta de la galería',
        },
      ],
    },
  ],
};
