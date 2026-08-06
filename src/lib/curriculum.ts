import type { CollectionEntry } from 'astro:content';
import { SYSTEMS } from '../content.config';
import { href } from './paths';

export type Lesson = CollectionEntry<'lessons'>;
export type System = (typeof SYSTEMS)[number];
export type Level = 1 | 2 | 3 | 4 | 5;

export const LEVELS = [
  { n: 1, label: 'Débutant', tagline: 'Contrôles de sécurité, crevaison, nettoyage, lubrification, réglages de base.' },
  { n: 2, label: 'Intermédiaire', tagline: 'Réglages et remplacements : indexation, plaquettes, câbles, chaînes, tubeless, serrage au couple.' },
  { n: 3, label: 'Avancé', tagline: 'Révisions : roulements, purges hydrauliques, dévoilage, service de fourche.' },
  { n: 4, label: 'Expert', tagline: 'Diagnostic et arbitrage : craquements, groupes électroniques, VAE, standards exotiques.' },
  { n: 5, label: 'Maître', tagline: "Travaux d'atelier : rayonnage, montage depuis cadre nu, internes de suspension, peinture." },
] as const satisfies readonly { n: Level; label: string; tagline: string }[];

export const SYSTEM_META: Record<System, { label: string; tagline: string }> = {
  'fondamentaux': {
    label: 'Fondamentaux',
    tagline: "Anatomie, géométrie, matériaux, métrologie et couple, méthode d'atelier, entretien courant.",
  },
  'roues-et-pneus': {
    label: 'Roues et pneus',
    tagline: 'Pneus, chambres, tubeless, moyeux, corps de roue libre, dévoilage et construction de roues.',
  },
  'freinage': {
    label: 'Freinage',
    tagline: 'Freins sur jante, disques mécaniques et hydrauliques, purges, plaquettes, disques.',
  },
  'transmission': {
    label: 'Transmission',
    tagline: 'Chaînes, cassettes, pédaliers, pédales, dérailleurs, groupes électroniques, moyeux intégrés, courroie.',
  },
  'direction-et-peripheriques': {
    label: 'Direction et périphériques',
    tagline: 'Jeux de direction, cockpit, selles et tiges télescopiques, câblerie, accessoires, position.',
  },
  'suspension': {
    label: 'Suspension',
    tagline: 'Réglages, SAG, entretien bas de fourche, air can, service des cartouches et amortisseurs.',
  },
  'vae': {
    label: 'VAE',
    tagline: 'Motorisations, capteurs, batteries Li-ion, diagnostic électrique, codes constructeurs, cadre légal.',
  },
  'cas-exotiques': {
    label: 'Cas exotiques',
    tagline: 'Vintage, fixies, cargo, bikepacking, pliants, tandems, cycles adaptés, standards rares.',
  },
  'montage-et-peinture': {
    label: 'Montage et peinture',
    tagline: 'Préparation de cadre, montage complet depuis cadre nu, peinture et finitions.',
  },
};

export const SYSTEM_ORDER = SYSTEMS;

export const STATUS_LABEL: Record<Lesson['data']['status'], string> = {
  draft: 'Brouillon',
  review: 'En relecture',
  validated: 'Validée',
};

/** Lesson ids are `<system>/<slug>` — the file location is the route. */
export function lessonUrl(lesson: Lesson): string {
  return href('lecon', lesson.id);
}

export function levelUrl(level: number): string {
  return href('niveau', level);
}

export function systemUrl(system: System): string {
  return href('systeme', system);
}

export function levelMeta(level: number) {
  return LEVELS.find((l) => l.n === level) ?? LEVELS[0];
}

/** Curriculum order: level first, then the author-defined order within it. */
export function sortLessons(lessons: Lesson[]): Lesson[] {
  return [...lessons].sort(
    (a, b) => a.data.level - b.data.level || a.data.order - b.data.order,
  );
}

export function groupByLevel(lessons: Lesson[]): { level: Level; lessons: Lesson[] }[] {
  return LEVELS.map((l) => ({
    level: l.n,
    lessons: sortLessons(lessons.filter((lesson) => lesson.data.level === l.n)),
  })).filter((group) => group.lessons.length > 0);
}

export function groupBySystem(lessons: Lesson[]): { system: System; lessons: Lesson[] }[] {
  return SYSTEM_ORDER.map((system) => ({
    system,
    lessons: sortLessons(lessons.filter((lesson) => lesson.data.system === system)),
  })).filter((group) => group.lessons.length > 0);
}

/** Total hands-on minutes, for display as “≈ N h”. */
export function totalHours(lessons: Lesson[]): number {
  return Math.round(lessons.reduce((sum, l) => sum + l.data.duration, 0) / 60);
}
