/**
 * 3 cores sólidas do site original (sem gradiente):
 * - light: branco (seções claras)
 * - slate: slate-900 (seções escuras)
 * - brand: blue-700 (azul institucional do header/footer)
 *
 * Sequência alternada para nunca repetir cor entre vizinhos.
 */
export type SectionTheme = 'light' | 'slate' | 'brand';

export const sectionColors = {
    light: 'bg-white',
    slate: 'bg-slate-900',
    brand: 'bg-blue-700',
} as const;

export const siteSections = {
    inicio: {
        id: 'inicio',
        shell: '',
        theme: 'slate' as SectionTheme,
    },
    quemSomos: {
        id: 'quem-somos',
        shell: sectionColors.light,
        theme: 'light' as SectionTheme,
    },
    problemas: {
        id: 'problemas',
        shell: sectionColors.slate,
        theme: 'slate' as SectionTheme,
    },
    servicos: {
        id: 'servicos',
        shell: sectionColors.brand,
        theme: 'brand' as SectionTheme,
    },
    comoTrabalhamos: {
        id: 'como-trabalhamos',
        shell: sectionColors.light,
        theme: 'light' as SectionTheme,
    },
    projetos: {
        id: 'projetos',
        shell: sectionColors.slate,
        theme: 'slate' as SectionTheme,
    },
    diferenciais: {
        id: 'diferenciais',
        shell: sectionColors.brand,
        theme: 'brand' as SectionTheme,
    },
    contato: {
        id: 'contato',
        shell: sectionColors.light,
        theme: 'light' as SectionTheme,
    },
} as const;

export const mainNavLinks = [
    { label: 'Início', hash: `#${siteSections.inicio.id}` },
    { label: 'Empresa', hash: `#${siteSections.quemSomos.id}` },
    { label: 'Serviços', hash: `#${siteSections.servicos.id}` },
    { label: 'Projetos', hash: `#${siteSections.projetos.id}` },
    { label: 'Contato', hash: `#${siteSections.contato.id}` },
] as const;
