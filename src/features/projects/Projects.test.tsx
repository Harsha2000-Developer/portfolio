import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { projects } from '@/data';
import { Projects } from './Projects';

const cardCount = () =>
  within(screen.getAllByRole('list')[0]!.closest('section')!).getAllByRole('heading', { level: 3 }).length;

describe('Projects', () => {
  it.skipIf(projects.length === 0)('filters cards by category and marks the active filter', async () => {
    const user = userEvent.setup();
    render(<Projects />);
    expect(cardCount()).toBe(projects.length);

    const cloud = screen.getByRole('button', { name: 'Cloud' });
    await user.click(cloud);

    expect(cloud).toHaveAttribute('aria-pressed', 'true');
    expect(cardCount()).toBe(projects.filter((p) => p.categories.includes('Cloud')).length);
    expect(screen.getByText(/^Showing \d+ projects?$/)).toBeInTheDocument();
  });
});
