import type { ReactNode } from 'react';

export function IconBox({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="grid size-9 shrink-0 place-items-center rounded-[9px] bg-accent/10 text-base text-accent"
    >
      {children}
    </span>
  );
}
