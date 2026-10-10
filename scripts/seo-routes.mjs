/** Rotas SEO geradas no build (sitemap + prerender). Mantido em JS puro para scripts Node. */

export const SITE_BASE = 'https://www.tcodesolucoes.com';

export const amaviCitySlugs = [
    'agrolandia',
    'agronomica',
    'atalanta',
    'aurora',
    'braco-do-trombudo',
    'chapadao-do-lageado',
    'dona-emma',
    'ibirama',
    'imbuia',
    'ituporanga',
    'jose-boiteux',
    'laurentino',
    'lontras',
    'mirim-doce',
    'petrolandia',
    'pouso-redondo',
    'presidente-getulio',
    'presidente-nereu',
    'rio-do-campo',
    'rio-do-oeste',
    'rio-do-sul',
    'salete',
    'santa-terezinha',
    'taio',
    'trombudo-central',
    'vidal-ramos',
    'vitor-meireles',
    'witmarsum',
];

export const serviceSlugs = [
    'prototipo-producao',
    'produtos-digitais',
    'producao',
    'integracoes',
    'consultoria',
    'site',
];

export function getAllPrerenderRoutes() {
    return [
        '/',
        '/politica-de-privacidade',
        '/servicos',
        '/regiao',
        ...serviceSlugs.map((slug) => `/servicos/${slug}`),
        ...amaviCitySlugs.map((slug) => `/regiao/${slug}`),
    ];
}
