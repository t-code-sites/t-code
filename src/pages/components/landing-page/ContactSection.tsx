import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '@/config/site';
import { contactPage } from '@/data/pageContent';
import { finalCtaSection, aboutSection } from '@/data/landingContent';
import { siteSections } from '@/data/siteSections';
import SectionHeader from '@/pages/components/landing-page/SectionHeader';
import SectionShell from '@/pages/components/landing-page/SectionShell';
import NavAnchor from '@/components/layout/NavAnchor';

function ContactSection() {
    const section = siteSections.contato;

    return (
        <SectionShell id={section.id} shellClass={section.shell} theme={section.theme} ariaLabel="Contato">
            <div className="mx-auto w-full max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
                <SectionHeader title={contactPage.title} intro={contactPage.subtitle} introWidth="wide" />

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
                    <div className="space-y-6">
                        {contactPage.paragraphs.map((paragraph) => (
                            <p key={paragraph.slice(0, 32)} className="text-page-block">
                                {paragraph}
                            </p>
                        ))}
                        <p className="text-page-lead text-base sm:text-lg">{finalCtaSection.text}</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="section-card">
                            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Horário</p>
                            <p className="mt-1.5 text-sm text-gray-700 sm:text-base">
                                Segunda a sexta, 9h às 18h (horário de Brasília)
                            </p>
                            <address className="not-italic mt-5 text-sm text-gray-700 sm:text-base">
                                <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Local</p>
                                <p className="mt-1.5">Rio do Sul, SC, 89160-000</p>
                            </address>
                        </div>

                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-blue-800 sm:w-auto sm:self-start"
                        >
                            <MessageCircle className="h-5 w-5" aria-hidden />
                            {contactPage.ctaLabel}
                        </a>

                        <NavAnchor
                            hash={`#${aboutSection.id}`}
                            className="inline-flex w-fit text-sm font-medium text-page-link"
                        >
                            {finalCtaSection.secondaryLabel}
                        </NavAnchor>
                    </div>
                </div>
            </div>
        </SectionShell>
    );
}

export default ContactSection;
