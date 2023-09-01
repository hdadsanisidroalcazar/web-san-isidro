import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'master';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT || null,
  token: process.env.TINA_TOKEN || null,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  ...(process.env.TINA_INDEXER_TOKEN && {
    search: {
      tina: {
        indexerToken: process.env.TINA_INDEXER_TOKEN,
        stopwordLanguages: ['spa'],
      },
    },
  }),

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
          },
        ],
      },
      {
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
      },
      {
        name: 'contact',
        label: 'Contacto',
        path: 'src/content/contact',
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
          },
          {
            type: 'string',
            name: 'subtitle',
            label: 'Subtitulo',
          },
          {
            type: 'string',
            name: 'tagline',
            label: 'Etiqueta inferior',
          },
          {
            type: 'image',
            name: 'image',
            label: 'Imagen principal',
          },
          {
            type: 'string',
            name: 'map',
            label: 'Url mapa',
            required: true,
          },
          {
            type: 'string',
            name: 'titleform',
            label: 'Título (formulario)',
          },
          {
            type: 'string',
            name: 'subtitleform',
            label: 'Subtitulo (formulario)',
          },
          {
            type: 'string',
            name: 'disclaimer',
            label: 'Descargo de responsabilidad (formulario)',
          },
          {
            type: 'string',
            name: 'email',
            label: 'Email',
            required: true,
          },
          {
            type: 'string',
            name: 'phone',
            label: 'Teléfono',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'address',
            label: 'Dirección',
            required: true,
          },
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
