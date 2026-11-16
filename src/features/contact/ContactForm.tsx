import { useState, type FormEvent } from 'react';
import { buttonVariants, Card } from '@/components/ui';
import { buildMailto } from './buildMailto';

const inputClass =
  'mt-1.5 w-full rounded-[10px] border border-line bg-bg2 px-3.5 py-3 text-sm text-fg placeholder:text-muted outline-none transition focus:border-accent';
const labelClass = 'text-[13px] text-muted';

/** No backend: opens the visitor's mail app with the message pre-filled. */
export function ContactForm({ to }: { to: string }) {
  const [opened, setOpened] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const field = (key: string) => String(data.get(key) ?? '');
    window.location.href = buildMailto(to, {
      name: field('name'),
      email: field('email'),
      subject: field('subject'),
      message: field('message'),
    });
    setOpened(true);
  };

  return (
    <form onSubmit={onSubmit} aria-label="Contact form">
      <Card className="grid gap-4 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className={labelClass}>
            Name
            <input
              name="name"
              required
              maxLength={100}
              autoComplete="name"
              placeholder="Jane Doe"
              className={inputClass}
            />
          </label>
          <label className={labelClass}>
            Email
            <input
              name="email"
              type="email"
              required
              maxLength={200}
              autoComplete="email"
              placeholder="jane@company.com"
              className={inputClass}
            />
          </label>
        </div>
        <label className={labelClass}>
          Subject
          <input name="subject" maxLength={150} placeholder="Senior Engineer opportunity" className={inputClass} />
        </label>
        <label className={labelClass}>
          Message
          <textarea
            name="message"
            required
            rows={5}
            maxLength={4000}
            placeholder="Hi, …"
            className={`${inputClass} resize-y`}
          />
        </label>
        <button type="submit" className={buttonVariants.primary}>
          Send message →
        </button>
        <p className="min-h-5 text-center text-[13px] text-ok" role="status">
          {opened && 'Your mail app should open with the message ready to send.'}
        </p>
      </Card>
    </form>
  );
}
