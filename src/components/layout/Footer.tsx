import { useEffect, useState } from 'react';
import Logo from '@/components/ui/logo';
import List from '@/components/ui/list';
import Contact from '@/components/ui/contact';
import { footerServiceLinks, institutional } from '@/data/footer';

function Footer() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <footer className="h-fit w-full text-white">
            <section className="w-full bg-blue-700 py-8 sm:py-10 lg:py-12">
                <div className="mx-auto w-[92%] max-w-full md:w-4/5">
                    <div className="grid grid-cols-1 gap-12 sm:gap-14 lg:grid-cols-12 lg:items-start lg:gap-x-10 lg:gap-y-0 xl:gap-x-14">
                        <div className="flex min-w-0 flex-col items-center gap-5 text-center sm:items-start sm:gap-6 sm:text-left lg:col-span-4 lg:px-2 xl:px-3">
                            <div className="inline-flex shrink-0">
                                <span className="inline-block" aria-label="T-Code Soluções">
                                    <Logo width={isMobile ? 56 : 96} height={isMobile ? 56 : 96} />
                                </span>
                            </div>
                            <p className="w-full max-w-none text-pretty text-base leading-[1.65] text-white/95 sm:text-[1.0625rem] sm:leading-relaxed">
                                Parceira tecnológica em desenvolvimento de software sob medida. Criamos, evoluímos e
                                escalamos produtos digitais para empresas que querem crescer.
                            </p>
                        </div>
                        <div className="min-w-0 sm:text-left lg:col-span-2 lg:px-2 xl:px-3">
                            <List title="Institucional" itemsList={institutional} />
                        </div>
                        <div className="min-w-0 sm:text-left lg:col-span-3 lg:px-2 xl:px-3">
                            <List title="Serviços" itemsList={footerServiceLinks} />
                        </div>
                        <div className="min-w-0 sm:text-left lg:col-span-3 lg:px-2 xl:px-3">
                            <Contact />
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-blue-900">
                <div className="mx-auto w-[92%] max-w-full px-2 py-4 md:w-4/5 sm:px-0 sm:py-5">
                    <p className="text-balance text-center text-sm leading-relaxed text-white/90">
                        © {new Date().getFullYear()} T-Code Soluções Tecnológicas LTDA, 51.946.998/0001-52. Todos os
                        direitos reservados.
                    </p>
                </div>
            </section>
        </footer>
    );
}

export default Footer;
