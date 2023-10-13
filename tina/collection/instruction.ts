import type { Collection } from 'tinacms';

export const Instruction: Collection = {
  name: 'instruction',
  label: 'Manual de uso',
  path: 'doc',
  format: 'md',
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
      isTitle: true,
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Cuerpo',
      isBody: true,
    },
  ],
};
