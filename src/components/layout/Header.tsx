import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/components/ui/logo';
import Menu from '@/components/layout/Menu';
import MenuMobile from '@/components/layout/MenuMobile';

function Header() {
    const { pathname } = useLocation();
    const [isMobile, setIsMobile] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const isHome = pathname === '/';
    const overHero = isHome && !isScrolled;
    const lightNav = !isHome;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset >= 80);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 z-50 h-20 w-full transition-colors duration-200 md:h-24 ${
                overHero
                    ? 'bg-transparent text-white shadow-none'
                    : lightNav
                      ? 'bg-blue-700 text-white shadow-lg'
                      : 'bg-blue-700 text-white shadow-lg'
            }`}
        >
            <div className="mx-auto flex h-full items-center justify-between p-4 md:w-4/5 md:p-0">
                <Link to="/#inicio" title="Voltar ao início" draggable={false}>
                    <Logo width={isMobile ? 48 : 64} height={isMobile ? 48 : 64} />
                </Link>
                {isMobile ? <MenuMobile lightNav={lightNav} overHero={overHero} /> : <Menu lightNav={lightNav} overHero={overHero} />}
            </div>
        </header>
    );
}

export default Header;
