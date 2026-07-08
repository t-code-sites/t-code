import { Link } from 'react-router-dom';
import { MessageCircle, Layers } from 'lucide-react';
import { WHATSAPP_URL } from '@/config/site';
import { heroSection } from '@/data/landingContent';
import { siteSections } from '@/data/siteSections';

function LandingHero() {
    return (
        <section id="inicio" className="relative w-full scroll-mt-24 overflow-hidden sm:scroll-mt-28">
            <div className="absolute inset-0">
                <div
                    className="h-full w-full bg-slate-800 bg-[url('/banners/banner-landing-page-main.webp')] bg-cover bg-right md:bg-center"
                />
                <div className="absolute inset-0 bg-slate-900/78" aria-hidden />
            </div>
            <div className="relative z-10 mx-auto flex w-full max-w-screen-2xl flex-col items-start justify-center gap-6 px-4 py-20 sm:gap-8 sm:px-6 sm:py-24 md:min-h-[28rem] md:py-28 lg:min-h-[32rem] lg:px-10">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-200/90">{heroSection.eyebrow}</p>
                <h1 className="text-balance max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl sm:leading-tight md:text-5xl lg:max-w-5xl lg:text-6xl">
                    {heroSection.title}
                </h1>
                <p className="text-section-intro max-w-3xl text-lg text-slate-200/95 sm:max-w-4xl sm:text-xl lg:max-w-5xl">
                    {heroSection.subtitle}
                </p>
                <div className="flex w-full max-w-3xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:max-w-4xl">
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-lg shadow-slate-950/30 transition hover:bg-slate-100 sm:w-auto"
                    >
                        <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
                        Vamos conversar sobre seu próximo projeto
                    </a>
                    <Link
                        to={`/#${siteSections.servicos.id}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur transition hover:border-white/50 hover:bg-white/10 sm:w-auto"
                    >
                        <Layers className="h-4 w-4" aria-hidden />
                        Conheça nossas soluções
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default LandingHero;
