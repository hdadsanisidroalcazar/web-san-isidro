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
      },
      {
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
      },
      {
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
            type: 'string',
            name: 'category',
            label: 'Categoria',
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Etiquetas',
            required: false,
            list: true,
            ui: {
              component: 'tags',
            },
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
      },
      {
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
      },
      {
        name: 'form',
        label: 'Formularios',
        path: 'src/content/form',
        format: 'md',
        fields: [
          {
            type: 'boolean',
            name: 'closed',
            label: 'Desactivar formulario',
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Texto inicial',
            required: true,
            isBody: true,
          },
          {
            type: 'object',
            name: 'field',
            label: 'Campo',
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
                label: 'Texto',
                required: true,
              },
              {
                type: 'string',
                name: 'name',
                label: 'Código interno (palabra sin espacios ni caracteres raros, Ejemplo: nombre-apellidos)',
              },
            ],
          },
        ],
      },
    ],
  },
});
