import rawProjetos from './projetos.json';

export interface Projeto {
    id: string;
    name: string;
    type: 'cliente';
    description: string;
    images: string[];
}

export const projetos: Projeto[] = rawProjetos as Projeto[];
