/** Lets keyboard users jump past the navigation. Visible only when focused. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only z-50 rounded-lg bg-accent px-4 py-2 font-semibold text-[#0a0e1a] focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
    >
      Skip to content
    </a>
  );
}
