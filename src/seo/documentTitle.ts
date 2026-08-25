const BASE = 'T-Code Soluções';

export const defaultDocumentTitle = `${BASE} | Protótipo em produção e software sob medida`;

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
