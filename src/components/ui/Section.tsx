import type { ReactNode } from 'react';
import type { SectionId } from '@/config/site';
import { Container } from './Container';

interface SectionProps {
  id: SectionId;
  index: number;
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
}

export function Section({ id, index, eyebrow, title, lead, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="border-t border-line py-16 md:py-22">
      <Container>
        <p className="text-[13px] font-semibold tracking-[2px] text-accent uppercase">
          {String(index).padStart(2, '0')} · {eyebrow}
        </p>
        <h2 id={headingId} className="mt-2 mb-3 text-3xl font-extrabold tracking-tight md:text-[38px]">
          {title}
        </h2>
        {lead && <p className="mb-10 max-w-xl text-muted md:mb-11">{lead}</p>}
        {children}
      </Container>
    </section>
  );
}
