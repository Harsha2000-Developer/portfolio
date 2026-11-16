import { describe, expect, it } from 'vitest';
import { buildMailto } from './buildMailto';

const parse = (url: string) => {
  const [address, query] = url.replace('mailto:', '').split('?');
  const params = new URLSearchParams(query);
  return { address, subject: params.get('subject'), body: params.get('body') };
};

describe('buildMailto', () => {
  it('encodes subject and body, signing with name and email', () => {
    const url = buildMailto('me@site.dev', {
      name: 'Jane',
      email: 'jane@co.com',
      subject: 'Role & team',
      message: 'Hi there',
    });
    const { address, subject, body } = parse(url);
    expect(address).toBe('me@site.dev');
    expect(subject).toBe('Role & team');
    expect(body).toBe('Hi there\n\n— Jane (jane@co.com)');
  });

  it('falls back to a default subject', () => {
    const url = buildMailto('me@site.dev', { name: 'J', email: 'j@c.com', message: 'x' });
    expect(parse(url).subject).toBe('Hello');
  });

  it('caps very long messages', () => {
    const url = buildMailto('me@site.dev', { name: 'J', email: 'j@c.com', message: 'a'.repeat(10_000) });
    expect(parse(url).body!.startsWith('a'.repeat(4000) + '\n')).toBe(true);
  });
});
