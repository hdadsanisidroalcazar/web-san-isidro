import { z, defineCollection } from 'astro:content';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

const homeCollection = defineCollection({
  type: 'data',
  schema: z.object({
    announceTitle: z.string().optional(),
    announce: z.string().optional(),
    titlefaqs: z.string().optional(),
    subtitlefaqs: z.string().optional(),
    taglinefaqs: z.string().optional(),
    faqs: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      )
      .optional(),
  }),
});

const magazineCollection = defineCollection({
  type: 'data',
  schema: z.object({
    year: z.string(),
    pdf: z.string().optional(),
    image: z.string(),
    description: z.string().optional(),
    url: z.string().optional(),
  }),
});

const contactCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    tagline: z.string(),
    image: z.string(),
    map: z.string(),
    titleform: z.string(),
    subtitleform: z.string(),
    disclaimer: z.string(),
    descrptionform: z.string().optional(),
    email: z.string(),
    phone: z.string(),
    address: z.string(),
  }),
});

const sponsorCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    sponsor: z.array(z.string()),
  }),
});

const cultCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    tagline: z.string(),
    pdf: z.string().optional(),
    days: z
      .array(
        z.object({
          title: z.string(),
          event: z
            .array(
              z.object({
                title: z.string(),
                time: z.string(),
                description: z.string(),
                location: z.string().optional(),
                map: z.string().optional(),
                image: z.string().optional(),
                buttons: z
                  .array(
                    z.object({
                      text: z.string(),
                      link: z.string(),
                    })
                  )
                  .optional(),
              })
            )
            .optional(),
        })
      )
      .optional(),
  }),
});

const formCollection = defineCollection({
  schema: z.object({
    closed: z.boolean().optional(),
    title: z.string(),
    body: z.string().optional(),
    field: z
      .array(
        z.object({
          label: z.string(),
          name: z.string(),
        })
      )
      .optional(),
  }),
});

const galleryCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.date(),
    image: z.string(),
    body: z.string().optional(),
    folder: z.string().optional(),
    galleries: z
      .array(
        z.object({
          title: z.string().optional(),
          description: z.string().optional(),
          folder: z.string(),
        })
      )
      .optional(),
  }),
});

const genericCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    body: z.string().optional(),
  }),
});

const hazteHermanoCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    dni: z.string(),
    nombre: z.string(),
    primerapellido: z.string(),
    segundoapellido: z.string(),
    fechadenacimiento: z.string(),
    localidadnacimiento: z.string(),
    provincianacimiento: z.string(),
    telefono: z.string(),
    email: z.string(),
    direccion: z.string(),
    localidad: z.string(),
    provincia: z.string(),
    codigopostal: z.string(),
    parroquiabaustismo: z.string(),
    localidadbaustismo: z.string(),
    provinciabaustismo: z.string(),
    menores: z.string(),
    padremenor: z.string(),
    dnimenor: z.string(),
    titleavalista: z.string(),
    hermano: z.string(),
    comunicaciones: z.string(),
    aceptacion: z.string(),
    titlepago: z.string(),
    desciptionpago: z.string(),
    metalico: z.string(),
    bizum: z.string(),
    enviar: z.string(),
    titlePrivacidad: z.string(),

  }),
});

export const collections = {
  post: postCollection,
  home: homeCollection,
  magazine: magazineCollection,
  contact: contactCollection,
  sponsor: sponsorCollection,
  cult: cultCollection,
  form: formCollection,
  gallery: galleryCollection,
  generic: genericCollection,
  haztehermano: hazteHermanoCollection,
};
