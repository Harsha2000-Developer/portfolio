import { certifications, projects } from '@/data';

/**
 * App-level configuration that is not content: URLs, navigation, build-time env.
 * Content lives in `@/data`.
 */

export const siteConfig = {
  /** Public origin, used for canonical/OG tags and the sitemap. Set VITE_SITE_URL per environment. */
  url: (import.meta.env.VITE_SITE_URL ?? 'http://localhost:5173').replace(/\/$/, ''),
  themeStorageKey: 'theme',
} as const;

/** Section anchors, in page order. Section components use these ids. */
const allNavSections = [
  { id: 'summary', label: 'Summary' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
] as const;

export type SectionId = (typeof allNavSections)[number]['id'];

/** Sections with no content are left out of the page and the navigation. */
const emptySections: Partial<Record<SectionId, boolean>> = {
  projects: projects.length === 0,
  certifications: certifications.length === 0,
};

export const isSectionVisible = (id: SectionId) => !emptySections[id];

export const navSections = allNavSections.filter(({ id }) => isSectionVisible(id));

/** 1-based position of a section on the page, for its "01 ·" label. */
export const sectionNumber = (id: SectionId) => navSections.findIndex((s) => s.id === id) + 1;
