import type { Project, ProjectFilter } from '@/types/content';

export const projectFilters: ProjectFilter[] = ['All', 'Backend', 'Full-stack', 'Cloud', 'Open source'];

// auth-service is left out until it has more than the Next.js starter. Add GitHub links
// (e.g. { label: 'GitHub →', url: 'https://github.com/...' }) once each repo is pushed.
export const projects: Project[] = [
  {
    title: 'ShopFlow — E-commerce Store',
    slug: 'ecommerce-store',
    description:
      'A full-stack store with a 180+ product catalog, cross-device cart and live order tracking. Checkout drives an event-driven RabbitMQ pipeline (payment → inventory → shipping → delivery) fed by a transactional outbox, with idempotent consumers, retries and a dead-letter queue.',
    impact: 'Zero oversell: a 40-buyer concurrency test proves stock never goes negative',
    tech: ['Java 21', 'Spring Boot', 'RabbitMQ', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Testcontainers'],
    categories: ['Backend', 'Full-stack'],
    gradient: ['#9a3412', '#db2777'],
    links: [],
  },
  {
    title: 'Ledgerly — Budget Dashboard',
    slug: 'budget-dashboard',
    description:
      'A personal finance app in the style of Mint: bank CSV import, rule-based auto-categorisation, monthly budgets with alerts, subscription and paycheck detection, Plaid-style account linking and an append-only audit log.',
    impact: '52 backend tests, including PostgreSQL via Testcontainers',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Flyway', 'React', 'TypeScript', 'Recharts'],
    categories: ['Backend', 'Full-stack'],
    gradient: ['#065f46', '#0ea5e9'],
    links: [],
  },
  {
    title: 'Events Analyzer',
    slug: 'events-analyzer',
    description:
      'A Spring Boot API for measuring event latency and throughput across distributed systems. It runs on AWS EKS in private subnets behind an ALB, with RDS PostgreSQL, all provisioned with Terraform.',
    tech: ['Java 17', 'Spring Boot', 'AWS EKS', 'RDS', 'Terraform', 'Kubernetes', 'Docker'],
    categories: ['Backend', 'Cloud'],
    gradient: ['#0f172a', '#0891b2'],
    links: [{ label: 'GitHub →', url: 'https://github.com/Harsha2000-Developer/events-analyzer' }],
  },
];
