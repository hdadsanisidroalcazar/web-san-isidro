import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import compress from 'astro-compress';
import icon from 'astro-icon';
import tasks from './src/utils/tasks';
import { readingTimeRemarkPlugin } from './src/utils/frontmatter.mjs';
import { SITE } from './src/utils/config.ts';
import vercel from '@astrojs/vercel/static';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),
    tasks(),
    compress({
      CSS: true,
      HTML: {
        removeAttributeQuotes: false,
      },
      Image: false,
      JavaScript: true,
      SVG: true,
      Logger: 1,
    }),
  ],
  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
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
  redirects: {
    '/paginas/revista.html': '/revistas',
    '/paginas/articulos/2014_alcazar-villa-ganadera.html': '/actualidad/2014_alcazar-villa-ganadera',
    '/paginas/articulos/2014_historia-agricola-ganadera01.html': '/actualidad/2014_historia-agricola-ganadera01',
    '/paginas/articulos/2014_san-isidro-nuestros-dias.html': '/actualidad/2014_san-isidro-nuestros-dias',
    '/paginas/articulos/2015_hace-50-anos.html': '/actualidad/2015_hace-50-anos',
    '/paginas/articulos/2015_milagros-san-isidro.html': '/actualidad/2015_milagros-san-isidro',
    '/paginas/articulos/2015_real-colegiata.html': '/actualidad/2015_real-colegiata',
    '/paginas/articulos/2015_san-isidro-en-orotava.html': '/actualidad/2015_san-isidro-en-orotava',
    '/paginas/articulos/2016_bonifacio-poeta.html': '/actualidad/2016_bonifacio-poeta',
    '/paginas/articulos/2016_concurso-arado.html': '/actualidad/2016_concurso-arado',
    '/paginas/articulos/2016_san-isidro-cine.html': '/actualidad/2016_san-isidro-cine',
    '/paginas/articulos/2016_san-isidro-en-el-ejido.html': '/actualidad/2016_san-isidro-en-el-ejido',
    '/paginas/entrevistas/2014_entrevista-presidente-hermandad.html':
      '/actualidad/2014_entrevista-presidente-hermandad',
    '/paginas/entrevistas/2014_saluda.html': '/actualidad/2014_saluda',
    '/paginas/entrevistas/2016_saluda01.html': '/actualidad/2016_saluda01',
    '/paginas/entrevistas/2016_saluda02.html': '/actualidad/2016_saluda02',
    '/paginas/ermita.html': '/ermita',
    '/paginas/hermandad_historia.html': '/hermandad/historia',
    '/paginas/poemas/2015_himno-san-isidro.html': '/actualidad/2015_himno-san-isidro',
    '/paginas/poemas/2015_poema_historial-campesino.html': '/actualidad/2015_poema_historial-campesino',
    '/paginas/poemas/2016_poema-espigas-amapolas.html': '/actualidad/2016_poema-espigas-amapolas',
    '/paginas/romeria.html': '/san-isidro/evolucion',
    '/paginas/programa.html': '/san-isidro/cultos',
    '/paginas/revista': '/revistas',
    '/paginas/articulos/2014_alcazar-villa-ganadera': '/actualidad/2014_alcazar-villa-ganadera',
    '/paginas/articulos/2014_historia-agricola-ganadera01': '/actualidad/2014_historia-agricola-ganadera01',
    '/paginas/articulos/2014_san-isidro-nuestros-dias': '/actualidad/2014_san-isidro-nuestros-dias',
    '/paginas/articulos/2015_hace-50-anos': '/actualidad/2015_hace-50-anos',
    '/paginas/articulos/2015_milagros-san-isidro': '/actualidad/2015_milagros-san-isidro',
    '/paginas/articulos/2015_real-colegiata': '/actualidad/2015_real-colegiata',
    '/paginas/articulos/2015_san-isidro-en-orotava': '/actualidad/2015_san-isidro-en-orotava',
    '/paginas/articulos/2016_bonifacio-poeta': '/actualidad/2016_bonifacio-poeta',
    '/paginas/articulos/2016_concurso-arado': '/actualidad/2016_concurso-arado',
    '/paginas/articulos/2016_san-isidro-cine': '/actualidad/2016_san-isidro-cine',
    '/paginas/articulos/2016_san-isidro-en-el-ejido': '/actualidad/2016_san-isidro-en-el-ejido',
    '/paginas/entrevistas/2014_entrevista-presidente-hermandad': '/actualidad/2014_entrevista-presidente-hermandad',
    '/paginas/entrevistas/2014_saluda': '/actualidad/2014_saluda',
    '/paginas/entrevistas/2016_saluda01': '/actualidad/2016_saluda01',
    '/paginas/entrevistas/2016_saluda02': '/actualidad/2016_saluda02',
    '/paginas/ermita': '/ermita',
    '/paginas/hermandad_historia': '/hermandad/historia',
    '/paginas/poemas/2015_himno-san-isidro': '/actualidad/2015_himno-san-isidro',
    '/paginas/poemas/2015_poema_historial-campesino': '/actualidad/2015_poema_historial-campesino',
    '/paginas/poemas/2016_poema-espigas-amapolas': '/actualidad/2016_poema-espigas-amapolas',
    '/paginas/romeria': '/san-isidro/evolucion',
    '/paginas/programa': '/san-isidro/cultos',
  },
});
