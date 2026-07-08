import { differentialsSection } from '@/data/landingContent';
import { siteSections } from '@/data/siteSections';
import SectionHeader from '@/pages/components/landing-page/SectionHeader';
import SectionShell from '@/pages/components/landing-page/SectionShell';

function DifferentialsSection() {
    const section = siteSections.diferenciais;

    return (
        <SectionShell id={section.id} shellClass={section.shell} theme={section.theme} ariaLabel={differentialsSection.title}>
            <div className="mx-auto w-full max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
                <SectionHeader title={differentialsSection.title} intro={differentialsSection.intro} introWidth="wide" />
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2 xl:grid-cols-3">
                    {differentialsSection.items.map(({ icon: Icon, title, text }) => (
                        <li key={title} className="min-w-0">
                            <article className="section-card">
                                <span className="section-card-icon">
                                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                                </span>
                                <h3 className="section-card-title">{title}</h3>
                                <p className="text-card-body-invert mt-2 flex-1">{text}</p>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </SectionShell>
    );
}

export default DifferentialsSection;
