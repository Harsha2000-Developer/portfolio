import { useState } from 'react';
import { buttonVariants, Container } from '@/components/ui';
import { navSections } from '@/config/site';
import { summary } from '@/data';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/cn';

const sectionIds = navSections.map((s) => s.id);
const iconButton =
  'grid size-10 place-items-center rounded-[10px] border border-line bg-card text-fg transition hover:border-accent/60';

export function Navbar() {
  const active = useActiveSection(sectionIds);
  const { theme, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur-md">
      <Container className="flex h-[68px] items-center justify-between">
        <a href="#summary" className="text-[22px] font-extrabold tracking-tight" aria-label={`${summary.name}, home`}>
          {summary.initials}
          <span className="text-gradient">.</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex gap-7 text-sm text-muted">
            {navSections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'location' : undefined}
                  className={cn('transition hover:text-fg', active === id && 'text-fg')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className={iconButton}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
          </button>
          {summary.resumeUrl && (
            <a href={summary.resumeUrl} download className={cn(buttonVariants.ghost, 'hidden sm:inline-flex')}>
              ⤓ Resume
            </a>
          )}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={cn(iconButton, 'text-lg lg:hidden')}
          >
            <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </Container>

      {menuOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-bg px-4 py-3 lg:hidden">
          <ul>
            {navSections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active === id ? 'location' : undefined}
                  className={cn(
                    'block rounded-lg px-3 py-2.5 text-[15px]',
                    active === id ? 'bg-card text-fg' : 'text-muted',
                  )}
                >
                  {label}
                </a>
              </li>
            ))}
            {summary.resumeUrl && (
              <li className="sm:hidden">
                <a href={summary.resumeUrl} download className="block px-3 py-2.5 text-[15px] text-accent">
                  ⤓ Download resume
                </a>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );
}
