import { describe, expect, it } from 'vitest';
import type { Project } from '@/types/content';
import { filterProjects } from './filterProjects';

const make = (slug: string, categories: Project['categories']): Project => ({
  title: slug,
  slug,
  description: '',
  tech: [],
  categories,
  gradient: ['#000', '#fff'],
  links: [],
});

const list = [make('a', ['Backend']), make('b', ['Cloud', 'Open source']), make('c', ['Full-stack'])];

describe('filterProjects', () => {
  it('returns every project for "All"', () => {
    expect(filterProjects(list, 'All').map((p) => p.slug)).toEqual(['a', 'b', 'c']);
  });

  it('returns only projects in the chosen category', () => {
    expect(filterProjects(list, 'Cloud').map((p) => p.slug)).toEqual(['b']);
    expect(filterProjects(list, 'Open source').map((p) => p.slug)).toEqual(['b']);
  });

  it('does not mutate the input', () => {
    const copy = [...list];
    filterProjects(list, 'Backend');
    expect(list).toEqual(copy);
  });
});
