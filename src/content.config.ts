import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * The lesson schema mirrors the frontmatter contract documented in CLAUDE.md.
 * Keys are English (code), values are French (course content).
 *
 * The structured spec lives here rather than in the Markdown body because the
 * exercise criteria drive an interactive checklist — parsing them back out of
 * rendered HTML would be fragile. The body is reserved for teaching prose.
 */

export const SYSTEMS = [
  'fondamentaux',
  'roues-et-pneus',
  'freinage',
  'transmission',
  'direction-et-peripheriques',
  'suspension',
  'vae',
  'cas-exotiques',
  'montage-et-peinture',
] as const;

const reference = z.object({
  source: z.string(),
  subject: z.string(),
  type: z.enum(['video', 'article', 'doc', 'livre', 'outil']),
  // Added only once the reference has been researched and verified — see CLAUDE.md
  // golden rule 3. An unverified reference is a lead, and carries no URL.
  url: z.url().optional(),
  language: z.enum(['fr', 'en']).optional(),
  accessed: z.iso.date().optional(),
});

const prerequisite = z.object({
  /** Absent while the requirement is still expressed as free text. */
  slug: z.string().optional(),
  description: z.string(),
  system: z.enum(SYSTEMS),
});

const exercise = z.object({
  title: z.string(),
  summary: z.string(),
  /** Rendered as the persistent, tickable validation checklist. */
  criteria: z.array(z.string()).min(1),
});

const lessons = defineCollection({
  loader: glob({ base: './src/content/lessons', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    level: z.number().int().min(1).max(5),
    system: z.enum(SYSTEMS),
    order: z.number().int().positive(),
    status: z.enum(['draft', 'review', 'validated']),
    duration: z.number().int().positive(),
    objectives: z.array(z.string()).min(1),
    prerequisites: z.array(prerequisite).default([]),
    tools: z.array(z.string()).default([]),
    safety: z.array(z.string()).default([]),
    exercises: z.array(exercise).min(1),
    references: z.array(reference).default([]),
  }),
});

export const collections = { lessons };
