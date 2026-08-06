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
| Site generator | **Astro 5**, `output: 'static'` | Content Collections validate every lesson's frontmatter against a zod schema at build time — with hundreds of lessons, broken metadata fails the build instead of shipping. Ships zero JS by default. |
| Content | **Markdown** in `src/content/lessons/` | Human-writable, diff-able, portable. Frontmatter contract defined in `CLAUDE.md`; the zod schema must mirror it exactly (`level` is an integer 1-5, `system` an enum of the 9 system slugs). |
| Styling | **Plain CSS** with custom properties | No CSS framework. Design tokens as `--custom-properties`; light + dark via `prefers-color-scheme` with a manual toggle persisted in localStorage. |
| Interactivity | **Vanilla JS ES modules** in `src/scripts/` | No client framework. Small, focused modules per feature. |
| Search | **Pagefind** | Indexes at build time, tiny runtime, fully static, works on GitHub Pages. Runs as a post-build step. |
| Runtime deps | **None** | No CDN scripts, no external fonts at runtime (self-host or system font stack), no analytics beacons. |

Node.js is required **at build time only**.

## State: localStorage

All user state lives in localStorage under a single versioned namespace. No accounts, no cookies, no sync.

| Key | Content |
|---|---|
| `velo.v1.progress` | array of completed lesson slugs |
| `velo.v1.checklists` | per-procedure checked-step state, keyed by lesson slug |
| `velo.v1.prefs` | theme and UI preferences |

Rules:

- **Graceful degradation.** localStorage unavailable (private mode, JS off) → the site works fully as a readable course; only progress persistence is lost. Never gate content behind state.
- **Versioned namespace.** Schema changes bump `v1 → v2` with a one-shot migration on load; never mutate the meaning of an existing key.
- **Small and flat.** Store slugs and booleans, not rendered content or derived data.

## Interactive components (and how they stay KISS)

| Feature | Implementation |
|---|---|
| Progress tracking | One "mark complete" toggle per lesson writing to `velo.v1.progress`; progress bars computed client-side from the static lesson list embedded in the page. |
| Interactive checklists | Authored as plain Markdown lists inside lessons; a script enhances them into checkable steps persisted per lesson. Without JS they render as a normal readable list. |
| Interactive diagrams | Inline SVG with semantic `<title>`/`<desc>` and `data-*` attributes; click/tap reveals part name and role. Labels present in the DOM for no-JS and screen-reader access. |
| Theme toggle | Toggles a `data-theme` attribute on `<html>`, persisted in `velo.v1.prefs`, defaulting to `prefers-color-scheme`. |
| Search | Pagefind default UI, styled with our tokens. |

## Hosting & deploy

- **GitHub Pages**, deployed by GitHub Actions using the official `withastro/action`.
- **Base path caveat:** as a project page the site is served under `https://<user>.github.io/<repo>/` — Astro's `site` and `base` config must be set accordingly, and all internal links/assets must respect `base`. If a custom domain is added later, `base` reverts to `/`.
- Build = `astro build` + Pagefind indexing; the output in `dist/` is the entire deployable artifact.

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
