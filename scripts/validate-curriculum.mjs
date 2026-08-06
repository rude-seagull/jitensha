/**
 * Validates the curriculum's structural invariants.
 *
 *   npm run curriculum:validate
 *
 * Run it after any hand edit of docs/curriculum/curriculum.json: it is the proof that
 * reordering or retitling did not break the prerequisite graph. Exits non-zero on error.
 *
 * Checks: unique slugs, no order collision within a (system, level), levels in range,
 * every lesson has at least one exercise with criteria, prerequisites resolve, no
 * prerequisite sits at a higher level than the lesson that needs it, the graph is
 * acyclic, and no URL has crept in (CLAUDE.md golden rule 3).
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const file = process.argv[2] ?? join(ROOT, 'docs', 'curriculum', 'curriculum.json');
const data = JSON.parse(readFileSync(file, 'utf8'));
const errors = [];
const warns = [];

const all = new Map();
for (const sys of data.systems) {
  const seenOrders = new Set();
  for (const l of sys.lessons) {
    if (all.has(l.slug)) errors.push(`duplicate slug: ${l.slug} (${sys.system} vs ${all.get(l.slug).system})`);
    all.set(l.slug, { ...l, system: sys.system });
    const key = `${l.level}:${l.order}`;
    if (seenOrders.has(key)) errors.push(`${sys.system}: order collision at level ${l.level} order ${l.order} (${l.slug})`);
    seenOrders.add(key);
    if (!(l.level >= 1 && l.level <= 5)) errors.push(`${l.slug}: level ${l.level} out of range`);
    if (!(l.duree_min >= 15 && l.duree_min <= 45)) warns.push(`${l.slug}: duration ${l.duree_min}min out of 15-45 range`);
    if (!Array.isArray(l.tp) || l.tp.length < 1) errors.push(`${l.slug}: no TP`);
    else for (const tp of l.tp) if (!tp.criteres_validation?.length) errors.push(`${l.slug}: TP "${tp.titre}" has no validation criteria`);
    if (!l.reference_leads?.length) warns.push(`${l.slug}: no reference leads`);
    if (/https?:\/\/|www\./i.test(JSON.stringify(l))) errors.push(`${l.slug}: contains a URL (forbidden at curriculum stage)`);
  }
}

for (const l of all.values()) {
  for (const p of l.prerequis || []) {
    if (!p.slug) continue; // free-text only — acceptable, resolved when the lesson is written
    const target = all.get(p.slug);
    if (!target) { errors.push(`${l.slug}: prerequisite slug not found: ${p.slug}`); continue; }
    if (target.level > l.level) errors.push(`${l.slug} (N${l.level}): prerequisite ${p.slug} is at HIGHER level N${target.level}`);
  }
}

// cycle detection over resolved edges
const state = new Map();
function visit(slug, stack) {
  if (state.get(slug) === 1) return;
  if (state.get(slug) === 0) { errors.push(`prerequisite cycle: ${[...stack, slug].join(' -> ')}`); return; }
  state.set(slug, 0);
  for (const p of all.get(slug)?.prerequis || []) if (p.slug && all.has(p.slug)) visit(p.slug, [...stack, slug]);
  state.set(slug, 1);
}
for (const slug of all.keys()) visit(slug, []);

const bySystem = {};
const byLevel = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
let tpCount = 0, refCount = 0, critCount = 0, minutes = 0, secCount = 0;
for (const l of all.values()) {
  bySystem[l.system] = (bySystem[l.system] || 0) + 1;
  byLevel[l.level]++;
  tpCount += l.tp.length;
  critCount += l.tp.reduce((a, t) => a + t.criteres_validation.length, 0);
  refCount += (l.reference_leads || []).length;
  minutes += l.duree_min;
  if (l.securite?.length) secCount++;
}
console.log('=== STATS ===');
console.log(`lessons ${all.size} | TP ${tpCount} | criteres ${critCount} | reference leads ${refCount} | lessons with safety callouts ${secCount}`);
console.log(`total hands-on time: ${Math.round(minutes / 60)} h (${minutes} min)`);
console.log('by level:', JSON.stringify(byLevel));
console.log('by system:', JSON.stringify(bySystem));
console.log(`\n=== ${warns.length} WARNINGS ===`);
for (const w of warns.slice(0, 25)) console.log('WARN', w);
if (warns.length > 25) console.log(`... ${warns.length - 25} more`);
console.log(`\n=== ${errors.length} ERRORS ===`);
for (const e of errors.slice(0, 40)) console.log('ERROR', e);
if (errors.length > 40) console.log(`... ${errors.length - 40} more`);
process.exit(errors.length ? 1 : 0);
