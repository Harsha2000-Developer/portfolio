import { Card, ChipList } from '@/components/ui';
import type { Job } from '@/types/content';

export function JobCard({ job }: { job: Job }) {
  return (
    <Card className="grid gap-2.5 p-6 md:grid-cols-[220px_1fr] md:gap-8">
      <div>
        <p className="font-mono text-[13px] text-accent">
          {job.start} — {job.end}
        </p>
        <p className="mt-1 text-lg font-bold">{job.company}</p>
        <p className="text-[13px] text-muted">
          {job.location}
          {job.domain && ` · ${job.domain}`}
        </p>
      </div>
      <div>
        <h3 className="text-[17px] font-semibold">{job.role}</h3>
        {job.summary && <p className="mt-2 text-[15px] text-muted">{job.summary}</p>}
        {job.tech.length > 0 && (
          <div className="mt-3.5">
            <ChipList items={job.tech} />
          </div>
        )}
      </div>
    </Card>
  );
}
