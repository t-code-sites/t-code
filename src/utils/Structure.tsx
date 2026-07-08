import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Cookies from '@/components/layout/Cookies';
import router from '@/routes/router';
import { getDocumentTitle } from '@/seo/documentTitle';

function scrollToHash(hash: string) {
    const id = hash.replace('#', '');
    if (!id) return;

    requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
}

function Structure() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        document.title = getDocumentTitle(pathname);
    }, [pathname]);

    useEffect(() => {
        if (hash) {
            scrollToHash(hash);
        }
    }, [pathname, hash]);

    return (
        <>
            <Header/>
            <main className="h-fit w-full bg-white">
                {router()}
            </main>
            <Footer/>
            <Cookies/>
        </>
    )
}

export default Structure;
