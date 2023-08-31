import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'master';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  search: {
    tina: {
      indexerToken: process.env.TINA_INDEXER_TOKEN,
      stopwordLanguages: ['spa'],
    },
  },

  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
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
          }
        ],
      },
      {
        name: 'post',
        label: 'Actualidad',
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
            name: 'description',
            label: 'Descripción',
            required: true,
          },
          {
            type: 'string',
            name: 'category',
            label: 'Categoria',
            required: true,
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Etiquetas',
            required: false,
            list: true,
            options: ['tag1', 'tag2', 'tag3'],
          },
          {
            type: 'datetime',
            name: 'publishDate',
            label: 'Fecha de publicación',
            required: false,
          },
          {
            type: 'image',
            name: 'image',
            label: 'Imagen de portada',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Cuerpo',
            isBody: true,
          },
        ],
      },
      {
        name: 'article',
        label: 'Articulos',
        path: 'src/content/article',
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
            type: 'string',
            name: 'author',
            label: 'Autor',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Cuerpo',
            isBody: true,
          },
        ],
      },
    ],
  },
});
