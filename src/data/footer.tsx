import { WHATSAPP_URL } from '@/config/site';
import { services as servicesCatalog } from '@/data/services';
import { siteSections } from '@/data/siteSections';

/** Links do rodapé derivados do catálogo de serviços. */
export const footerServiceLinks = servicesCatalog.map((s) => ({
    description: s.title,
    link: `/#${s.id}`,
}));

export const institutional = [
    {
        description: 'Política de Privacidade',
        link: '/politica-de-privacidade',
    },
    {
        description: 'Sobre nós',
        link: `/#${siteSections.quemSomos.id}`,
    },
    {
        description: 'Produtos e projetos',
        link: `/#${siteSections.projetos.id}`,
    },
    {
        description: 'Contato',
        link: `/#${siteSections.contato.id}`,
    },
    {
        description: 'WhatsApp',
        link: WHATSAPP_URL,
    },
];
