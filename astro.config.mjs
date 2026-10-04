// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://fdcpatraining.com',

  vite: {
      plugins: [tailwindcss()],
	},

  integrations: [
    sitemap({
      // /update stays out of the sitemap (and is noindex) until the client
      // approves it. Remove this filter at launch.
      filter: (page) => !/\/update\/?$/.test(page),
    }),
  ],
});