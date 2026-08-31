import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_BASE, getAllPrerenderRoutes } from './seo-routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const today = new Date().toISOString().slice(0, 10);

function priorityForRoute(route) {
    if (route === '/') return '1.0';
    if (route === '/regiao/rio-do-sul') return '0.95';
    if (route.startsWith('/regiao/')) return '0.85';
    if (route === '/servicos' || route === '/regiao') return '0.9';
    if (route.startsWith('/servicos/')) return '0.8';
    if (route === '/politica-de-privacidade') return '0.3';
    return '0.7';
}

function changefreqForRoute(route) {
    if (route === '/politica-de-privacidade') return 'yearly';
    if (route === '/') return 'weekly';
    return 'monthly';
}

const urls = getAllPrerenderRoutes()
    .map(
        (route) => `  <url>
    <loc>${SITE_BASE}${route === '/' ? '/' : route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreqForRoute(route)}</changefreq>
    <priority>${priorityForRoute(route)}</priority>
  </url>`,
    )
    .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

writeFileSync(resolve(__dirname, '../public/sitemap.xml'), xml, 'utf8');
console.log(`sitemap.xml gerado com ${getAllPrerenderRoutes().length} URLs`);
