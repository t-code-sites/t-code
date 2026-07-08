import { problemsSection, problemsWhatsappLink } from '@/data/landingContent';
import { siteSections } from '@/data/siteSections';
import SectionHeader from '@/pages/components/landing-page/SectionHeader';
import SectionShell from '@/pages/components/landing-page/SectionShell';
import { WHATSAPP_URL } from '@/config/site';

function ProblemsSection() {
    const WhatsappIcon = problemsWhatsappLink.icon;
    const section = siteSections.problemas;

    return (
        <SectionShell id={section.id} shellClass={section.shell} theme={section.theme} ariaLabel={problemsSection.title}>
            <div className="mx-auto w-full max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
                <SectionHeader title={problemsSection.title} intro={problemsSection.intro} introWidth="wide" />
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
                    {problemsSection.items.map(({ icon: Icon, title, text }) => (
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
                <p className="mt-8 text-center sm:mt-10">
                    <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-300 underline decoration-blue-300/40 underline-offset-4 transition hover:text-blue-200 hover:decoration-blue-200"
                    >
                        <WhatsappIcon className="h-4 w-4" aria-hidden />
                        {problemsWhatsappLink.label}
                    </a>
                </p>
            </div>
        </SectionShell>
    );
}

export default ProblemsSection;
