import { amaviCities } from '@/data/amaviCities';
import { problemsSection } from '@/data/landingContent';
import { services } from '@/data/services';
import { SITE_BASE } from '@/config/site';
import type { AmaviCity } from '@/data/amaviCities';

const organizationId = `${SITE_BASE}/#organization`;

export const businessContact = {
    name: 'T-Code Soluções Tecnológicas LTDA',
    email: 'comercial@tcodesolucoes.com',
    telephone: '+5547991120742',
    address: {
        addressLocality: 'Rio do Sul',
        addressRegion: 'SC',
        postalCode: '89160-000',
        addressCountry: 'BR',
    },
    openingHours: 'Mo-Fr 09:00-18:00',
};

function cityAreaServed(city: AmaviCity) {
    return {
        '@type': 'City',
        name: city.name,
        containedInPlace: {
            '@type': 'AdministrativeArea',
            name: 'Alto Vale do Itajaí, SC',
        },
    };
}

function allCitiesAreaServed() {
    return amaviCities.map((city) => cityAreaServed(city));
}

function serviceCatalogItems() {
    return services.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.description,
            url: `${SITE_BASE}/servicos/${service.id}`,
        },
    }));
}

export function buildHomeSchema() {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
                '@id': organizationId,
                name: businessContact.name,
                url: SITE_BASE,
                logo: `${SITE_BASE}/favicon.svg`,
                description:
                    'Parceira tecnológica em Rio do Sul, SC. Coloca em produção protótipos criados com ferramentas de IA, desenvolve software sob medida e assume manutenção contínua.',
                email: businessContact.email,
                telephone: businessContact.telephone,
                address: {
                    '@type': 'PostalAddress',
                    ...businessContact.address,
                },
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: -27.210932,
                    longitude: -49.643951,
                },
                openingHours: businessContact.openingHours,
                areaServed: allCitiesAreaServed(),
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Serviços T-Code Soluções',
                    itemListElement: serviceCatalogItems(),
                },
                sameAs: [
                    'https://br.linkedin.com/company/t-code-solucoes-tecnologicas',
                    'https://www.instagram.com/tcodesolucoes/',
                ],
                contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'sales',
                    email: businessContact.email,
                    telephone: businessContact.telephone,
                    areaServed: 'BR',
                    availableLanguage: ['Portuguese', 'pt-BR'],
                },
            },
            {
                '@type': 'WebSite',
                '@id': `${SITE_BASE}/#website`,
                url: SITE_BASE,
                name: 'T-Code Soluções',
                inLanguage: 'pt-BR',
                publisher: { '@id': organizationId },
            },
            {
                '@type': 'FAQPage',
                '@id': `${SITE_BASE}/#faq`,
                mainEntity: problemsSection.items.map((item) => ({
                    '@type': 'Question',
                    name: item.title,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: item.text,
                    },
                })),
            },
        ],
    };
}

export function buildCitySchema(city: AmaviCity) {
    const url = `${SITE_BASE}/regiao/${city.slug}`;

    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': ['LocalBusiness', 'ProfessionalService'],
                '@id': `${url}#business`,
                name: businessContact.name,
                url: SITE_BASE,
                description: `Desenvolvimento de software sob medida para empresas em ${city.name}, SC. Sede em Rio do Sul, atendimento no Alto Vale do Itajaí.`,
                email: businessContact.email,
                telephone: businessContact.telephone,
                areaServed: cityAreaServed(city),
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: `Serviços em ${city.name}`,
                    itemListElement: serviceCatalogItems(),
                },
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Início', item: SITE_BASE },
                    { '@type': 'ListItem', position: 2, name: city.name, item: url },
                ],
            },
            {
                '@type': 'FAQPage',
                mainEntity: [
                    {
                        '@type': 'Question',
                        name: `A T-Code Soluções atende empresas em ${city.name}?`,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: `Sim. A T-Code Soluções atende empresas em ${city.name}, SC. A sede fica em Rio do Sul e o atendimento cobre os 28 municípios do Alto Vale do Itajaí (AMAVI).`,
                        },
                    },
                    {
                        '@type': 'Question',
                        name: `Quais serviços de software a T-Code oferece em ${city.name}?`,
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: `Em ${city.name}, a T-Code oferece colocação de protótipos em produção, desenvolvimento de software sob medida, automação de processos, integrações com ERPs, consultoria de produto e sites corporativos.`,
                        },
                    },
                ],
            },
        ],
    };
}

export function buildServiceSchema(service: (typeof services)[number]) {
    const url = `${SITE_BASE}/servicos/${service.id}`;

    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                '@id': `${url}#service`,
                name: service.title,
                description: service.description,
                url,
                provider: { '@id': organizationId },
                areaServed: allCitiesAreaServed(),
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Início', item: SITE_BASE },
                    { '@type': 'ListItem', position: 2, name: service.title, item: url },
                ],
            },
        ],
    };
}

export function buildServicesIndexSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Serviços T-Code Soluções',
        itemListElement: services.map((service, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: service.title,
            url: `${SITE_BASE}/servicos/${service.id}`,
        })),
    };
}

export function buildRegionalIndexSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Cidades atendidas no Alto Vale do Itajaí',
        itemListElement: amaviCities.map((city, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: city.name,
            url: `${SITE_BASE}/regiao/${city.slug}`,
        })),
    };
}
