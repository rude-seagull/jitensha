# CLAUDE.md

Operating manual for Claude Code in this repository. Read `TECHSTACK.md` next — it is the technical constitution and this file defers to it on all technology questions.

## Project

**Name: « Jitensha »** — Japanese for bicycle (自転車, literally "vehicle that moves by itself"), echoing the course's core promise: self-sufficiency. Tagline (French): « Apprends la mécanique vélo, de zéro à héros ».

An extremely detailed, interactive bicycle mechanic course in French, taking a total beginner from zero to shop-grade mastery. It ships as a fully static website (Astro + Markdown), with `localStorage` as the only state mechanism. Covers every kind of bike: city/commuter, road, MTB, e-bikes, bikepacking rigs, fixies, cargo, folding, vintage, custom and exotic builds.

Depth ceiling (raised 2026-08-06): everything up to shop-grade craft — full overhauls, bearing services, hydraulic bleeds, drivetrain tuning, **wheel building from scratch, frame-up custom builds (thread chasing, facing, steerer cutting), suspension damper service, and custom paint**. Explicitly **out of scope**: frame *fabrication* (welding, brazing, tube mitering) and anything requiring industrial machinery.

## Golden rules

1. **KISS.** Static content, vanilla JS, localStorage. No servers, no accounts, no databases, no client frameworks. Before adding any feature or dependency, check `TECHSTACK.md` — including its "Explicitly rejected" list. Do not relitigate settled decisions.
2. **Course content is French. Everything else is English.** Lessons, UI strings, and diagrams: French. Code, comments, commits, docs (this file included): English.
3. **Never invent references.** Every external link (video, article, technical doc) must be real, verified to exist, and current. If a reference cannot be verified, it does not go in. Record an access date for each.
4. **Safety first.** Any step where a mistake can hurt someone — brakes, steerer tubes/stems, quick releases and thru-axles, torque specs on carbon, e-bike batteries and wiring — gets an explicit warning callout in the lesson. Never soften or omit safety guidance for brevity.
5. **Readable at the bike stand.** Mobile readability and accessibility are non-negotiable: semantic HTML, `lang="fr"`, alt text on every image, diagrams meaningful without color alone. The site must remain 100% readable with JS disabled.

## Content workflow

Every lesson carries a `status` in its frontmatter:

```
draft → review → validated
```

- **Claude** creates and edits lessons in `draft`, and may move `draft → review` when a lesson is complete and self-checked.
- **Only the user** promotes a lesson to `validated`. Claude never marks its own work `validated`, and never edits a `validated` lesson without flagging that it will need re-validation (set it back to `review` after the edit).

## Lesson frontmatter contract

Enforced by the zod schema in `src/content.config.ts` — a mismatch fails the build. Keys are English (code), values French (content).

The **structured spec lives in frontmatter, the teaching prose in the body**. That split is deliberate: the exercise criteria drive an interactive checklist, so they must be data, not prose to be parsed back out of rendered HTML.

```yaml
title: "Purger un frein Shimano à l'huile minérale"
level: 3                              # 1 Débutant | 2 Intermédiaire | 3 Avancé | 4 Expert | 5 Maître
system: "freinage"                    # one of the 9 system slugs
order: 4                              # position within (system, level)
status: "draft"                       # draft | review | validated
duration: 40                          # estimated minutes, hands-on
objectives:
  - "Purger un frein Shimano sans introduire d'air"
prerequisites:
  - slug: "hydraulique-principe-fluides"   # omit while still free text
    description: "comprendre la discipline des fluides"
    system: "freinage"
tools: ["kit de purge Shimano", "clé Allen 2,5"]
safety:                               # real hazards only — rendered as callouts
  - "L'huile minérale contamine une plaquette de façon irréversible."
exercises:
  - title: "Purge complète sur un vélo cobaye"
    summary: "…"
    criteria:                         # these become the persistent checklist
      - "Levier ferme, point de contact stable sur 10 pressions consécutives"
references:
  - source: "Park Tool"
    subject: "purge frein Shimano huile minérale"
    type: "video"                     # video | article | doc | livre | outil
    # url / language / accessed are added ONLY once the reference is verified —
    # their absence is what marks a lead as still unresearched.
```

Regenerate all 317 files from the curriculum with `npm run generate:lessons`. It rewrites frontmatter only and preserves any prose already written below the closing `---`, so it is safe to re-run after a curriculum change.

## Reference quality bar

The course promises an *extreme amount* of precise, up-to-date, proofed references. That means:

- Prefer primary sources: manufacturer service manuals (Shimano, SRAM, Campagnolo, Bosch, …), then established educators (Park Tool, GCN Tech, …), then quality independents.
- Every URL verified live at the time of writing; `accessed` date recorded.
- Prefer French sources when quality is equal; otherwise link the best source and note `language: "en"`.
- No blogspam, no scraped content farms, no dead or paywalled-without-warning links.

## Curriculum model: levels × systems

