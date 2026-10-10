import { BookOpen, Globe, Layers, Link2, Rocket, ServerCog } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { services } from '@/data/services';
import { siteSections } from '@/data/siteSections';
import SectionShell from '@/pages/components/landing-page/SectionShell';

const iconById: Record<string, LucideIcon> = {
    'prototipo-producao': Rocket,
    'produtos-digitais': Layers,
    producao: ServerCog,
    integracoes: Link2,
    consultoria: BookOpen,
    site: Globe,
};

function ServicesSection() {
    const section = siteSections.servicos;

    return (
        <SectionShell id={section.id} ariaLabel="Serviços">
            <ul className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-4 px-4 pb-20 pt-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:pb-28 xl:gap-5">
                {services.map((service) => {
                    const Icon = iconById[service.id] ?? Layers;

                    return (
                        <li key={service.id} className="min-w-0">
                            <article id={service.id} className="section-card h-full scroll-mt-28 sm:scroll-mt-32">
                                <span className="section-card-icon">
                                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                                </span>
                                <h2 className="section-card-title line-clamp-2 min-h-[3.25rem]">{service.title}</h2>
                                <p className="text-card-body mt-2 line-clamp-3 min-h-[4.5rem]">{service.description}</p>
                            </article>
                        </li>
                    );
                })}
            </ul>
        </SectionShell>
    );
}

export default ServicesSection;
