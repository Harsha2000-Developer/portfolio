/** Props for an anchor: external http(s) links open in a new tab without leaking the opener. */
export function linkProps(url: string) {
  return /^https?:\/\//.test(url) ? { href: url, target: '_blank', rel: 'noopener noreferrer' } : { href: url };
}
