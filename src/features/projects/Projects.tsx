import { useState } from 'react';
import { Section } from '@/components/ui';
import { projectFilters, projects } from '@/data';
import { cn } from '@/lib/cn';
import type { ProjectFilter } from '@/types/content';
import { filterProjects } from './filterProjects';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('All');
  const shown = filterProjects(projects, filter);

  return (
    <Section
      id="projects"
      index={4}
      eyebrow="Projects"
      title="Things I've built"
      lead="Selected projects I've designed and built."
    >
      <div className="mb-7 flex flex-wrap gap-2.5" role="group" aria-label="Filter projects by category">
        {projectFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn(
              'rounded-full border px-4 py-2 text-[13px] transition',
              filter === f ? 'border-fg bg-fg font-semibold text-bg' : 'border-line text-muted hover:text-fg',
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? 'project' : 'projects'}
      </p>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <li key={p.slug}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
