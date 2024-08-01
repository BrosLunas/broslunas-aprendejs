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
        'en': {
          label: 'English',
          lang: 'en',
        },
      },
    logo: {
      src: './src/assets/ion-logo.svg'
    },
    social: {
      github: 'https://github.com/Broslunas'
    },
    sidebar: [{
      label: '[home] Inicio',
      link: '/'
    }, {
      label: '[book] Introducción',
      autogenerate: {
        directory: 'introduccion'
      }
    }, {
      label: '[book] Referencias',
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