const base =
  'inline-flex items-center justify-center gap-2 rounded-[10px] px-5 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

/** Button styles, usable on <a> and <button>. */
export const buttonVariants = {
  primary: `${base} bg-gradient text-[#0a0e1a] hover:opacity-90`,
  ghost: `${base} border border-line bg-card text-fg hover:border-accent/60`,
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
