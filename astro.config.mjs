import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.mahaafoundation.org',
  integrations: [sitemap()],
  output: 'static',
});
