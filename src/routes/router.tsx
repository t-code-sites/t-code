import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import SeoLandingPage from '@/pages/SeoLandingPage';
import NotFound from '@/pages/404';
import PolicyAndPrivacy from '@/pages/PolicyAndPrivacy';
import SeoHead from '@/seo/SeoHead';
import { getCityBySlug } from '@/data/amaviCities';
import { services } from '@/data/services';
import { siteSections } from '@/data/siteSections';
import {
    buildCitySchema,
    buildHomeSchema,
    buildRegionalIndexSchema,
    buildServiceSchema,
    buildServicesIndexSchema,
} from '@/seo/schema';
import {
    getCitySeo,
    getServiceSeo,
    homeSeo,
    privacySeo,
    regionalIndexSeo,
    servicesIndexSeo,
} from '@/seo/seoConfig';

function LegacyRedirect({ hash }: { hash: string }) {
    return <Navigate to={`/${hash}`} replace />;
}

function HomeRoute() {
    return (
        <>
            <SeoHead pathname="/" seo={homeSeo} schema={buildHomeSchema()} />
            <LandingPage />
        </>
    );
}

function PrivacyRoute() {
    return (
        <>
            <SeoHead pathname="/politica-de-privacidade" seo={privacySeo} />
            <PolicyAndPrivacy />
        </>
    );
}

function ServicesIndexRoute() {
    return (
        <SeoLandingPage
            pathname="/servicos"
            seo={servicesIndexSeo}
            schema={buildServicesIndexSchema()}
            scrollToId={siteSections.servicos.id}
        />
    );
}

function ServiceDetailRoute() {
    const { slug } = useParams<{ slug: string }>();
    const service = services.find((item) => item.id === slug);

    if (!service) {
        return <NotFound />;
    }

    return (
        <SeoLandingPage
            pathname={`/servicos/${service.id}`}
            seo={getServiceSeo(service)}
            schema={buildServiceSchema(service)}
            scrollToId={service.id}
        />
    );
}

function RegionalIndexRoute() {
    return (
        <SeoLandingPage
            pathname="/regiao"
            seo={regionalIndexSeo}
            schema={buildRegionalIndexSchema()}
            scrollToId={siteSections.contato.id}
        />
    );
}

function CityRoute() {
    const { slug } = useParams<{ slug: string }>();
    const city = slug ? getCityBySlug(slug) : undefined;

    if (!city) {
        return <NotFound />;
    }

    return (
        <SeoLandingPage
            pathname={`/regiao/${city.slug}`}
            seo={getCitySeo(city)}
            schema={buildCitySchema(city)}
            scrollToId={siteSections.contato.id}
        />
    );
}

function router() {
    return (
        <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/politica-de-privacidade" element={<PrivacyRoute />} />
            <Route path="/servicos" element={<ServicesIndexRoute />} />
            <Route path="/servicos/:slug" element={<ServiceDetailRoute />} />
            <Route path="/regiao" element={<RegionalIndexRoute />} />
            <Route path="/regiao/:slug" element={<CityRoute />} />
            <Route path="/sobre-a-empresa" element={<Navigate to="/" replace />} />
            <Route path="/projetos" element={<Navigate to="/" replace />} />
            <Route path="/contato" element={<LegacyRedirect hash={`#${siteSections.contato.id}`} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default router;
