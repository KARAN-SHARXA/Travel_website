import type { SimpleTour } from './types';
import { SIMPLE_TOURS } from './simpleTours.static';

export type { SimpleTour };

// Canonical tour slugs (exactly 10 tours, priority order)
const CANONICAL_TOUR_SLUGS = new Set([
  'bir-billing-paragliding',
  'shimla-queen-of-hills',
  'manali-valley-of-gods',
  'dharamshala-little-lhasa',
  'dalhousie-mini-switzerland',
  'kasol-backpackers-paradise',
  'chamba-valley-experience',
  'leh-ladakh-adventure',
  'spiti-valley-exploration',
  'golden-temple-amritsar',
]);

const dedupeBySlugKeepLowestPriority = <T extends { slug: string; priority: number }>(items: T[]): T[] => {
  const map = new Map<string, T>();
  for (const item of items) {
    const existing = map.get(item.slug);
    if (!existing || item.priority < existing.priority) {
      map.set(item.slug, item);
    }
  }
  return Array.from(map.values());
};

export const getSimpleTours = (): SimpleTour[] => {
  return SIMPLE_TOURS;
};

export const getActiveSimpleTours = (): SimpleTour[] => {
  const active = getSimpleTours().filter(t => t.active);
  const canonical = active.filter(t => CANONICAL_TOUR_SLUGS.has(t.slug));
  return dedupeBySlugKeepLowestPriority(canonical).sort((a, b) => a.priority - b.priority);
};

export const getSimpleTourBySlug = (slug: string): SimpleTour | undefined => {
  return getSimpleTours().find(t => t.slug === slug);
};

export const getSimpleTourById = (id: string): SimpleTour | undefined => {
  return getSimpleTours().find(t => t.id === id);
};
