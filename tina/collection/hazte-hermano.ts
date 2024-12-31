import type { Collection } from 'tinacms';

export const HazteHermano: Collection = {
  name: 'haztehermano',
  label: 'Hazte Hermano',
  path: 'src/content/haztehermano',
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
    },
    {
      type: 'string',
      name: 'subtitle',
      label: 'Subtitulo',
    },
    {
      type: 'string',
      name: 'descargar',
      label: 'Texto para descargar',
    },
    {
      type: 'string',
      name: 'dni',
      label: 'DNI',
    },
    {
      type: 'string',
      name: 'nombre',
      label: 'Nombre',
    },
    {
      type: 'string',
      name: 'primerapellido',
      label: 'Primer Apellido',
    },
    {
      type: 'string',
      name: 'segundoapellido',
      label: 'Segundo Apellido',
    },
    {
      type: 'string',
      name: 'fechadenacimiento',
      label: 'Fecha de Nacimiento',
    },
    {
      type: 'string',
      name: 'localidadnacimiento',
      label: 'Localidad de Nacimiento',
    },
    {
      type: 'string',
      name: 'provincianacimiento',
      label: 'Provincia de Nacimiento',
    },
    {
      type: 'string',
      name: 'telefono',
      label: 'Teléfono',
    },
    {
      type: 'string',
      name: 'email',
      label: 'Email',
    },
    {
      type: 'string',
      name: 'direccion',
      label: 'Dirección',
    },
    {
      type: 'string',
      name: 'localidad',
      label: 'Localidad',
    },
    {
      type: 'string',
      name: 'provincia',
      label: 'Provincia',
    },
    {
      type: 'string',
      name: 'codigopostal',
      label: 'Código Postal',
    },
    {
      type: 'string',
      name: 'parroquiabaustismo',
      label: 'Parroquia de Bautismo',
    },
    {
      type: 'string',
      name: 'localidadbaustismo',
      label: 'Localidad de Bautismo',
    },
    {
      type: 'string',
      name: 'provinciabaustismo',
      label: 'Provincia de Bautismo',
    },
    {
      type: 'string',
      name: 'menores',
      label: 'Autorización de menores',
    },
    {
      type: 'string',
      name: 'padremenor',
      label: 'Padre menor',
    },
    {
      type: 'string',
      name: 'dnimenor',
      label: 'DNI padre del menor',
    },
    {
      type: 'string',
      name: 'titleavalista',
      label: 'Título aval de hermano',
    },
    {
      type: 'string',
      name: 'hermano',
      label: 'Hermano avalista X',
    },
    {
      type: 'string',
      name: 'comunicaciones',
      label: 'Aceptar comunicaciones',
    },
    {
      type: 'string',
      name: 'aceptacion',
      label: 'Aceptación privacidad',
    },
    {
      type: 'string',
      name: 'titlepago',
      label: 'Titulo forma de pago',
    },
    {
      type: 'string',
      name: 'desciptionpago',
      label: 'Descripción forma de pago',
    },
    {
      type: 'string',
      name: 'metalico',
      label: 'Metalico',
    },
    {
      type: 'string',
      name: 'bizum',
      label: 'Bizum',
    },
    {
      type: 'string',
      name: 'enviar',
      label: 'Enviar solicitud',
    },
    {
      type: 'string',
      name: 'titlePrivacidad',
      label: 'Título Privacidad',
    },
    {
      type: 'rich-text',
      name: 'descriptionPrivacidad',
      label: 'Descripción Privacidad',
      isBody: true,
    },
  ],
};
