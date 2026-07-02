import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Replace https://www.example.org with the final production domain before launch.
  site: 'https://www.example.org',
  integrations: [sitemap()],
  output: 'static',
});
