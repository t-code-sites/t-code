import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Cookies from '@/components/layout/Cookies';
import router from '@/routes/router';

function scrollToHash(hash: string) {
    const id = hash.replace('#', '');
    if (!id) return;

    requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
}

function isLandingPath(pathname: string) {
    return pathname === '/' || pathname.startsWith('/servicos') || pathname.startsWith('/regiao');
}

function ScrollTop() {
    return (
        <button
            type="button"
            aria-label="Voltar ao topo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg ring-2 ring-white transition hover:bg-blue-800"
        >
            <ArrowUp className="h-5 w-5" aria-hidden />
        </button>
    );
}

function Structure() {
    const { pathname, hash } = useLocation();
    const landing = isLandingPath(pathname);

    useEffect(() => {
        if (hash) {
            scrollToHash(hash);
        }
    }, [pathname, hash]);

    return (
        <div className={landing ? 'landing-fade min-h-screen' : undefined}>
            {!landing && <Header />}
            <main className={`h-fit w-full ${landing ? '' : 'bg-white'}`}>{router()}</main>
            <Footer />
            <ScrollTop />
            <Cookies />
        </div>
    );
}

export default Structure;
