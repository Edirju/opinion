// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), preact()],
    vite: {
    plugins: [tailwindcss()],
  },
});