import { howWeWorkSection } from '@/data/landingContent';
import { siteSections } from '@/data/siteSections';
import SectionHeader from '@/pages/components/landing-page/SectionHeader';
import SectionShell from '@/pages/components/landing-page/SectionShell';

function HowWeWorkSection() {
    const section = siteSections.comoTrabalhamos;

    return (
        <SectionShell id={section.id} shellClass={section.shell} theme={section.theme} ariaLabel={howWeWorkSection.title}>
            <div className="mx-auto w-full max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
                <SectionHeader title={howWeWorkSection.title} intro={howWeWorkSection.intro} introWidth="wide" />
                <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 2xl:grid-cols-5">
                    {howWeWorkSection.steps.map(({ icon: Icon, title, text }, index) => (
                        <li key={title} className="min-w-0">
                            <article className="section-card min-h-[11rem] sm:min-h-[12rem]">
                                <span className="mb-3 text-xs font-semibold uppercase tracking-wider text-blue-700">
                                    Etapa {index + 1}
                                </span>
                                <span className="section-card-icon">
                                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                                </span>
                                <h3 className="section-card-title">{title}</h3>
                                <p className="text-card-body-invert mt-2 flex-1 sm:text-base">{text}</p>
                            </article>
                        </li>
                    ))}
                </ol>
            </div>
        </SectionShell>
    );
}

export default HowWeWorkSection;
