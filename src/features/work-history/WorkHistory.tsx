import { Section } from '@/components/ui';
import { workHistory } from '@/data';
import { JobCard } from './JobCard';

export function WorkHistory() {
  return (
    <Section
      id="experience"
      index={3}
      eyebrow="Work History"
      title="Systems I've built and run"
      lead="Production work in banking, healthcare and trade compliance, where data has to be right and downtime is expensive."
    >
      <ol className="relative pl-9 before:absolute before:top-2 before:bottom-2 before:left-[9px] before:w-0.5 before:bg-linear-to-b before:from-accent before:via-accent2 before:to-transparent">
        {workHistory.map((job) => (
          <li key={`${job.company}-${job.role}-${job.start}`} className="relative mb-6 last:mb-0">
            <span
              aria-hidden="true"
              className="absolute top-7 -left-[33px] size-3.5 rounded-full border-[3px] border-accent bg-bg"
            />
            <JobCard job={job} />
          </li>
        ))}
      </ol>
    </Section>
  );
}
