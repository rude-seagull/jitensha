/**
 * The site is served from a sub-path on GitHub Pages (`/jitensha/`), so every
 * internal URL must be prefixed with the configured base. Astro does not do this
 * for `href` attributes — forgetting it is the classic project-page 404.
 *
 * Always build internal links with `href()`. Never hard-code a leading slash.
 */

const BASE = import.meta.env.BASE_URL; // '/jitensha/' in production, '/' in a bare dev setup

/** Joins path segments onto the site base, always returning a trailing slash. */
export function href(...segments: (string | number)[]): string {
  const path = segments
    .map((segment) => String(segment).replace(/^\/+|\/+$/g, ''))
    .filter(Boolean)
    .join('/');
  const base = BASE.endsWith('/') ? BASE : `${BASE}/`;
  return path ? `${base}${path}/` : base;
}

/** Same as `href()` but without a trailing slash — for files such as assets. */
export function asset(path: string): string {
  const base = BASE.endsWith('/') ? BASE : `${BASE}/`;
  return `${base}${path.replace(/^\/+/, '')}`;
}
