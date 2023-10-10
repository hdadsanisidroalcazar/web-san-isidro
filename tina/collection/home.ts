import type { Collection } from 'tinacms';

export const Home: Collection = {
  name: 'home',
  label: 'Inicio',
  path: 'src/content/home',
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
      name: 'announce',
      label: 'Anuncio',
    },
    {
      type: 'string',
      name: 'titlefaqs',
      label: 'Titulo de faqs',
    },
    {
      type: 'string',
      name: 'subtitlefaqs',
      label: 'Subtitulo de faqs',
    },
    {
      type: 'string',
      name: 'taglinefaqs',
      label: 'Etiqueta inferior de faqs',
    },
    {
      type: 'object',
      name: 'faqs',
      label: 'Preguntas frecuentes',
      list: true,
      ui: {
        itemProps: (item) => {
          // Field values are accessed by item?.<Field name>
          return { label: item?.title };
        },
      },
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Pregunta',
        },
        {
          type: 'string',
          name: 'description',
          label: 'Respuesta',
        },
      ],
    },
  ],
};
