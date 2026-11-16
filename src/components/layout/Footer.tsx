import { Container } from '@/components/ui';
import { summary } from '@/data';

export function Footer() {
  return (
    <footer className="border-t border-line py-8 text-[13px] text-muted">
      <Container className="flex flex-col justify-between gap-1.5 sm:flex-row">
        <span>
          © {new Date().getFullYear()} {summary.name}
        </span>
        <span className="font-mono">Built with React · TypeScript · Tailwind</span>
      </Container>
    </footer>
  );
}
