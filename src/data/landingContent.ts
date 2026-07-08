import type { LucideIcon } from 'lucide-react';
import {
    ArrowRightLeft,
    Ban,
    Cloud,
    Code2,
    GitBranch,
    Handshake,
    Layers,
    Lightbulb,
    Link2,
    MessageCircle,
    Puzzle,
    Repeat,
    Rocket,
    Search,
    TrendingUp,
    Workflow,
} from 'lucide-react';

export interface LandingItem {
    icon: LucideIcon;
    title: string;
    text: string;
}

export interface LandingStep {
    icon: LucideIcon;
    title: string;
    text: string;
}

export const heroSection = {
    eyebrow: 'T-Code Soluções',
    title: 'Transformamos ideias em produtos digitais que geram resultado',
    subtitle:
        'Parceira tecnológica para empresas que precisam criar, evoluir e escalar software sob medida. Da concepção à operação contínua, com foco no que importa para o negócio.',
};

export const aboutSection = {
    id: 'quem-somos',
    title: 'Quem somos',
    subtitle: 'Parceira tecnológica para produtos digitais',
    intro:
        'A T-Code Soluções é especializada em desenvolvimento de software sob medida. Atuamos desde a concepção da ideia até arquitetura, desenvolvimento, infraestrutura, deploy e evolução contínua. Além de projetos para clientes, mantemos o AltoValeVagas, produto social gratuito para a região.',
    servicesLinkLabel: 'Serviços',
    closing:
        'Em cada projeto atuamos em parceria com o cliente, do diagnóstico à operação, para que a solução continue estável, segura e pronta para evoluir junto com o negócio.',
};

export const problemsSection = {
    title: 'Problemas que resolvemos',
    intro: 'Sua operação cresce, mas a tecnologia não acompanha? Identificamos e resolvemos os obstáculos que mais limitam empresas hoje.',
    items: [
        {
            icon: Repeat,
            title: 'Processos manuais e repetitivos',
            text: 'Equipes perdem horas em tarefas que poderiam ser automatizadas. Eliminamos retrabalho e liberamos tempo para o que gera valor.',
        },
        {
            icon: ArrowRightLeft,
            title: 'Sistemas que não conversam',
            text: 'Dados espalhados, informações duplicadas e decisões lentas. Integramos plataformas para que sua operação funcione de forma coordenada.',
        },
        {
            icon: Lightbulb,
            title: 'Ideias que nunca saem do papel',
            text: 'Você sabe o que precisa, mas falta quem transforme a visão em produto real. Conduzimos do diagnóstico à entrega.',
        },
        {
            icon: TrendingUp,
            title: 'Crescimento limitado por tecnologia',
            text: 'O sistema atual não escala, trava novas funcionalidades ou gera instabilidade. Construímos plataformas preparadas para crescer.',
        },
        {
            icon: Ban,
            title: 'Software sem direção',
            text: 'Código feito sem visão de produto vira dívida técnica. Atuamos com arquitetura sólida e evolução contínua.',
        },
    ] satisfies LandingItem[],
};

export const solutionsSection = {
    title: 'Soluções que movem seu negócio',
    intro: 'Cada serviço existe para resolver um problema real. Não vendemos horas de desenvolvimento. Entregamos software que gera resultado.',
};

export const howWeWorkSection = {
    title: 'Como trabalhamos',
    intro: 'Um processo claro, do primeiro contato à evolução contínua. Transparência em cada etapa.',
    steps: [
        {
            icon: Search,
            title: 'Conhecimento do problema',
            text: 'Entendemos seu negócio, seus processos e o que você precisa resolver antes de falar em tecnologia.',
        },
        {
            icon: GitBranch,
            title: 'Planejamento',
            text: 'Definimos escopo, prioridades e arquitetura. Você sabe o que será entregue, quando e por quê.',
        },
        {
            icon: Code2,
            title: 'Desenvolvimento',
            text: 'Construímos com qualidade, testes e boas práticas. Entregas incrementais, com visibilidade do progresso.',
        },
        {
            icon: Rocket,
            title: 'Entrega contínua',
            text: 'Deploy, infraestrutura em nuvem e colocação em produção com previsibilidade e segurança.',
        },
        {
            icon: Workflow,
            title: 'Evolução',
            text: 'Acompanhamos, corrigimos e evoluímos o produto conforme seu negócio cresce.',
        },
    ] satisfies LandingStep[],
};

export const projectsSection = {
    title: 'Produtos e projetos',
    intro: 'Cases de projetos entregues nos últimos anos',
    socialProductLabel: 'T-Code Social',
    clientProjectsLabel: 'Projetos para clientes',
    socialProduct: {
        id: 'altovalevagas',
        name: 'AltoValeVagas',
        url: 'https://www.altovalevagas.com.br',
        description:
            'Sistema simples para ajudar pessoas a escontrarem emprego nas 28 cidades da região do Alto Vale do Itajaí.',
    },
};

export const differentialsSection = {
    title: 'Por que a T-Code',
    intro: 'Não somos apenas fornecedores de código. Somos parceiros que entendem de produto e de negócio.',
    items: [
        {
            icon: Handshake,
            title: 'Parceiro tecnológico',
            text: 'Atuamos junto com sua equipe, do diagnóstico à operação. Não entregamos e desaparecemos.',
        },
        {
            icon: Layers,
            title: 'Visão de produto',
            text: 'Pensamos no que o software precisa resolver, não apenas no que precisa ser codado.',
        },
        {
            icon: TrendingUp,
            title: 'Arquitetura escalável',
            text: 'Construímos base sólida para crescer sem recomeçar.',
        },
        {
            icon: Cloud,
            title: 'Experiência em SaaS',
            text: 'Plataformas multi-usuário, assinaturas e produtos digitais recorrentes.',
        },
        {
            icon: Link2,
            title: 'Integrações complexas',
            text: 'ERPs, APIs de terceiros, documentos fiscais e mensageria. Sistemas que precisam conversar.',
        },
        {
            icon: Cloud,
            title: 'Infraestrutura em nuvem',
            text: 'Deploy, monitoramento e operação contínua com previsibilidade.',
        },
        {
            icon: Puzzle,
            title: 'Código de qualidade',
            text: 'Testes, boas práticas e manutenibilidade. Software que evolui, não que trava.',
        },
    ] satisfies LandingItem[],
};

export const finalCtaSection = {
    text: 'Pronto para criar ou evoluir seu produto digital? Conte o que sua empresa precisa resolver.',
    primaryLabel: 'Vamos conversar sobre seu próximo projeto',
    secondaryLabel: 'Conheça a T-Code',
};

export const problemsWhatsappLink = {
    label: 'Tirar dúvidas no WhatsApp',
    icon: MessageCircle,
};
