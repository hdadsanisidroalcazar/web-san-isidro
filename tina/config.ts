import { defineConfig } from 'tinacms';
import {
  Home,
  Magazine,
  Sponsor,
  Contact,
  Generic,
  Post,
  Cultos,
  Form,
  Instruction,
  Gallery,
  HazteHermano,
} from './collection';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.VERCEL_GIT_COMMIT_REF || 'master';

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
    collections: [Home, Magazine, Sponsor, Contact, Generic, Post, Cultos, Form, Instruction, Gallery, HazteHermano],
  },
});
