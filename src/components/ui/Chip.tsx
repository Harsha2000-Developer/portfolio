import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Chip({ children, highlight }: { children: ReactNode; highlight?: boolean }) {
  return (
    <span
      className={cn(
        'rounded-lg border bg-bg2 px-3 py-1.5 text-[13px]',
        highlight ? 'border-accent/50 text-accent' : 'border-line text-fg/80',
      )}
    >
      {children}
    </span>
  );
}

export function ChipList({ items }: { items: string[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>
          <Chip>{item}</Chip>
        </li>
      ))}
    </ul>
  );
}
