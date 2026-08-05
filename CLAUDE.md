# CLAUDE.md

Operating manual for Claude Code in this repository. Read `TECHSTACK.md` next — it is the technical constitution and this file defers to it on all technology questions.

## Project

**Name: « Jitensha »** — Japanese for bicycle (自転車, literally "vehicle that moves by itself"), echoing the course's core promise: self-sufficiency. Tagline (French): « Apprends la mécanique vélo, de zéro à héros ».

An extremely detailed, interactive bicycle mechanic course in French, taking a total beginner from zero to "home mechanic pro". It ships as a fully static website (Astro + Markdown), with `localStorage` as the only state mechanism. Covers every kind of bike: city/commuter, road, MTB, e-bikes, bikepacking rigs, fixies, custom and exotic builds.

Depth ceiling: everything doable in a home workshop — full overhauls, bearing services, wheel truing, hydraulic bleeds, drivetrain tuning. Explicitly **out of scope**: frame building/facing, suspension damper internals, and anything requiring shop-only machinery.

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

Every lesson Markdown file must carry this frontmatter (enforced by the Astro content collection schema — see `TECHSTACK.md`):

```yaml
title: "Réparer une crevaison"       # French, sentence case
level: 1                              # 1 Débutant | 2 Intermédiaire | 3 Avancé | 4 Expert
system: "roues-et-pneus"              # system slug, see Curriculum model
order: 3                              # position within level × system
status: "draft"                       # draft | review | validated
prerequisites: []                     # slugs of lessons to complete first
tools: ["démonte-pneus", "pompe"]     # French tool names
duration: 20                          # estimated minutes, hands-on
references:
  - title: "Park Tool — How to Fix a Flat"
    url: "https://..."
    type: "video"                     # video | article | doc
    language: "en"                    # en | fr
    accessed: "2026-08-05"
```

## Reference quality bar

The course promises an *extreme amount* of precise, up-to-date, proofed references. That means:

- Prefer primary sources: manufacturer service manuals (Shimano, SRAM, Campagnolo, Bosch, …), then established educators (Park Tool, GCN Tech, …), then quality independents.
- Every URL verified live at the time of writing; `accessed` date recorded.
- Prefer French sources when quality is equal; otherwise link the best source and note `language: "en"`.
- No blogspam, no scraped content farms, no dead or paywalled-without-warning links.

## Curriculum model: levels × systems

The course is a matrix. Four progressive **levels** each revisit the bike **systems** with increasing depth — a guided path from zero to hero rather than a flat reference manual.

Levels:

1. **Débutant** — first contact: fix a flat, adjust saddle, basic checks, lubrication
2. **Intermédiaire** — adjustments: derailleur indexing, brake setup and bleeds, chain replacement
3. **Avancé** — overhauls: bearings, headsets, hubs, bottom brackets, wheel truing
4. **Expert** — mastery: custom builds, exotic setups, fixies, diagnostics, edge cases

Systems (slugs used in frontmatter):

- `fondamentaux` — anatomy, tools, workshop setup, safety
- `roues-et-pneus` — tires, tubes, tubeless, truing, hubs
- `freinage` — rim brakes, mechanical and hydraulic discs
- `transmission` — chains, derailleurs, cassettes, cranks, hub gears, singlespeed
- `direction-et-peripheriques` — headset, bars, stem, saddle, seatpost, racks/fenders
- `suspension` — forks and shocks (external service only)
- `vae` — e-bike systems: motors, batteries, sensors
- `cas-exotiques` — rare setups, vintage, custom builds

The full lesson matrix will live in `CURRICULUM.md` (not yet written).

## Architecture snapshot (planned — see TECHSTACK.md)

```
src/
  content/lessons/<system>/<slug>.md   # all course content, Markdown
  components/                          # Astro components (checklist, diagram, progress…)
  layouts/                             # page shells
  scripts/                             # vanilla JS modules (localStorage state)
  styles/                              # plain CSS, custom properties
public/                                # static assets, SVG diagrams
```

## Commands

Not active yet — the Astro project is not scaffolded. Once it is:

| Command | Purpose |
|---|---|
| `npm run dev` | local dev server |
| `npm run build` | static build (includes Pagefind indexing) |
| `npm run preview` | serve the production build locally |

## Naming

Decided (2026-08-05): **Jitensha** (自転車), proposed and confirmed by the user. The name doesn't say "bike repair" to a French speaker on its own, so the tagline must always accompany the logo/title in first-contact contexts (homepage, meta description, social cards).

## Documentation map

| File | Role | Status |
|---|---|---|
| `CLAUDE.md` | how Claude works here (this file) | active |
| `TECHSTACK.md` | technical constitution — stack, state, constraints, rejected tech | active |
| `CURRICULUM.md` | full levels × systems lesson matrix | planned |
| `GLOSSAIRE.md` | canonical French bike terminology | planned |

## Roadmap (next steps, in order)

1. `git init`, GitHub repo, GitHub Pages setup
2. `CURRICULUM.md` — the complete lesson matrix
3. Astro scaffolding per `TECHSTACK.md`
4. Design system and first components (workshop-clean, light + dark)
5. First content module: Niveau 1 lessons
