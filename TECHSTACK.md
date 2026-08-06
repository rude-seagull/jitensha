# TECHSTACK.md

The technical constitution of this project. Any technology decision not covered here should be resolved in favor of the Philosophy section, then recorded here.

## Philosophy

- **Static-first, zero server.** The entire site is prerendered HTML/CSS/JS on GitHub Pages. Nothing runs server-side, ever.
- **KISS.** The simplest tool that does the job. Complexity must be justified by a user-facing need, not developer comfort.
- **Content outlives tooling.** Lessons are plain Markdown with YAML frontmatter — the source of truth. If we ever replace Astro, the content moves untouched.
- **JS is progressive enhancement.** Every page is fully readable with JavaScript disabled. JS only powers interactivity (progress, checklists, diagrams, search, theme).

## Core stack

| Layer | Choice | Why |
|---|---|---|
| Site generator | **Astro 7** (static by default) | Content Collections validate every lesson's frontmatter against a zod schema at build time — with hundreds of lessons, broken metadata fails the build instead of shipping. Ships zero JS by default. |
| Content | **Markdown** in `src/content/lessons/` | Human-writable, diff-able, portable. Frontmatter contract defined in `CLAUDE.md`; the zod schema in `src/content.config.ts` must mirror it exactly. |
| Markdown processor | **Sätteri** (Astro 7 default) | Replaces the remark/rehype pipeline. Applies GFM and generates heading IDs out of the box, so the course needs **no Markdown plugins at all**. Adding one would mean opting the whole project back into `@astrojs/markdown-remark` — don't, unless there is a real need. |
| Styling | **Plain CSS** with custom properties | No CSS framework. Tokens in `src/styles/tokens.css`; light + dark via `prefers-color-scheme` with a manual toggle persisted in localStorage. Component styles stay scoped in their `.astro` file. |
| Interactivity | **Vanilla JS ES modules** in `src/scripts/` | No client framework. Small, focused modules per feature; `store.js` is the only one allowed to touch localStorage. |
| Search | **Pagefind 1.5 Component UI** | Indexes `dist/` after the build (so it only works from `npm run build`, never `astro dev`). `<pagefind-config bundle-path base-url>` handles the GitHub Pages sub-path. |
| Sitemap | **@astrojs/sitemap** | Official integration, one line of config, real value for a public 300-page course. |
| Runtime deps | **None** | No CDN scripts, no external fonts at runtime (system font stack for now), no analytics beacons. |

**Node ≥ 22.12 is required** by Astro 7. The version is pinned per project in `package.json` via Volta (`node: 24.19.0`), which is also the default of the official deploy action. Node is needed **at build time only**.

### The base path is a permanent hazard

The site is a GitHub *project* page served from `/jitensha/`. Astro does not rewrite `href` attributes, so a hard-coded `/lecon/...` link builds fine and 404s in production. **Every internal URL goes through `href()` in `src/lib/paths.ts`.** The check in the verification script sweeps all built pages for root-relative URLs missing the base — keep it passing.

## State: localStorage

All user state lives in localStorage under a single versioned namespace. No accounts, no cookies, no sync.

| Key | Content |
|---|---|
| `jitensha.v1.progress` | array of completed lesson ids (`<system>/<slug>`) |
| `jitensha.v1.checklists` | `{ "<lessonId>": { "<exercise>.<criterion>": true } }` |
| `jitensha.v1.prefs` | theme and UI preferences |

Rules:

- **One owner.** Only `src/scripts/store.js` reads or writes localStorage. It wraps every access in try/catch, validates shape on read, and emits a `jitensha:store` event so views refresh without polling.
- **Graceful degradation.** localStorage unavailable (private mode, JS off) → the site works fully as a readable course; only persistence is lost. Never gate content behind state.
- **Versioned namespace.** Schema changes bump `v1 → v2` with a one-shot migration on load; never mutate the meaning of an existing key.
- **Small and flat.** Store ids and booleans, not rendered content or derived data. Progress percentages are computed from `data-progress` attributes rendered by the server, so no lesson list is ever duplicated into JavaScript.

## Interactive components (and how they stay KISS)

| Feature | Implementation |
|---|---|
| Progress tracking | `CompleteToggle.astro` per lesson; `ProgressBar.astro` declares the lesson ids it covers in `data-progress` and `progress.js` computes the rest. Both render `hidden` and are revealed by script. |
| Interactive checklists | The `exercises[].criteria` from frontmatter render as a numbered list; `checklist.js` upgrades each item into a persistent checkbox. Without JS it stays a readable, printable checklist — which is the point at the workbench. |
| Interactive diagrams | *Not built yet* — planned with the design iteration. Inline SVG with semantic `<title>`/`<desc>`; labels present in the DOM for no-JS and screen-reader access. |
| Theme toggle | A small inline script in `BaseLayout` sets `data-theme` on `<html>` before first paint (the only render-blocking script, and the only place the storage key is duplicated); `theme.js` handles the button. |
| Search | Pagefind Component UI. Only lesson `<article>` elements carry `data-pagefind-body`, so index pages never pollute results; interface chrome inside them carries `data-pagefind-ignore`. Filters use inline values (`data-pagefind-filter="niveau:Niveau 3"`) on empty elements so they contribute no excerpt text. |

## Hosting & deploy

- **GitHub Pages**, deployed by `.github/workflows/deploy.yml` using the official `withastro/action@v6`.
- The action runs `npm run build`, which is `astro build && pagefind --site dist` — so the search index is produced in the same step and needs no extra workflow wiring.
- Live at `https://rude-seagull.github.io/jitensha/`. If a custom domain is added later, drop `base` from `astro.config.mjs`; `href()` then resolves to `/` with no other change.
- The output in `dist/` is the entire deployable artifact.

## Constraints

- No runtime requests to external hosts (embedded videos/reference links are user-initiated navigation, not page dependencies).
- Page weight budget-conscious: SVG over raster where possible, compressed images, no font payloads beyond one self-hosted family maximum.
- `lang="fr"` on every page; semantic HTML; WCAG-minded markup (contrast, focus states, alt text, no color-only meaning).
- Must work when opened from a slow mobile connection propped up next to a bike stand.

## Explicitly rejected

Recorded so future sessions don't relitigate. Reopening any of these requires an explicit user decision.

| Rejected | Reason |
|---|---|
| React / Vue / Svelte / any client framework | Vanilla JS covers all planned interactivity; frameworks violate KISS and the zero-JS-by-default goal. |
| CMS (headless or otherwise) | Markdown in git **is** the CMS; a CMS adds servers, accounts, and lock-in. |
| Database / backend / API | No server. localStorage is the only state. |
| User accounts / auth | Nothing to protect; progress is device-local by design. |
| Analytics / tracking | Privacy-respecting by default; no beacons, no cookies. |
| Quizzes | User decision (2026-08-05): interactivity is progress + checklists + diagrams only. |
| Self-hosted video | Storage-heavy and we can't produce quality video; curated external links instead. |
| Tailwind / CSS frameworks | Plain CSS with custom properties is sufficient and dependency-free. |
