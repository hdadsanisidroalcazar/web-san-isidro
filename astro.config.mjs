import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';

import tasks from './src/utils/tasks';
import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter.mjs';
import { SITE } from './src/utils/config';
import compressor from 'astro-compressor';

import { CopyFilesPlugin } from './copy-files.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',

  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: 'file',
  },

  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: (page) => !page.includes('/cesion-de-instalaciones') && !page.includes('/admin'),
    }),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
      },
    }),
    tasks(),
    compressor({
      gzip: false,
      brotli: true,
    }),
    CopyFilesPlugin(),
  ],
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin],
  },
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
  adapter: vercel({
    imageConfig: {
      sizes: [400, 900],
    },
    imageService: true,
    webAnalytics: {
      enabled: true,
    },
    speedInsights: {
      enabled: true,
    },
  }),
});
