import type { Collection } from 'tinacms';

export const Post: Collection = {
  name: 'post',
  label: 'Publicaciones',
  path: 'src/content/post',
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
      name: 'author',
      label: 'Autor',
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
  ],
};
