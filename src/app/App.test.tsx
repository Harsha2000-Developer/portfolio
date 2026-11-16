import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { navSections } from '@/config/site';
import { App } from './App';

describe('App', () => {
  it('renders every navigable section', async () => {
    const { container } = render(<App />);
    // Sections below the summary are lazy-loaded, so wait for them to arrive.
    await waitFor(() => {
      navSections.forEach(({ id }) => {
        expect(container.querySelector(`#${id}`), `section #${id}`).not.toBeNull();
      });
    });
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('toggles the theme class on <html>', async () => {
    const user = userEvent.setup();
    document.documentElement.classList.add('dark');
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'Switch to light theme' }));
    expect(document.documentElement).not.toHaveClass('dark');

    await user.click(screen.getByRole('button', { name: 'Switch to dark theme' }));
    expect(document.documentElement).toHaveClass('dark');
  });
});