The course is a matrix. Five progressive **levels** each revisit the bike **systems** with increasing depth — a guided path from zero to hero rather than a flat reference manual.

Levels:

1. **Débutant** — first contact: safety checks, fix a flat, cleaning and lubrication, basic adjustments, reading the machine
2. **Intermédiaire** — adjust & replace: derailleur indexing, pads, cables and housing, chains, tubeless, torque discipline
3. **Avancé** — overhauls: bearings (hubs, headsets, bottom brackets), hydraulic bleeds, truing, fork lower-leg service
4. **Expert** — diagnostics and systems: methodical creak hunting, electronic groupsets, e-bike deep dive, exotic standards, compatibility arbitration
5. **Maître** — shop-grade craft: wheel building, frame-up builds, suspension internals, custom paint, DIY tooling

Systems (slugs used in frontmatter):

- `fondamentaux` — anatomy, geometry & materials, metrology and torque, workshop method, cleaning, equipment guides
- `roues-et-pneus` — tires, tubes, tubeless, hubs and freehubs, truing, wheel building
- `freinage` — rim brakes, mechanical and hydraulic discs, bleeds, pads, rotors
- `transmission` — chains, derailleurs, cassettes, cranks, pedals, electronic groupsets, hub gears, belt drive, singlespeed
- `direction-et-peripheriques` — headset, cockpit, saddle, seatposts and droppers, cables and routing, racks/fenders, fitting
- `suspension` — forks and shocks, setup, lower-leg and air-can service, damper service
- `vae` — e-bike systems: motors, batteries, sensors, diagnostics, law
- `cas-exotiques` — vintage, fixies, cargo, bikepacking, folding, tandems, adapted cycles, rare standards
- `montage-et-peinture` — frame prep, frame-up assembly, custom paint and finish

The full lesson matrix lives in [`CURRICULUM.md`](CURRICULUM.md), with per-system detail files under `docs/curriculum/`.

## Architecture snapshot (planned — see TECHSTACK.md)

```
scripts/generate-lessons.mjs   # curriculum.json -> the 317 lesson files
src/
  content.config.ts            # collection + zod schema (the frontmatter contract)
  content/lessons/<system>/<slug>.md
  lib/paths.ts                 # href() — ALWAYS build internal links with it
  lib/curriculum.ts            # level/system labels, grouping, URLs
  layouts/  components/  scripts/  styles/
  pages/                       # index, atelier, niveau/[level], systeme/[system],
                               # lecon/[...id], recherche, 404
public/                        # static assets, SVG diagrams
```

Lesson routes come straight from the collection id, so `src/content/lessons/freinage/purge-frein-shimano.md` is served at `/lecon/freinage/purge-frein-shimano/` — the file location *is* the route.

## Commands

| Command | Purpose |
|---|---|
| `npm run dev` | local dev server (no search — Pagefind indexes the build) |
| `npm run build` | static build + Pagefind indexing |
| `npm run preview` | serve the production build, search included |
| `npm run check` | TypeScript and Astro diagnostics — keep it at zero |
| `npm run generate:lessons` | regenerate lesson files from `docs/curriculum/curriculum.json` |

## Naming

Decided (2026-08-05): **Jitensha** (自転車), proposed and confirmed by the user. The name doesn't say "bike repair" to a French speaker on its own, so the tagline must always accompany the logo/title in first-contact contexts (homepage, meta description, social cards).

## Documentation map

| File | Role | Status |
|---|---|---|
| `CLAUDE.md` | how Claude works here (this file) | active |
| `TECHSTACK.md` | technical constitution — stack, state, constraints, rejected tech | active |
| `CURRICULUM.md` | full levels × systems lesson matrix | active |
| `docs/curriculum/<system>.md` | per-system lesson specs (objectives, TP, criteria, reference leads) | active |
| `GLOSSAIRE.md` | canonical French bike terminology | planned |

## Writing a lesson

`CURRICULUM.md` and `docs/curriculum/` are the design contract: each lesson already has its title, level, duration, objectives, tools, safety points, TP with measurable validation criteria, and **reference leads** (source + subject, deliberately without URLs). Writing a lesson means:

1. Take its spec from `docs/curriculum/<system>.md`.
2. Research each reference lead on the web, verify the URL resolves and the content matches, record the access date. Drop any lead that cannot be verified; add better sources when you find them.
3. Write the lesson in French per the frontmatter contract above, `status: draft`.

Never invent a URL to satisfy a lead — golden rule 3 outranks completeness.

## Roadmap (next steps, in order)

1. ~~`git init`, GitHub repo, GitHub Pages setup~~ — done
2. ~~`CURRICULUM.md` — the complete lesson matrix~~ — done
3. ~~Astro scaffolding, content model, structural design system, the four interactive features~~ — done
4. **Visual identity** — palette, typography, personality, logo, illustrations, and the interactive SVG anatomy diagrams (deferred here on purpose: this iteration shipped tokens, not identity)
5. **Writing lessons**, starting with Niveau 1 — see "Writing a lesson" above
