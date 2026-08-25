import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { prototypeSection } from '@/data/landingContent';
import { siteSections } from '@/data/siteSections';
import SectionShell from '@/pages/components/landing-page/SectionShell';

function PrototypeSection() {
    const section = siteSections.prototipo;

    return (
        <SectionShell id={section.id} shellClass={section.shell} theme={section.theme} ariaLabel={prototypeSection.title}>
            <div className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-6 sm:py-14 lg:px-10">
                <h2 className="text-section-heading max-w-3xl text-2xl font-bold sm:text-3xl">{prototypeSection.title}</h2>
                <p className="text-page-block mt-4 max-w-3xl">{prototypeSection.text}</p>
                <Link
                    to={`/#${prototypeSection.serviceId}`}
                    className="text-page-link mt-6 inline-flex items-center gap-1.5 text-sm font-medium sm:text-base"
                >
                    {prototypeSection.ctaLabel}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
            </div>
        </SectionShell>
    );
}

export default PrototypeSection;
