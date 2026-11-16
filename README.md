# Portfolio

Personal portfolio for Sri Harsha Godavarthi, Senior Software Engineer. Built with React 19, TypeScript, Vite and Tailwind CSS 4. It ships as a static site served by nginx in a Docker container.

## Quick start

Requires Node 22 (see `.nvmrc`).

```bash
npm install
npm run dev          # http://localhost:5173
```

## Scripts

| Command                 | What it does                                                   |
| ----------------------- | -------------------------------------------------------------- |
| `npm run dev`           | Dev server with hot reload                                     |
| `npm run build`         | Type-check, then production build to `dist/`                   |
| `npm run preview`       | Serve `dist/` with production security headers (CSP etc.)      |
| `npm run typecheck`     | TypeScript, no emit                                            |
| `npm run lint`          | ESLint (TypeScript, React hooks, accessibility), zero warnings |
| `npm run format`        | Prettier (with Tailwind class sorting)                         |
| `npm test`              | Vitest unit and component tests                                |
| `npm run test:coverage` | Tests with coverage report                                     |
| `npm run validate`      | Typecheck + lint + format check + tests (what CI runs)         |

## Editing content

All content is in `src/data`, one file per section. Change these files, not the components.

| Section        | File                         |
| -------------- | ---------------------------- |
| Summary        | `src/data/summary.ts`        |
| Tech Stack     | `src/data/techStack.ts`      |
| Work History   | `src/data/workHistory.ts`    |
| Projects       | `src/data/projects.ts`       |
| Certifications | `src/data/certifications.ts` |
| Contact        | `src/data/contact.ts`        |

- The field shapes are in `src/types/content.ts`. Optional fields, such as a job's `summary`, are hidden when left out.
- `src/data/data.test.ts` checks the content for duplicate entries, bad links and empty required fields. Run `npm test` after editing.
- To show the resume button, add `public/resume.pdf` and uncomment `resumeUrl` in `summary.ts`.
- The page title, description and social tags are in `index.html`. The social preview image is `public/og-image.png`; its source is `docs/og-image/og-image.html`.

## Project structure

```
src/
  app/              App shell and error boundary
  components/
    layout/         Navbar, Footer, SkipLink
    ui/             Shared building blocks: Section, Card, Chip, buttons
  config/           Site config (URL, navigation): not content
  data/             Site content, one file per section
  features/         One folder per page section: component, sub-components, logic, tests
    summary/ tech-stack/ work-history/ projects/ certifications/ contact/
  hooks/            useTheme, useActiveSection
  lib/              Small pure helpers
  styles/           Tailwind entry and theme tokens (light/dark)
  test/             Test setup
  types/            Content types
public/             Static files copied as-is (favicon, OG image, manifest, theme script)
deploy/             nginx config and security headers
docs/               Design mockups and OG image source (not shipped)
.github/            CI workflow and Dependabot
```

Imports use the `@/` alias for `src/` (for example `import { Card } from '@/components/ui'`).

## Environment

Copy `.env.example` to `.env.local` for local overrides. In CI or on your host, set:

| Variable        | Purpose                                                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `VITE_SITE_URL` | Public origin, for example `https://www.yourdomain.com`. Used for the canonical URL, Open Graph tags, `robots.txt` and `sitemap.xml`, which are generated at build time. |

## Deployment

### Docker (nginx)

```bash
docker build --build-arg VITE_SITE_URL=https://www.yourdomain.com -t portfolio .
docker run -p 8080:8080 portfolio
```

The image:

- runs nginx as a non-root user on port 8080
- caches hashed `/assets/*` files for a year and makes `index.html` always revalidate, so a deploy shows up immediately
- enables gzip
- sends security headers: CSP, HSTS, `nosniff`, `frame-ancestors 'none'` and more
- exposes `/healthz` for load-balancer and Kubernetes health checks

For very high traffic, put a CDN (CloudFront, Cloudflare, Fastly) in front. The cache headers above are set up for that.

### Security headers

The Content Security Policy only allows scripts, styles and fonts from the site's own origin. Fonts are self-hosted, and the theme script is an external file in `public/`. If you add an outside service (analytics, a form backend), add its domain to both:

- `deploy/security-headers.conf` (nginx, production)
- `deploy/security-headers.json` (`npm run preview`)

Then run `npm run build && npm run preview` and check the browser console for CSP errors.

## CI

`.github/workflows/ci.yml` runs on every push and pull request:

1. typecheck, lint, format check, tests with coverage, and the production build
2. a Docker image build

Set the repository variable `SITE_URL` to your domain. Dependabot opens weekly dependency update PRs.

## Contact form

There is no backend. Submitting the form opens the visitor's email app with the message filled in, addressed to `contact.email`. To receive messages directly, point the form at a service such as Formspree, or at your own API, and add its domain to `connect-src` and `form-action` in the CSP.
