import { Suspense, lazy } from 'react';
import { Footer, Navbar, SkipLink } from '@/components/layout';
import { Summary } from '@/features/summary';
import { isSectionVisible } from '@/config/site';
import { ErrorBoundary } from './ErrorBoundary';

// Everything below the summary is code-split and loaded lazily.
const TechStack = lazy(() => import('@/features/tech-stack').then((m) => ({ default: m.TechStack })));
const WorkHistory = lazy(() => import('@/features/work-history').then((m) => ({ default: m.WorkHistory })));
const Projects = lazy(() => import('@/features/projects').then((m) => ({ default: m.Projects })));
const Certifications = lazy(() => import('@/features/certifications').then((m) => ({ default: m.Certifications })));
const Contact = lazy(() => import('@/features/contact').then((m) => ({ default: m.Contact })));

export function App() {
  return (
    <ErrorBoundary>
      <SkipLink />
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Summary />
        <Suspense fallback={null}>
          <TechStack />
          <WorkHistory />
          {isSectionVisible('projects') && <Projects />}
          {isSectionVisible('certifications') && <Certifications />}
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </ErrorBoundary>
  );
}
