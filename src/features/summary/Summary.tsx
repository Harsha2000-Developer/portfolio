import { isSectionVisible } from '@/config/site';
import { buttonVariants, Container } from '@/components/ui';
import { summary } from '@/data';
// import { CodeCard } from './CodeCard'; // re-enable with the CodeCard block below

export function Summary() {
  return (
    <section id="summary" aria-labelledby="summary-heading" className="relative overflow-hidden py-14 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-64 -right-52 size-[700px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent2)_18%,transparent),transparent_65%)]"
      />
      <Container className="relative grid items-center gap-14">
        <div>
          {summary.availability && (
            <span className="inline-flex items-center gap-2 rounded-full border border-ok/30 bg-ok/10 px-3.5 py-1.5 text-[13px] text-ok">
              <span aria-hidden="true" className="size-2 rounded-full bg-ok shadow-[0_0_10px_var(--ok)]" />
              {summary.availability}
            </span>
          )}
          <h1
            id="summary-heading"
            className="mt-5 mb-3.5 text-[40px] leading-[1.05] font-extrabold tracking-[-2px] sm:text-6xl"
          >
            Hi, I'm <span className="text-gradient">{summary.name}</span>
          </h1>
          <p className="mb-4 text-lg font-medium md:text-xl">{summary.headline}</p>
          <p className="text-[17px] text-muted">{summary.bio}</p>
          <div className="my-8 flex flex-wrap gap-3.5 md:mb-10">
            {isSectionVisible('projects') ? (
              <a href="#projects" className={buttonVariants.primary}>
                View Projects →
              </a>
            ) : (
              <a href="#experience" className={buttonVariants.primary}>
                View Experience →
              </a>
            )}
            <a href="#contact" className={buttonVariants.ghost}>
              Get in touch
            </a>
          </div>
          <dl className="grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
            {summary.stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="text-[13px] text-muted">{s.label}</dt>
                <dd className="text-3xl font-extrabold tracking-tight">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        {/* <div className="hidden lg:block">
          <CodeCard summary={summary} />
        </div> */}
      </Container>
    </section>
  );
}
