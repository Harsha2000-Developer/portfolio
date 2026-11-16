export interface ContactMessage {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

/** Builds a mailto: URL with an encoded subject and body. Values are trimmed and length-capped. */
export function buildMailto(to: string, msg: ContactMessage): string {
  const clip = (s: string, max: number) => s.trim().slice(0, max);
  const subject = clip(msg.subject || 'Hello', 150);
  const body = `${clip(msg.message, 4000)}\n\n— ${clip(msg.name, 100)} (${clip(msg.email, 200)})`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
