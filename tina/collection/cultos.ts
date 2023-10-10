import type { Collection } from 'tinacms';

export const Cultos: Collection = {
  name: 'cultos',
  label: 'Cultos',
  path: 'src/content/cult',
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
      label: 'Titulo',
      isTitle: true,
      required: true,
    },
    {
      type: 'string',
      name: 'subtitle',
      label: 'Subtitulo',
    },
    {
      type: 'string',
      name: 'tagline',
      label: 'Etiqueta superior',
    },
    {
      type: 'image',
      name: 'pdf',
      label: 'PDF',
    },
    {
      type: 'object',
      name: 'days',
      label: 'Días',
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
          label: 'Título',
        },
        {
          type: 'object',
          name: 'event',
          label: 'Evento',
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
              label: 'Titulo',
              required: true,
            },
            {
              type: 'string',
              name: 'time',
              label: 'Hora',
              required: true,
            },
            {
              type: 'rich-text',
              name: 'description',
              label: 'Descripción',
            },
            {
              type: 'string',
              name: 'location',
              label: 'Ubicación',
            },
            {
              type: 'string',
              name: 'map',
              label: 'Google maps',
            },
            {
              type: 'image',
              name: 'image',
              label: 'Cartel',
            },
            {
              type: 'object',
              name: 'buttons',
              label: 'Botones',
              list: true,
              ui: {
                itemProps: (item) => {
                  return { label: item?.text };
                },
              },
              fields: [
                {
                  type: 'string',
                  name: 'text',
                  label: 'Texto',
                  required: true,
                },
                {
                  type: 'string',
                  name: 'link',
                  label: 'Enlace',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
