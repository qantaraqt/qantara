// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://qantara.com.br',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/safelink/admin'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
