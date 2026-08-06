# Jitensha 自転車

**« Mécanique vélo, de la crevaison au rayonnage. »**

A free French-language bicycle mechanic course covering every kind of bike — city, road, MTB, e-bike, cargo, bikepacking, fixie, folding, vintage — from a first puncture repair to wheel building, frame-up assembly and custom paint.

317 lessons across 5 levels and 9 systems. Every lesson ends in a practical exercise with measurable validation criteria: 323 exercises, 1787 criteria, roughly 199 hours of workshop time.

Live at **https://rude-seagull.github.io/jitensha/**

## Stack

A fully static site: Astro 7, Markdown content collections, plain CSS, vanilla JS, `localStorage` for progress, Pagefind for search. No accounts, no tracking, no server.

```bash
npm install
npm run dev        # local dev server (no search — Pagefind indexes the build)
npm run build      # static build + Pagefind indexing
npm run preview    # serve the production build, search included
npm run check      # TypeScript and Astro diagnostics
```

Node ≥ 22.12 is required and pinned per project via Volta.

## Documentation

- [`CLAUDE.md`](CLAUDE.md) — project rules, tone, content workflow, frontmatter contract, design direction
- [`TECHSTACK.md`](TECHSTACK.md) — technical constitution: stack, state, constraints, rejected technology
- [`CURRICULUM.md`](CURRICULUM.md) — the full lesson matrix, with per-system detail under [`docs/curriculum/`](docs/curriculum/)

## Status

The site, the curriculum and the visual identity are in place. The 317 lessons exist as specifications — objectives, tools, safety notes, exercises and reference leads — and are being written one by one; each carries a `status` of `draft`, `review` or `validated`.
