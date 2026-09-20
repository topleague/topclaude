import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://topleaguetech.com',
  integrations: [sitemap()],
  vite: { plugins: [tailwind()] },
});
