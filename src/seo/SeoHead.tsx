import { Helmet } from 'react-helmet-async';
import { getOgImage, getSeoForPath, type SeoConfig } from '@/seo/seoConfig';

interface SeoHeadProps {
    pathname: string;
    schema?: Record<string, unknown> | null;
    seo?: SeoConfig;
}

function SeoHead({ pathname, schema, seo }: SeoHeadProps) {
    const config = seo ?? getSeoForPath(pathname);
    const ogImage = getOgImage();

    return (
        <Helmet>
            <title>{config.title}</title>
            <meta name="description" content={config.description} />
            <link rel="canonical" href={config.canonical} />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:type" content={config.ogType ?? 'website'} />
            <meta property="og:title" content={config.title} />
            <meta property="og:description" content={config.description} />
            <meta property="og:url" content={config.canonical} />
            <meta property="og:site_name" content="T-Code Soluções" />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:secure_url" content={ogImage} />
            <meta property="og:image:alt" content="T-Code Soluções, desenvolvimento de software sob medida" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={config.title} />
            <meta name="twitter:description" content={config.description} />
            <meta name="twitter:image" content={ogImage} />
            {schema ? (
                <script type="application/ld+json">{JSON.stringify(schema)}</script>
            ) : null}
        </Helmet>
    );
}

export default SeoHead;
