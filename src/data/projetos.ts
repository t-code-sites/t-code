export interface Projeto {
    id: number;
    name: string;
    description: string;
    images: string[];
}

export const projetos: Projeto[] = [
 {
    id: 1,
    name: 'Sistema: LogPago',
    images: [
      '/projects/logpago/initial.png',
      '/projects/logpago/dashboard.png',
      '/projects/logpago/negotiations.png',
    ],
    description: `Este projeto foi desenvolvido utilizando Node.js e React no Frontend e Node.js com Express no Backend. 
    
    A escolha do PostgreSQL como banco de dados foi feita pensando na integridade dos dados e nas relações complexas que o sistema precisava gerenciar. 
    
    O Typescript foi utilizado para garantir a tipagem dos dados e evitar erros de execução. 
    
    A containerização com Docker permite que o sistema seja facilmente implantado e escalado conforme a demanda, garantindo alta disponibilidade e performance.

    A integração com a API do LogPago foi feita utilizando o axios para realizar as requisições e garantir a segurança das informações.

    A integração com o sistema de autenticação foi feita utilizando o JWT para garantir a segurança das informações.

    Além de usar uma arquitetura de microsserviços temos outro serviço que se comunica com o Whatsapp para comunicação entre o sistema e o Fornecedor. Temos webhooks do whatsapp para identificar o contato do fornecedor e dele atualizar o status da negociação.
    `,
  },
  {
    id: 2,
    name: 'Sistema: Box Logistics',
    images: [
      '/projects/brbox/login.png',
      '/projects/brbox/initial.png',
      '/projects/brbox/routes.png',
    ],
    description: `Este projeto foi desenvolvido utilizando Laravel com PHP no Backend e Vue.js com Laravue no Frontend, implementando um sistema completo de gestão logística para controle de pessoas, veículos, rotas, pacotes e operações de transporte.

A escolha do PostgreSQL como banco de dados foi feita pensando na integridade dos dados e nas relações complexas entre empresas, centros de distribuição, pessoas (colaboradores, proprietários, motoristas e prestadores de serviço), veículos, rotas e pacotes que o sistema precisava gerenciar.

O Eloquent ORM do Laravel foi utilizado para garantir um acesso seguro aos dados e facilitar o controle de migrações, permitindo versionamento completo do banco de dados.

A arquitetura RESTful API com Controllers e Models proporcionou uma separação clara entre a lógica de negócio, apresentação em Vue.js e acesso a dados, facilitando manutenção e escalabilidade do sistema através de endpoints bem definidos.

A integração com plataformas externas foi implementada via SOAP e APIs HTTP para sincronização de dados de documentos fiscais (CT-e, MDF-e, GNRE), geração automática de rotas conectando com plataformas de e-commerce (como Mercado Livre e Shopee), eliminando processos manuais repetitivos.

O sistema de autenticação baseado em JWT (JSON Web Tokens) garante segurança nas APIs e controle de acesso por níveis de usuário através de roles e permissões.

O sistema oferece funcionalidades avançadas como unificação inteligente de pessoas (com análise de similaridade de nomes por Levenshtein Distance), gestão de contratos, anexos, documentação de veículos com rastreamento de validade, disponibilidade de recursos, relatórios customizáveis e sincronização bidirecional com sistemas externos.

A arquitetura suporta múltiplas empresas e centros de distribuição com permissões granulares, auditoria completa de alterações e controle de fluxos de aprovação para adiantamentos, pagamentos e operações críticas do sistema.`,
  },
  {
    id: 3,
    name: 'Sistema: Solicitação de Adiantamentos',
    images: [
      '/projects/soladiantamento/login.png',
      '/projects/soladiantamento/dashboard.png',
      '/projects/soladiantamento/novasolicitacao.png',
      '/projects/soladiantamento/usuario.png',
    ],
    description: `Este projeto foi desenvolvido utilizando .NET 9.0 com ASP.NET Core MVC no Backend e Razor Views no Frontend, implementando um workflow completo de gestão de solicitações de adiantamento de diárias para técnicos em campo.

A escolha do PostgreSQL como banco de dados foi feita pensando na integridade dos dados e nas relações complexas entre usuários, técnicos, áreas e solicitações que o sistema precisava gerenciar.

O Entity Framework Core foi utilizado como ORM para garantir um acesso seguro aos dados e facilitar o controle de migrações de banco de dados, permitindo versionamento completo do schema.

A arquitetura MVC utilizada proporcionou uma separação clara entre a lógica de negócio, apresentação e acesso a dados, facilitando manutenção e escalabilidade do sistema.

A integração com o sistema ERP Evolutize foi implementada via SOAP para geração automática de títulos a pagar e sincronização de dados de técnicos, eliminando a necessidade de processos manuais.

O sistema de autenticação baseado em Cookie Authentication garante a segurança das informações e controle de acesso por níveis de usuário (criador, aprovador, pagador).

A implementação de notificações por SMTP permite que todos os stakeholders sejam informados automaticamente sobre mudanças no status das solicitações, melhorando a comunicação e rastreabilidade do processo.

O workflow de aprovação multicamadas (criação → aprovação/reprovação → pagamento) garante controle e compliance no processo de adiantamentos.`,
  },
  {
    id: 4,
    name: 'API: Integração de Documentos Fiscais - ZapSign',
    images: [
      '/projects/zapsign/api.png',
    ],
    description: `Este projeto é uma API que faz a ponte entre o Box Logistics e a ZapSign, permitindo que os dois sistemas conversem de forma centralizada.

Ele é responsável por criar e gerenciar documentos que precisam ser assinados digitalmente, cuidando de todo o ciclo de vida desses documentos.

A API também administra as pessoas que vão assinar, mantendo o controle sobre quem foi convidado, quem já assinou e como o processo de assinatura deve ser conduzido.

Além disso, ela trabalha com modelos de documento, oferecendo a possibilidade de gerar novos documentos a partir de padrões já definidos, o que facilita a criação e padronização de contratos ou formulários.

O sistema lida com notificações e eventos de forma automática, recebendo atualizações sobre o que acontece com os documentos e garantindo que as mudanças sejam capturadas corretamente.

Por fim, a API garante que a integração permaneça estável, validando se a plataforma de assinatura está pronta para operar e mantendo tudo organizado em um único ponto de controle.`,
  }
];
