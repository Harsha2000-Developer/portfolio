import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import type { Job } from '@/types/content';
import { JobCard } from './JobCard';

const job: Job = {
  role: 'Staff Engineer',
  company: 'Acme',
  location: 'Remote',
  domain: 'FinTech',
  start: '2022',
  end: 'Present',
  tech: ['Java'],
};

describe('JobCard', () => {
  it('shows the role details without bullet lists', () => {
    const { container } = render(<JobCard job={job} />);
    expect(screen.getByRole('heading', { name: 'Staff Engineer' })).toBeInTheDocument();
    expect(screen.getByText('Acme')).toBeInTheDocument();
    expect(screen.getByText('2022 — Present')).toBeInTheDocument();
    expect(screen.getByText('Remote · FinTech')).toBeInTheDocument();
    // Only list on the card is the tech chips.
    expect(container.querySelectorAll('ul')).toHaveLength(1);
  });

  it('renders the optional summary only when provided', () => {
    const { rerender } = render(<JobCard job={job} />);
    expect(screen.queryByText('Led the platform team.')).not.toBeInTheDocument();
    rerender(<JobCard job={{ ...job, summary: 'Led the platform team.' }} />);
    expect(screen.getByText('Led the platform team.')).toBeInTheDocument();
  });
});
