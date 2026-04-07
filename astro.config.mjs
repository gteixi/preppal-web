// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://preppal-web.vercel.app',
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca', 'es'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});