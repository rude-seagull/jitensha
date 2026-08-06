/**
 * Theme toggle. The initial theme is applied by a small inline script in
 * BaseLayout — it must run before first paint to avoid a flash — so this module
 * only handles the button.
 */

import { prefs, setPref } from './store.js';

const button = document.querySelector('[data-theme-toggle]');

if (button) {
  const root = document.documentElement;

  const current = () =>
    root.dataset.theme ??
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  const label = (theme) =>
    theme === 'dark' ? 'Passer en thème clair' : 'Passer en thème sombre';

  const sync = (theme) => {
    button.setAttribute('aria-label', label(theme));
    button.setAttribute('title', label(theme));
    button.dataset.state = theme;
  };

  sync(current());
  button.hidden = false;

  button.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    setPref('theme', next);
    sync(next);
  });

  // Follow the system while the reader has expressed no explicit preference.
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (prefs().theme) return;
    sync(event.matches ? 'dark' : 'light');
  });
}
