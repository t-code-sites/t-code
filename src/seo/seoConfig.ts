import { SITE_BASE } from '@/config/site';
import { getCityBySlug } from '@/data/amaviCities';
import type { AmaviCity } from '@/data/amaviCities';
import { services } from '@/data/services';

export interface SeoConfig {
    title: string;
    description: string;
    canonical: string;
    ogType?: string;
}

const brand = 'T-Code Soluções';
const ogImage = `${SITE_BASE}/banners/banner-landing-page-main.webp`;

export const homeSeo: SeoConfig = {
    title: `${brand} | Protótipo em produção e software sob medida`,
    description:
        'T-Code Soluções, Rio do Sul, SC: coloca em produção sites e sistemas iniciados com ferramentas de IA e assume a manutenção. Software sob medida, SaaS e automação de processos.',
    canonical: `${SITE_BASE}/`,
};

export const privacySeo: SeoConfig = {
    title: `Política de privacidade | ${brand}`,
    description: 'Política de privacidade da T-Code Soluções Tecnológicas LTDA.',
    canonical: `${SITE_BASE}/politica-de-privacidade`,
};

export const servicesIndexSeo: SeoConfig = {
    title: `Serviços de software sob medida | ${brand}`,
    description:
        'Colocação de protótipos em produção, desenvolvimento de software sob medida, automação, integrações e consultoria de produto. Rio do Sul, SC e Alto Vale do Itajaí.',
    canonical: `${SITE_BASE}/servicos`,
};

export const regionalIndexSeo: SeoConfig = {
    title: `Software no Alto Vale do Itajaí | ${brand}`,
    description:
        'T-Code Soluções atende empresas nos 28 municípios do Alto Vale do Itajaí (AMAVI). Desenvolvimento de software sob medida com sede em Rio do Sul, SC.',
    canonical: `${SITE_BASE}/regiao`,
};

export function getServiceSeo(service: (typeof services)[number]): SeoConfig {
    return {
        title: `${service.title} | ${brand}`,
        description: `${service.subtitle} Atendimento em Rio do Sul, SC e Alto Vale do Itajaí.`,
        canonical: `${SITE_BASE}/servicos/${service.id}`,
        ogType: 'article',
    };
}

export function getCitySeo(city: AmaviCity): SeoConfig {
    const hqNote = city.isHeadquarters
        ? ' Sede da T-Code Soluções.'
        : ' Atendimento presencial e remoto a partir de Rio do Sul.';

    return {
        title: `Desenvolvimento de Software em ${city.name}, SC | ${brand}`,
        description: `Software sob medida, automação e colocação de protótipos em produção para empresas em ${city.name}, SC.${hqNote}`,
        canonical: `${SITE_BASE}/regiao/${city.slug}`,
    };
}

export function getSeoForPath(pathname: string): SeoConfig {
    if (pathname === '/') return homeSeo;
    if (pathname === '/politica-de-privacidade') return privacySeo;
    if (pathname === '/servicos') return servicesIndexSeo;
    if (pathname === '/regiao') return regionalIndexSeo;

    const serviceMatch = pathname.match(/^\/servicos\/([^/]+)$/);
    if (serviceMatch) {
        const service = services.find((item) => item.id === serviceMatch[1]);
        if (service) return getServiceSeo(service);
    }

    const cityMatch = pathname.match(/^\/regiao\/([^/]+)$/);
    if (cityMatch) {
        const city = getCityBySlug(cityMatch[1]);
        if (city) return getCitySeo(city);
    }

    return homeSeo;
}

export function getOgImage(): string {
    return ogImage;
}
