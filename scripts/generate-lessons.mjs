/**
 * Generates one Markdown lesson file per curriculum entry.
 *
 *   node scripts/generate-lessons.mjs
 *
 * Source of truth: docs/curriculum/curriculum.json (produced by the curriculum
 * design workflow). Output: src/content/lessons/<system>/<slug>.md
 *
 * Idempotent by design: only the frontmatter block is rewritten. Any prose written
 * below the closing `---` is preserved, so re-running after a curriculum change
 * never destroys lesson writing. Run it whenever curriculum.json changes.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE = join(ROOT, 'docs', 'curriculum', 'curriculum.json');
const OUT_DIR = join(ROOT, 'src', 'content', 'lessons');

/**
 * Quotes every scalar. 223 of the 317 titles contain a colon, which YAML would
 * otherwise read as a mapping; quoting unconditionally removes the whole class of bug.
 * No source string contains a double quote, but escape defensively anyway.
 */
const scalar = (value) => `"${String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;

function yamlList(key, items, indent = 0) {
  const pad = ' '.repeat(indent);
  if (!items?.length) return `${pad}${key}: []`;
  return [`${pad}${key}:`, ...items.map((item) => `${pad}  - ${scalar(item)}`)].join('\n');
}

function yamlObjectList(key, items, fields) {
  if (!items?.length) return `${key}: []`;
  const lines = [`${key}:`];
  for (const item of items) {
    let first = true;
    for (const [name, transform] of Object.entries(fields)) {
      const value = transform(item);
      if (value === undefined) continue;
      const bullet = first ? '  - ' : '    ';
      first = false;
      if (Array.isArray(value)) {
        lines.push(`${bullet}${name}:`);
        for (const entry of value) lines.push(`      - ${scalar(entry)}`);
      } else {
        lines.push(`${bullet}${name}: ${scalar(value)}`);
      }
    }
  }
  return lines.join('\n');
}

function buildFrontmatter(lesson, system) {
  return [
    '---',
    `title: ${scalar(lesson.titre)}`,
    `level: ${lesson.level}`,
    `system: ${scalar(system)}`,
    `order: ${lesson.order}`,
    'status: "draft"',
    `duration: ${lesson.duree_min}`,
    yamlList('objectives', lesson.objectifs),
    yamlObjectList('prerequisites', lesson.prerequis, {
      slug: (p) => p.slug ?? undefined,
      description: (p) => p.description,
      system: (p) => p.system_hint,
    }),
    yamlList('tools', lesson.outils),
    yamlList('safety', lesson.securite),
    yamlObjectList('exercises', lesson.tp, {
      title: (t) => t.titre,
      summary: (t) => t.resume,
      criteria: (t) => t.criteres_validation,
    }),
    yamlObjectList('references', lesson.reference_leads, {
      source: (r) => r.source,
      subject: (r) => r.sujet,
      type: (r) => r.type,
    }),
    '---',
  ].join('\n');
}

/** Everything after the second `---`, so hand-written prose survives regeneration. */
function existingBody(path) {
  if (!existsSync(path)) return '';
  const raw = readFileSync(path, 'utf8');
  const match = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?([\s\S]*)$/);
  return match ? match[1] : '';
}

const { systems } = JSON.parse(readFileSync(SOURCE, 'utf8'));
const expected = new Set();
let written = 0;
let preserved = 0;

for (const system of systems) {
  const dir = join(OUT_DIR, system.system);
  mkdirSync(dir, { recursive: true });
  for (const lesson of system.lessons) {
    const path = join(dir, `${lesson.slug}.md`);
    expected.add(`${system.system}/${lesson.slug}.md`);
    const body = existingBody(path);
    if (body.trim()) preserved++;
    writeFileSync(path, `${buildFrontmatter(lesson, system.system)}\n${body.trim() ? body : '\n'}`, 'utf8');
    written++;
  }
}

// Remove lesson files whose curriculum entry disappeared, so the collection never
// drifts from the source of truth.
let removed = 0;
if (existsSync(OUT_DIR)) {
  for (const dir of readdirSync(OUT_DIR, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    for (const file of readdirSync(join(OUT_DIR, dir.name))) {
      if (!expected.has(`${dir.name}/${file}`)) {
        rmSync(join(OUT_DIR, dir.name, file));
        removed++;
      }
    }
  }
}

console.log(`${written} lessons written to src/content/lessons/`);
if (preserved) console.log(`${preserved} existing lesson bodies preserved`);
if (removed) console.log(`${removed} orphaned files removed`);
