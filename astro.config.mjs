import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://aprendejs.broslunas.com',
  integrations: [starlight({
    title: {
      es: 'Broslunas Aprende JS',
      en: 'Broslunas Learn JS',
    },
    defaultLocale: 'root', // optional
    locales: {
        root: {
          label: 'Español',
          lang: 'es', // lang is required for root locales
      },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      editLink: {
        baseUrl: 'https://github.com/broslunas/broslunas-aprendejs/edit/main/',
      },

    logo: {
      src: './src/assets/logo.png',
    },
    social: {
      instagram: 'https://link.broslunas.com/rss/instagram',
      github: 'https://github.com/Broslunas',
    },
    sidebar: [{
      label: '[home] Inicio',
      translations: {
        en: '[home] Home'
      },
      link: '/'
    }, {
      label: 'Introducción',
      translations: {
        en: 'Introduction'
      },
      autogenerate: {
        directory: 'introduccion'
      }
    }, {
      label: 'Estructuras de control',
      translations: {
        en: 'Control structures'
      },
      autogenerate: {
        directory: 'estructuras-de-control'
      }
    }, {
      label: 'Funciones',
      translations: {
        en: 'Functions'
      },
      autogenerate: {
        directory: 'funciones'
      }
    }, {
      label: 'Arrays',
      translations: {
        en: 'Arrays'
      },
      autogenerate: {
        directory: 'arrays'
      }
    }, {
      label: 'Objetos',
      translations: {
        en: 'Objects'
      },
      autogenerate: {
        directory: 'objetos'
      }
    }, {
      label: '[book] Referencias',
      translations: {
        en: '[book] Referencies'
      },
      autogenerate: {
        directory: 'referencias'
      }
    }],
    components: {
      ThemeProvider: './src/components/ThemeProvider.astro',
      ThemeSelect: './src/components/ThemeSelect.astro',
      SiteTitle: './src/components/SiteTitle.astro',
      Sidebar: './src/components/Sidebar.astro',
      Pagination: './src/components/Pagination.astro',
      Hero: './src/components/Hero.astro'
    },
    customCss: ['@fontsource-variable/space-grotesk/index.css', '@fontsource/space-mono/400.css', '@fontsource/space-mono/700.css', './src/styles/theme.css'],
    expressiveCode: {
      themes: ['github-dark']
    },
    pagination: true,
    lastUpdated: true
  }),
   sitemap()],
  output: "static"
});