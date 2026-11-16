import { useCallback, useState } from 'react';
import { siteConfig } from '@/config/site';

export type Theme = 'light' | 'dark';

const readTheme = (): Theme => (document.documentElement.classList.contains('dark') ? 'dark' : 'light');

/**
 * Light/dark theme. The initial class is set before React loads by public/theme-init.js,
 * so there is no flash of the wrong theme.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  const toggle = useCallback(() => {
    const next: Theme = readTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    try {
      localStorage.setItem(siteConfig.themeStorageKey, next);
    } catch {
      // Storage can be blocked (private mode); the theme still applies for this visit.
    }
    setTheme(next);
  }, []);

  return { theme, toggle };
}
