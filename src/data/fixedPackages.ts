import type { FixedPackage, ItineraryDay } from './types';
import { FIXED_PACKAGES } from './fixedPackages.static';

export type { FixedPackage, ItineraryDay };

const CANONICAL_FIXED_PACKAGE_SLUGS = new Set([
  'amb-andaura-to-devi-darshan',
  'amb-andaura-to-dharamshala',
  'gopipur-to-delhi',
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

export const getFixedPackages = (): FixedPackage[] => {
  return FIXED_PACKAGES;
};

export const getActiveFixedPackages = (): FixedPackage[] => {
  const active = getFixedPackages().filter(p => p.status === 'active');
  const canonical = active.filter(p => CANONICAL_FIXED_PACKAGE_SLUGS.has(p.slug));
  return dedupeBySlugKeepLowestPriority(canonical).sort((a, b) => a.priority - b.priority);
};

export const getHomepageFixedPackages = (): FixedPackage[] => {
  return getActiveFixedPackages()
    .filter(p => p.showOnHomepage)
    .sort((a, b) => a.priority - b.priority);
};

export const getFixedPackageBySlug = (slug: string): FixedPackage | undefined => {
  return getFixedPackages().find(p => p.slug === slug);
};
