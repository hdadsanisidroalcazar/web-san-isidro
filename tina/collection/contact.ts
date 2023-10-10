import type { Collection } from 'tinacms';

export const Contact: Collection = {
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
      name: 'descrptionform',
      label: 'Texto inferior (formulario)',
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
};
