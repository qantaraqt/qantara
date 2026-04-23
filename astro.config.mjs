// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://qantara.cloud',
  vite: {
    plugins: [tailwindcss()],
  },
});
