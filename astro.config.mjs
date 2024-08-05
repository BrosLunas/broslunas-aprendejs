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
      replacesTitle: true,
    },
    social: {
      instagram: 'https://link.broslunas.com/rss/instagram',
      github: 'https://github.com/Broslunas'
    },
    sidebar: [{
      label: '[home] Inicio',
      translations: {
        en: '[home] Home'
      },
      link: '/'
    }, {
      label: '[book] Introducción',
      translations: {
        en: '[book] Introduction'
      },
      autogenerate: {
        directory: 'introduccion'
      }
    }, {
      label: '[list] Estructuras de control',
      translations: {
        en: '[list] Control structures'
      },
      autogenerate: {
        directory: 'estructuras-de-control'
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