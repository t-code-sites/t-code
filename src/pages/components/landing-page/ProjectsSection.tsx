import { WHATSAPP_URL } from '@/config/site';
import { projectsSection } from '@/data/landingContent';
import { projetos } from '@/data/projetos';
import { siteSections } from '@/data/siteSections';
import ProjectImageCarousel from '@/pages/components/projects/ProjectImageCarousel';
import SectionHeader from '@/pages/components/landing-page/SectionHeader';
import SectionShell from '@/pages/components/landing-page/SectionShell';
import { ExternalLink } from 'lucide-react';

function ProjectsSection() {
    const section = siteSections.projetos;
    const { socialProduct } = projectsSection;

    return (
        <SectionShell id={section.id} shellClass={section.shell} theme={section.theme} ariaLabel="Produtos e projetos">
            <div className="mx-auto w-full max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
                <SectionHeader title={projectsSection.title} intro={projectsSection.intro} introWidth="wide" />

                <div className="mb-14 sm:mb-16">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-blue-300">
                        {projectsSection.socialProductLabel}
                    </p>
                    <article id={`projeto-${socialProduct.id}`} className="section-card max-w-3xl">
                        <h3 className="section-card-title text-lg sm:text-xl">{socialProduct.name}</h3>
                        <p className="text-card-body-invert mt-2 sm:text-base">{socialProduct.description}</p>
                        <a
                            href={socialProduct.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-blue-300 transition hover:gap-2.5 hover:text-blue-200"
                        >
                            Visitar o site
                            <ExternalLink className="h-4 w-4" aria-hidden />
                        </a>
                    </article>
                </div>

                <div>
                    <p className="mb-10 text-xs font-semibold uppercase tracking-wider text-blue-300 sm:mb-12">
                        {projectsSection.clientProjectsLabel}
                    </p>
                    <div className="space-y-16 sm:space-y-20">
                        {projetos.map((projeto) => (
                            <article
                                key={projeto.id}
                                id={`projeto-${projeto.id}`}
                                className="section-divider scroll-mt-28 border-t pt-16 first:border-t-0 first:pt-0 sm:scroll-mt-32"
                            >
                                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
                                    <div className="order-1 min-w-0 overflow-hidden rounded-2xl border border-white/10 lg:max-w-none lg:self-start">
                                        <ProjectImageCarousel images={projeto.images} projectName={projeto.name} />
                                    </div>

                                    <div className="order-2 flex min-w-0 flex-col lg:pl-0">
                                        <h3 className="text-page-h2">{projeto.name}</h3>
                                        <div className="text-page-block mt-5 w-full max-w-none whitespace-pre-wrap sm:mt-6">
                                            {projeto.description.trim()}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <p className="text-page-block mt-16 text-center sm:mt-20">
                    Tem uma ideia ou processo que precisa virar produto digital?{' '}
                    <a
                        href={WHATSAPP_URL}
                        className="text-page-link font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Vamos conversar sobre seu próximo projeto
                    </a>
                    .
                </p>
            </div>
        </SectionShell>
    );
}

export default ProjectsSection;
