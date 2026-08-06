// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site is a GitHub *project* page, so it is served from a sub-path.
// Every internal link must go through `href()` in src/lib/paths.ts, which
// prefixes import.meta.env.BASE_URL — hard-coded absolute paths will 404 in production.
export default defineConfig({
  site: 'https://rude-seagull.github.io',
  base: '/jitensha',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
