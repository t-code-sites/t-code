import { services as servicesCatalog } from '@/data/services';

export type FooterModalId = 'privacy' | 'projects';

export type FooterItem = {
    description: string;
    link?: string;
    modal?: FooterModalId;
};

/** Links do rodapé derivados do catálogo de serviços. */
export const footerServiceLinks: FooterItem[] = servicesCatalog.map((s) => ({
    description: s.title,
    link: `/#${s.id}`,
}));

export const institutional: FooterItem[] = [
    {
        description: 'Política de Privacidade',
        modal: 'privacy',
    },
    {
        description: 'Produtos e projetos',
        modal: 'projects',
    },
];
