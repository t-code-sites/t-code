import { useEffect } from 'react';
import LandingPage from '@/pages/LandingPage';
import SeoHead from '@/seo/SeoHead';
import type { SeoConfig } from '@/seo/seoConfig';

interface SeoLandingPageProps {
    pathname: string;
    seo: SeoConfig;
    schema: Record<string, unknown>;
    scrollToId?: string;
}

function scrollToSection(id: string) {
    requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
}

/** Mesma landing page visível; SEO e schema variam por rota (invisível ao usuário). */
function SeoLandingPage({ pathname, seo, schema, scrollToId }: SeoLandingPageProps) {
    useEffect(() => {
        if (scrollToId) {
            scrollToSection(scrollToId);
        }
    }, [scrollToId]);

    return (
        <>
            <SeoHead pathname={pathname} seo={seo} schema={schema} />
            <LandingPage />
        </>
    );
}

export default SeoLandingPage;
