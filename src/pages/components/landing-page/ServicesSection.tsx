import { BookOpen, Globe, Layers, Link2, Puzzle, ServerCog } from 'lucide-react';
import { solutionsSection } from '@/data/landingContent';
import { services } from '@/data/services';
import { siteSections } from '@/data/siteSections';
import SectionHeader from '@/pages/components/landing-page/SectionHeader';
import SectionShell from '@/pages/components/landing-page/SectionShell';
import type { LucideIcon } from 'lucide-react';

const iconById: Record<string, LucideIcon> = {
    'produtos-digitais': Layers,
    producao: ServerCog,
    customizacao: Puzzle,
    integracoes: Link2,
    consultoria: BookOpen,
    site: Globe,
};

function ServicesSection() {
    const section = siteSections.servicos;

    return (
        <SectionShell id={section.id} shellClass={section.shell} theme={section.theme} ariaLabel="Serviços">
            <div className="mx-auto w-full max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
                <SectionHeader title={solutionsSection.title} intro={solutionsSection.intro} introWidth="wide" />

                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2 xl:grid-cols-3">
                    {services.map((s) => {
                        const Icon = iconById[s.id] ?? Layers;

                        return (
                            <li key={s.id} className="min-w-0">
                                <article
                                    id={s.id}
                                    className="section-card scroll-mt-28 sm:scroll-mt-32"
                                >
                                    <span className="section-card-icon-lg">
                                        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                                    </span>
                                    <h3 className="section-card-title text-lg">{s.title}</h3>
                                    <p className="text-card-body-invert mt-2 sm:text-base">{s.subtitle}</p>
                                    <p className="text-card-body-invert mt-4 flex-1 sm:text-base">{s.description}</p>
                                </article>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </SectionShell>
    );
}

export default ServicesSection;
