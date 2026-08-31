export interface AmaviCity {
    slug: string;
    name: string;
    isHeadquarters?: boolean;
}

/** 28 municípios associados à AMAVI (Alto Vale do Itajaí, SC). */
export const amaviCities: AmaviCity[] = [
    { slug: 'agrolandia', name: 'Agrolândia' },
    { slug: 'agronomica', name: 'Agronômica' },
    { slug: 'atalanta', name: 'Atalanta' },
    { slug: 'aurora', name: 'Aurora' },
    { slug: 'braco-do-trombudo', name: 'Braço do Trombudo' },
    { slug: 'chapadao-do-lageado', name: 'Chapadão do Lageado' },
    { slug: 'dona-emma', name: 'Dona Emma' },
    { slug: 'ibirama', name: 'Ibirama' },
    { slug: 'imbuia', name: 'Imbuia' },
    { slug: 'ituporanga', name: 'Ituporanga' },
    { slug: 'jose-boiteux', name: 'José Boiteux' },
    { slug: 'laurentino', name: 'Laurentino' },
    { slug: 'lontras', name: 'Lontras' },
    { slug: 'mirim-doce', name: 'Mirim Doce' },
    { slug: 'petrolandia', name: 'Petrolândia' },
    { slug: 'pouso-redondo', name: 'Pouso Redondo' },
    { slug: 'presidente-getulio', name: 'Presidente Getúlio' },
    { slug: 'presidente-nereu', name: 'Presidente Nereu' },
    { slug: 'rio-do-campo', name: 'Rio do Campo' },
    { slug: 'rio-do-oeste', name: 'Rio do Oeste' },
    { slug: 'rio-do-sul', name: 'Rio do Sul', isHeadquarters: true },
    { slug: 'salete', name: 'Salete' },
    { slug: 'santa-terezinha', name: 'Santa Terezinha' },
    { slug: 'taio', name: 'Taió' },
    { slug: 'trombudo-central', name: 'Trombudo Central' },
    { slug: 'vidal-ramos', name: 'Vidal Ramos' },
    { slug: 'vitor-meireles', name: 'Vitor Meireles' },
    { slug: 'witmarsum', name: 'Witmarsum' },
];

export function getCityBySlug(slug: string): AmaviCity | undefined {
    return amaviCities.find((city) => city.slug === slug);
}
