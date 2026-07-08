const BASE = 'T-Code Soluções';

export const defaultDocumentTitle = `${BASE} | Desenvolvimento de software sob medida e produtos digitais`;

const titles: Record<string, string> = {
    '/': defaultDocumentTitle,
    '/politica-de-privacidade': `Política de privacidade | ${BASE}`,
};

export function getDocumentTitle(pathname: string): string {
    if (titles[pathname]) {
        return titles[pathname]!;
    }
    return defaultDocumentTitle;
}
