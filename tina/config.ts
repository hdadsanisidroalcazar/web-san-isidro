import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "master";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "src/assets/images",
      publicFolder: "/_astro",
    },
  },
  schema: {
    collections: [
      {
        name: "news",
        label: "Actualidad",
        path: "src/content/news",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titulo",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Descripción",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Categoria",
            required: true,
          },
          {
            type: "string",
            name: "tags",
            label: "Etiquetas",
            required: false,
            list: true,
            options: ["tag1", "tag2", "tag3"],

          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Fecha de publicación",
            required: false,
          },
          {
            type: "image",
            name: "image",
            label: "Imagen de portada",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Cuerpo",
            isBody: true,
          },
        ],
      },
    ],
  },
});
