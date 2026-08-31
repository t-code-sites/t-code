import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE_BASE, amaviCitySlugs, serviceSlugs } from './seo-routes.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '../dist');
const brand = 'T-Code Soluções';
const ogImage = `${SITE_BASE}/banners/banner-landing-page-main.webp`;

const cityNames = {
    agrolandia: 'Agrolândia',
    agronomica: 'Agronômica',
    atalanta: 'Atalanta',
    aurora: 'Aurora',
    'braco-do-trombudo': 'Braço do Trombudo',
    'chapadao-do-lageado': 'Chapadão do Lageado',
    'dona-emma': 'Dona Emma',
    ibirama: 'Ibirama',
    imbuia: 'Imbuia',
    ituporanga: 'Ituporanga',
    'jose-boiteux': 'José Boiteux',
    laurentino: 'Laurentino',
    lontras: 'Lontras',
    'mirim-doce': 'Mirim Doce',
    petrolandia: 'Petrolândia',
    'pouso-redondo': 'Pouso Redondo',
    'presidente-getulio': 'Presidente Getúlio',
    'presidente-nereu': 'Presidente Nereu',
    'rio-do-campo': 'Rio do Campo',
    'rio-do-oeste': 'Rio do Oeste',
    'rio-do-sul': 'Rio do Sul',
    salete: 'Salete',
    'santa-terezinha': 'Santa Terezinha',
    taio: 'Taió',
    'trombudo-central': 'Trombudo Central',
    'vidal-ramos': 'Vidal Ramos',
    'vitor-meireles': 'Vitor Meireles',
    witmarsum: 'Witmarsum',
};

const serviceMeta = {
    'prototipo-producao': {
        title: 'Do protótipo à produção',
        description:
            'Colocamos no ar o que você começou com ferramentas de IA e assumimos a manutenção. Atendimento em Rio do Sul, SC e Alto Vale do Itajaí.',
    },
    'produtos-digitais': {
        title: 'Produtos digitais sob medida',
        description:
            'Plataformas web, sistemas corporativos e SaaS construídos para as regras do seu negócio. Atendimento em Rio do Sul, SC e Alto Vale do Itajaí.',
    },
    producao: {
        title: 'Evolução e operação contínua',
        description:
            'Deploy, monitoramento e melhorias para que a tecnologia acompanhe o crescimento. Atendimento em Rio do Sul, SC e Alto Vale do Itajaí.',
    },
    customizacao: {
        title: 'Adaptação ao seu processo',
        description:
            'Estendemos sistemas existentes para refletir como sua empresa opera. Atendimento em Rio do Sul, SC e Alto Vale do Itajaí.',
    },
    integracoes: {
        title: 'Automação de processos',
        description:
            'Integrações com ERPs, plataformas e APIs para eliminar retrabalho. Atendimento em Rio do Sul, SC e Alto Vale do Itajaí.',
    },
    consultoria: {
        title: 'Direção estratégica de produto',
        description:
            'Diagnóstico, arquitetura e priorização antes de investir em tecnologia. Atendimento em Rio do Sul, SC e Alto Vale do Itajaí.',
    },
    site: {
        title: 'Presença digital com propósito',
        description:
            'Sites e portais que posicionam sua marca e captam oportunidades. Atendimento em Rio do Sul, SC e Alto Vale do Itajaí.',
    },
};

function cityJsonLd(cityName, slug) {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'LocalBusiness',
                name: 'T-Code Soluções Tecnológicas LTDA',
                url: SITE_BASE,
                description: `Desenvolvimento de software sob medida para empresas em ${cityName}, SC.`,
                areaServed: { '@type': 'City', name: cityName },
            },
            {
                '@type': 'FAQPage',
                mainEntity: [
                    {
                        '@type': 'Question',
                        name: `A T-Code Soluções atende empresas em ${cityName}?`,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: `Sim. A T-Code Soluções atende empresas em ${cityName}, SC, com sede em Rio do Sul.`,
                        },
                    },
                ],
            },
        ],
    };
}

function getSeoPages() {
    const pages = [
        {
            route: '/servicos',
            title: `Serviços de software sob medida | ${brand}`,
            description:
                'Colocação de protótipos em produção, software sob medida, automação e consultoria. Rio do Sul, SC e Alto Vale do Itajaí.',
            jsonLd: { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Serviços T-Code Soluções' },
        },
        {
            route: '/regiao',
            title: `Software no Alto Vale do Itajaí | ${brand}`,
            description:
                'T-Code Soluções atende empresas nos 28 municípios do Alto Vale do Itajaí (AMAVI). Sede em Rio do Sul, SC.',
            jsonLd: { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Alto Vale do Itajaí' },
        },
    ];

    for (const slug of serviceSlugs) {
        const service = serviceMeta[slug];
        pages.push({
            route: `/servicos/${slug}`,
            title: `${service.title} | ${brand}`,
            description: service.description,
            jsonLd: {
                '@context': 'https://schema.org',
                '@type': 'Service',
                name: service.title,
                description: service.description,
                url: `${SITE_BASE}/servicos/${slug}`,
            },
        });
    }

    for (const slug of amaviCitySlugs) {
        const cityName = cityNames[slug];
        const hq = slug === 'rio-do-sul' ? ' Sede da T-Code Soluções.' : '';
        pages.push({
            route: `/regiao/${slug}`,
            title: `Desenvolvimento de Software em ${cityName}, SC | ${brand}`,
            description: `Software sob medida, automação e protótipos em produção para empresas em ${cityName}, SC.${hq}`,
            jsonLd: cityJsonLd(cityName, slug),
        });
    }

    return pages;
}

function escapeHtml(value) {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('"', '&quot;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;');
}

function patchHtml(baseHtml, seo) {
    const canonical = `${SITE_BASE}${seo.route}`;
    const title = escapeHtml(seo.title);
    const description = escapeHtml(seo.description);

    return baseHtml
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
        .replace(/<meta\s+name="description"[^>]*\/>/, `<meta name="description" content="${description}"/>`)
        .replace(/<link rel="canonical"[^>]*\/>/, `<link rel="canonical" href="${canonical}"/>`)
        .replace(/<meta property="og:title"[^>]*\/>/, `<meta property="og:title" content="${title}"/>`)
        .replace(/<meta\s+property="og:description"[\s\S]*?\/>/, `<meta property="og:description" content="${description}"/>`)
        .replace(/<meta property="og:url"[^>]*\/>/, `<meta property="og:url" content="${canonical}"/>`)
        .replace(/<meta name="twitter:title"[^>]*\/>/, `<meta name="twitter:title" content="${title}"/>`)
        .replace(/<meta\s+name="twitter:description"[\s\S]*?\/>/, `<meta name="twitter:description" content="${description}"/>`)
        .replace(
            /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
            `<script type="application/ld+json">${JSON.stringify(seo.jsonLd)}</script>`,
        );
}

const baseHtml = readFileSync(join(distDir, 'index.html'), 'utf8');
let count = 0;

for (const seo of getSeoPages()) {
    const outputDir = join(distDir, seo.route);
    mkdirSync(outputDir, { recursive: true });
    writeFileSync(join(outputDir, 'index.html'), patchHtml(baseHtml, seo), 'utf8');
    count += 1;
}

console.log(`HTML SEO estático gerado para ${count} rotas`);
