import type { ContactData } from '@/types/content';

export const contact: ContactData = {
  heading: "Let's build something great",
  message:
    'Hiring for an AWS or backend role, or modernizing a legacy system onto AWS? Send me a note. I reply within a day.',
  email: 'harsha.g.techdeveloper@gmail.com',
  channels: [
    {
      type: 'email',
      label: 'Email',
      value: 'harsha.g.techdeveloper@gmail.com',
      url: 'mailto:harsha.g.techdeveloper@gmail.com',
    },
    { type: 'phone', label: 'Phone', value: '+1 (269) 207-9923', url: 'tel:+12692079923' },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/harsha-us',
      url: 'https://www.linkedin.com/in/harsha-us/',
    },
    {
      type: 'github',
      label: 'GitHub',
      value: 'github.com/SriHarsha-Godavarthi',
      url: 'https://github.com/SriHarsha-Godavarthi',
    },
    { type: 'location', label: 'Location', value: 'Irving, TX · United States' },
  ],
};
