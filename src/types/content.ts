// Shared shapes for every section's data. Edit the section files, not this one.

export interface Stat {
  value: string;
  label: string;
}

export interface SummaryData {
  name: string;
  initials: string;
  role: string;
  headline: string;
  bio: string;
  availability?: string; // hidden when omitted
  resumeUrl?: string; // put the file in /public and reference it as "/resume.pdf"; button hidden when omitted
  stats: Stat[];
  focus: string[]; // shown in the code card next to the summary
}

export interface TechCategory {
  title: string;
  icon: string;
  items: { name: string; highlight?: boolean }[];
}

export interface Job {
  role: string;
  company: string;
  location: string;
  domain?: string;
  start: string;
  end: string; // use "Present" for the current role
  summary?: string; // optional short summary, hidden when omitted
  tech: string[];
}

export type ProjectCategory = 'Backend' | 'Full-stack' | 'Cloud' | 'Open source';

export interface Project {
  title: string;
  slug: string; // shown on the card thumbnail
  description: string;
  impact?: string;
  tech: string[];
  categories: ProjectCategory[];
  gradient: [string, string];
  links: { label: string; url: string }[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  badge: string; // short text inside the badge
  color: string;
  verifyUrl?: string;
}

export interface ContactChannel {
  type: 'email' | 'linkedin' | 'github' | 'location' | 'phone' | 'website';
  label: string;
  value: string;
  url?: string;
}

export interface ContactData {
  heading: string;
  message: string;
  email: string; // the contact form opens a pre-filled email to this address
  channels: ContactChannel[];
}

export type ProjectFilter = 'All' | ProjectCategory;
