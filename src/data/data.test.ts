import { describe, expect, it } from 'vitest';
import { certifications, contact, projectFilters, projects, summary, techStack, workHistory } from '@/data';

// Guards against content edits that would break the page (duplicate keys, bad URLs, empty fields).

const isUrlOrAnchor = (url: string) => /^(https?:\/\/|mailto:|tel:|\/|#)/.test(url);
const dupes = (values: string[]) => values.filter((v, i) => values.indexOf(v) !== i);

describe('content data', () => {
  it('summary has the required fields', () => {
    expect(summary.name.trim()).not.toBe('');
    expect(summary.headline.trim()).not.toBe('');
    expect(summary.stats.length).toBeGreaterThan(0);
  });

  it('tech stack categories and items are unique', () => {
    expect(dupes(techStack.map((c) => c.title))).toEqual([]);
    techStack.forEach((c) => expect(dupes(c.items.map((i) => i.name))).toEqual([]));
  });

  it('work history entries are complete and uniquely keyed', () => {
    workHistory.forEach((job) => {
      expect(job.role.trim()).not.toBe('');
      expect(job.company.trim()).not.toBe('');
      expect(job.start.trim()).not.toBe('');
      expect(job.end.trim()).not.toBe('');
      if (job.summary !== undefined) expect(job.summary.trim()).not.toBe('');
    });
    expect(dupes(workHistory.map((j) => `${j.company}-${j.role}-${j.start}`))).toEqual([]);
  });

  it('projects have unique slugs, valid categories and valid links', () => {
    expect(dupes(projects.map((p) => p.slug))).toEqual([]);
    projects.forEach((p) => {
      expect(p.categories.length).toBeGreaterThan(0);
      p.categories.forEach((c) => expect(projectFilters).toContain(c));
      p.links.forEach((l) => expect(isUrlOrAnchor(l.url)).toBe(true));
    });
  });

  it('certifications are unique and links are valid', () => {
    expect(dupes(certifications.map((c) => c.name))).toEqual([]);
    certifications.forEach((c) => c.verifyUrl && expect(isUrlOrAnchor(c.verifyUrl)).toBe(true));
  });

  it('contact email and channels are valid', () => {
    expect(contact.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    contact.channels.forEach((ch) => ch.url && expect(isUrlOrAnchor(ch.url)).toBe(true));
  });
});
