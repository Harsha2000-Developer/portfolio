import { Card, ChipList } from '@/components/ui';
import { linkProps } from '@/lib/links';
import type { Project } from '@/types/content';

export function ProjectCard({ project }: { project: Project }) {
  const [from, to] = project.gradient;
  return (
    <Card className="flex h-full flex-col overflow-hidden transition hover:border-accent/50 motion-safe:hover:-translate-y-1">
      <div
        aria-hidden="true"
        className="relative h-[150px] border-b border-line"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <span className="absolute bottom-3.5 left-[18px] font-mono text-xs text-white/75">{project.slug}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-[17px] font-bold">{project.title}</h3>
        <p className="mb-3.5 text-[14.5px] text-muted">{project.description}</p>
        {project.impact && <p className="mb-3.5 text-[13px] text-ok">▲ {project.impact}</p>}
        <ChipList items={project.tech} />
        {project.links.length > 0 && (
          <div className="mt-auto pt-4">
            <div className="flex gap-[18px] border-t border-line pt-4 text-[13px] text-accent">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  {...linkProps(link.url)}
                  aria-label={`${link.label.replace(/[^\w\s]/g, '').trim()} — ${project.title}`}
                  className="hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
