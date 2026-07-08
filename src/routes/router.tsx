import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import NotFound from '@/pages/404';
import PolicyAndPrivacy from '@/pages/PolicyAndPrivacy';
import { siteSections } from '@/data/siteSections';

function LegacyRedirect({ hash }: { hash: string }) {
    return <Navigate to={`/${hash}`} replace />;
}

function router() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/politica-de-privacidade" element={<PolicyAndPrivacy />} />
            <Route path="/sobre-a-empresa" element={<LegacyRedirect hash={`#${siteSections.quemSomos.id}`} />} />
            <Route path="/servicos" element={<LegacyRedirect hash={`#${siteSections.servicos.id}`} />} />
            <Route path="/projetos" element={<LegacyRedirect hash={`#${siteSections.projetos.id}`} />} />
            <Route path="/contato" element={<LegacyRedirect hash={`#${siteSections.contato.id}`} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default router;
