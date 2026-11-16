import type { Project, ProjectFilter } from '@/types/content';

export function filterProjects(projects: readonly Project[], filter: ProjectFilter): Project[] {
  return filter === 'All' ? [...projects] : projects.filter((p) => p.categories.includes(filter));
}
