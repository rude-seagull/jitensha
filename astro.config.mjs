// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site is a GitHub *project* page, so it is served from a sub-path.
// Every internal link must go through `href()` in src/lib/paths.ts, which
// prefixes import.meta.env.BASE_URL — hard-coded absolute paths will 404 in production.
export default defineConfig({
  site: 'https://rude-seagull.github.io',
  base: '/jitensha',
  trailingSlash: 'always',
  integrations: [sitemap()],

  // Astro's Fonts API downloads, subsets, preloads and generates fallbacks at build
  // time — no npm font packages needed. The `latin` subset covers French entirely,
  // including U+0152-0153 (œ), guillemets and the em dash.
  fonts: [
    {
      // Display only. Its variable width axis lets headings sit tight and assertive.
      provider: fontProviders.fontsource(),
      name: 'Bricolage Grotesque',
      cssVariable: '--font-display',
      weights: ['500 800'],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      // Body. Drawn by the Braille Institute for low-vision readers — the honest
      // choice for a course read on a phone, in a badly lit garage, with greasy hands.
      provider: fontProviders.fontsource(),
      name: 'Atkinson Hyperlegible Next',
      cssVariable: '--font-body',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      // Numbers are content here, not metadata: 1787 tolerances, torques and counts.
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: ['400 600'],
      styles: ['normal'],
      subsets: ['latin'],
    },
  ],
});
