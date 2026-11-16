/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv, type Plugin } from 'vite';
// Same headers as production (minus HTTPS-only ones; see deploy/security-headers.conf),
// so `npm run preview` catches CSP breakage before deploy.
import securityHeaders from './deploy/security-headers.json';

/**
 * Writes robots.txt and sitemap.xml at build time and fills %SITE_URL% in index.html,
 * so every environment gets correct absolute URLs from VITE_SITE_URL.
 */
function seo(siteUrl: string): Plugin {
  return {
    name: 'portfolio-seo',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', siteUrl),
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}/</loc><lastmod>${today}</lastmod></url>\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const siteUrl = (env.VITE_SITE_URL || 'http://localhost:5173').replace(/\/$/, '');

  return {
    // '/' for a custom domain or <user>.github.io repo; '/<repo>/' for a GitHub Pages project site.
    base: env.VITE_BASE || '/',
    plugins: [react(), tailwindcss(), seo(siteUrl)],
    resolve: {
      alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    preview: { headers: securityHeaders },
    build: {
      target: 'es2022',
      // Off so source maps are never deployed publicly. If you add error tracking (e.g. Sentry),
      // switch to 'hidden' and upload the maps in CI, then delete them from dist before deploying.
      sourcemap: false,
      rollupOptions: {
        output: {
          // Framework code in its own long-cached chunk; content/app changes don't invalidate it.
          manualChunks(id) {
            if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) return 'react';
          },
        },
      },
    },
    test: {
      environment: 'jsdom',
      setupFiles: ['./src/test/setup.ts'],
      css: false,
      coverage: {
        provider: 'v8',
        include: ['src/**/*.{ts,tsx}'],
        exclude: ['src/**/*.test.{ts,tsx}', 'src/test/**', 'src/main.tsx', 'src/vite-env.d.ts'],
      },
    },
  };
});
