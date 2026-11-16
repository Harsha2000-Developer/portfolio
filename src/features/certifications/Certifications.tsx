import { Card, Section } from '@/components/ui';
import { certifications } from '@/data';
import { linkProps } from '@/lib/links';

export function Certifications() {
  return (
    <Section
      id="certifications"
      index={5}
      eyebrow="Certifications"
      title="Verified credentials"
      lead="Each badge links to its official verification page."
    >
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((c) => (
          <li key={c.name}>
            <Card className="flex h-full flex-col p-6">
              <div
                aria-hidden="true"
                className="mb-[18px] grid size-14 place-items-center rounded-[14px] text-[15px] font-extrabold text-[#0a0e1a]"
                style={{ background: c.color }}
              >
                {c.badge}
              </div>
              <h3 className="mb-1.5 text-[15.5px] font-bold">{c.name}</h3>
              <p className="text-[13px] text-muted">
                {c.issuer} · {c.year}
              </p>
              {c.verifyUrl && (
                <a
                  {...linkProps(c.verifyUrl)}
                  aria-label={`Verify ${c.name}`}
                  className="mt-auto inline-block pt-3.5 text-[13px] text-accent hover:underline"
                >
                  Verify ↗
                </a>
              )}
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
