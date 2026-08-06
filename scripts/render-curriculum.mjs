/**
 * Renders CURRICULUM.md and docs/curriculum/<system>.md from the curriculum JSON.
 *
 *   npm run curriculum:render
 *
 * The curriculum docs are generated artefacts: edit docs/curriculum/curriculum.json,
 * never the Markdown. Deterministic, so re-running with unchanged input is a no-op.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const file = process.argv[2] ?? join(ROOT, 'docs', 'curriculum', 'curriculum.json');
const root = process.argv[3] ?? ROOT;
const data = JSON.parse(readFileSync(file, 'utf8'));

const LEVELS = {
  1: 'Débutant', 2: 'Intermédiaire', 3: 'Avancé', 4: 'Expert', 5: 'Maître',
};
const SYSTEM_ORDER = ['fondamentaux', 'roues-et-pneus', 'freinage', 'transmission',
  'direction-et-peripheriques', 'suspension', 'vae', 'cas-exotiques', 'montage-et-peinture'];

const systems = [...data.systems].sort((a, b) => SYSTEM_ORDER.indexOf(a.system) - SYSTEM_ORDER.indexOf(b.system));
const all = new Map();
for (const s of systems) for (const l of s.lessons) all.set(l.slug, { ...l, system: s.system });

const sortLessons = (ls) => [...ls].sort((a, b) => a.level - b.level || a.order - b.order);
const fmtMin = (n) => `${n} min`;
const titleOf = (slug) => all.get(slug)?.titre ?? slug;

// ---------- per-system detail files ----------
mkdirSync(join(root, 'docs', 'curriculum'), { recursive: true });
for (const s of systems) {
  const out = [];
  out.push(`# Système « ${s.system} »`);
  out.push('');
  out.push(`> Part of the Jitensha curriculum — see [\`CURRICULUM.md\`](../../CURRICULUM.md) for the overview. Lesson data is French (course content); scaffolding is English per project rules.`);
  out.push('');
  out.push(s.description);
  out.push('');
  out.push(`**Progression logic:** ${s.progression_logic}`);
  const lessons = sortLessons(s.lessons);
  let curLevel = 0;
  for (const l of lessons) {
    if (l.level !== curLevel) {
      curLevel = l.level;
      out.push('');
      out.push(`## Niveau ${curLevel} — ${LEVELS[curLevel]}`);
    }
    out.push('');
    out.push(`### ${l.order}. ${l.titre} \`${l.slug}\``);
    out.push('');
    out.push(`- **Durée :** ${fmtMin(l.duree_min)}`);
    if (l.prerequis?.length) {
      out.push(`- **Prérequis :**`);
      for (const p of l.prerequis) {
        if (p.slug) {
          const t = all.get(p.slug);
          const link = t.system === s.system ? `#${p.slug}` : `${t.system}.md`;
          out.push(`  - [${t.titre}](${link}) \`${p.slug}\``);
        } else {
          out.push(`  - ${p.description} *(${p.system_hint})*`);
        }
      }
    }
    if (l.outils?.length) out.push(`- **Outils :** ${l.outils.join(', ')}`);
    if (l.securite?.length) { out.push(`- **⚠️ Sécurité :**`); for (const sec of l.securite) out.push(`  - ${sec}`); }
    out.push('');
    out.push('**Objectifs :**');
    for (const o of l.objectifs) out.push(`- ${o}`);
    for (const tp of l.tp) {
      out.push('');
      out.push(`**TP — ${tp.titre}**`);
      out.push('');
      out.push(tp.resume);
      out.push('');
      out.push('Critères de validation :');
      tp.criteres_validation.forEach((c, i) => out.push(`${i + 1}. ${c}`));
    }
    if (l.reference_leads?.length) {
      out.push('');
      out.push('**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :');
      for (const r of l.reference_leads) out.push(`- ${r.type} — ${r.source} : ${r.sujet}`);
    }
  }
  out.push('');
  writeFileSync(join(root, 'docs', 'curriculum', `${s.system}.md`), out.join('\n'), 'utf8');
  console.log(`wrote docs/curriculum/${s.system}.md (${lessons.length} lessons)`);
}

// ---------- CURRICULUM.md ----------
const byLevel = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
let tpCount = 0, refCount = 0, minutes = 0;
for (const l of all.values()) { byLevel[l.level]++; tpCount += l.tp.length; refCount += (l.reference_leads || []).length; minutes += l.duree_min; }

const out = [];
out.push('# CURRICULUM.md');
out.push('');
out.push('The complete Jitensha lesson matrix — **levels × systems**. Produced by a multi-agent design workflow from a reviewed source syllabus, then coherence- and completeness-audited. Every lesson carries at least one hands-on TP with measurable validation criteria. Reference leads are source hints only; verified URLs are added when each lesson is written (see CLAUDE.md golden rule 3).');
out.push('');
out.push('## Stats');
out.push('');
out.push(`- **${all.size} lessons** across ${systems.length} systems and 5 levels`);
out.push(`- **${tpCount} practical exercises (TP)**, ${refCount} reference leads`);
out.push(`- ≈ **${Math.round(minutes / 60)} h** of hands-on learning (${minutes} min)`);
out.push(`- Per level: ${Object.entries(byLevel).map(([k, v]) => `N${k} ${LEVELS[k]}: ${v}`).join(' · ')}`);
out.push('');
out.push('## The five levels');
out.push('');
out.push('| # | Level | Promise |');
out.push('|---|---|---|');
out.push('| 1 | **Débutant** | Safety checks, flat fixes, cleaning, basic adjustments — first contact with the machine |');
out.push('| 2 | **Intermédiaire** | Adjust & replace: indexing, pads, chains, cables, tubeless, torque discipline |');
out.push('| 3 | **Avancé** | Overhauls: bearings, hydraulic bleeds, truing, fork lower-leg service |');
out.push('| 4 | **Expert** | Diagnostics mastery, electronic groupsets, e-bike deep dive, exotic standards |');
out.push('| 5 | **Maître** | Wheel building, frame-up custom builds, suspension internals, custom paint |');
out.push('');
out.push('## The nine systems');
out.push('');
for (const s of systems) {
  out.push(`### [\`${s.system}\`](docs/curriculum/${s.system}.md) — ${s.lessons.length} lessons`);
  out.push('');
  out.push(s.description);
  out.push('');
}
out.push('## Matrix — lessons per level × system');
out.push('');
out.push(`| System | ${[1, 2, 3, 4, 5].map((n) => `N${n}`).join(' | ')} | Total |`);
out.push(`|---|${'---|'.repeat(6)}`);
for (const s of systems) {
  const counts = [1, 2, 3, 4, 5].map((n) => s.lessons.filter((l) => l.level === n).length);
  out.push(`| \`${s.system}\` | ${counts.map((c) => c || '—').join(' | ')} | **${s.lessons.length}** |`);
}
const totals = [1, 2, 3, 4, 5].map((n) => byLevel[n]);
out.push(`| **Total** | ${totals.map((t) => `**${t}**`).join(' | ')} | **${all.size}** |`);
out.push('');
out.push('## Lesson index');
out.push('');
for (const n of [1, 2, 3, 4, 5]) {
  out.push(`### Niveau ${n} — ${LEVELS[n]}`);
  out.push('');
  for (const s of systems) {
    const ls = sortLessons(s.lessons.filter((l) => l.level === n));
    if (!ls.length) continue;
    out.push(`**\`${s.system}\`** : ${ls.map((l) => `[${l.titre}](docs/curriculum/${s.system}.md)`).join(' · ')}`);
    out.push('');
  }
}
out.push('---');
out.push('');
out.push('*Detail files: one per system under [`docs/curriculum/`](docs/curriculum/) — full lesson specs (objectives, tools, safety, TP criteria, reference leads).*');
out.push('');
writeFileSync(join(root, 'CURRICULUM.md'), out.join('\n'), 'utf8');
console.log(`wrote CURRICULUM.md (${all.size} lessons)`);
