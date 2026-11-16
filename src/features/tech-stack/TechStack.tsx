import { Card, Chip, IconBox, Section } from '@/components/ui';
import { techStack } from '@/data';

export function TechStack() {
  return (
    <Section
      id="tech-stack"
      index={2}
      eyebrow="Tech Stack"
      title="What I run in production"
      lead="Everything here has shipped to production. Highlighted items are what I use most."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {techStack.map((category) => (
          <Card key={category.title} className="p-6">
            <h3 className="mb-4 flex items-center gap-2.5 text-[17px] font-bold">
              <IconBox>{category.icon}</IconBox>
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li key={item.name}>
                  <Chip highlight={item.highlight}>{item.name}</Chip>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
