import type { Collection } from 'tinacms';

export const Form: Collection = {
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
      type: 'string',
      name: 'title',
      label: 'Título',
      required: true,
      isTitle: true,
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
          name: 'label',
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
};
