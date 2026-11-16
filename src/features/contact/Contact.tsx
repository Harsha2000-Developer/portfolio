import { sectionNumber } from '@/config/site';
import { IconBox, Section } from '@/components/ui';
import { contact } from '@/data';
import { linkProps } from '@/lib/links';
import type { ContactChannel } from '@/types/content';
import { ContactForm } from './ContactForm';

const icons: Record<ContactChannel['type'], string> = {
  email: '✉',
  linkedin: 'in',
  github: '⌥',
  location: '⌖',
  phone: '☏',
  website: '◍',
};

const itemClass = 'flex items-center gap-4 rounded-xl border border-line bg-card px-[18px] py-4';

function ChannelItem({ channel }: { channel: ContactChannel }) {
  const content = (
    <>
      <IconBox>{icons[channel.type]}</IconBox>
      <span className="min-w-0">
        <small className="block text-xs text-muted">{channel.label}</small>
        <span className="block truncate">{channel.value}</span>
      </span>
    </>
  );
  return channel.url ? (
    <a {...linkProps(channel.url)} className={`${itemClass} transition hover:border-accent/60`}>
      {content}
    </a>
  ) : (
    <div className={itemClass}>{content}</div>
  );
}

export function Contact() {
  return (
    <Section id="contact" index={sectionNumber('contact')} eyebrow="Contact" title={contact.heading}>
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="max-w-xl text-muted">{contact.message}</p>
          <ul className="mt-7 grid gap-3.5">
            {contact.channels.map((channel) => (
              <li key={channel.label}>
                <ChannelItem channel={channel} />
              </li>
            ))}
          </ul>
        </div>
        <ContactForm to={contact.email} />
      </div>
    </Section>
  );
}
