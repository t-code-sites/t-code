import { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { projectsSection } from '@/data/landingContent';
import { policyAndPrivacy } from '@/data/policyAndPrivacy';
import { projetos } from '@/data/projetos';
import type { FooterModalId } from '@/data/footer';
import ProjectImageCarousel from '@/pages/components/projects/ProjectImageCarousel';

const titles: Record<FooterModalId, string> = {
    privacy: 'Política de Privacidade',
    projects: projectsSection.title,
};

function FooterModal({ id, onClose }: { id: FooterModalId; onClose: () => void }) {
    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onKey);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', onKey);
        };
    }, [onClose]);

    return (
        <div role="dialog" aria-modal="true" aria-label={titles[id]} className="fixed inset-0 z-[80] overflow-y-auto bg-white text-gray-900">
            <button
                type="button"
                aria-label="Fechar"
                onClick={onClose}
                className="fixed right-4 top-4 z-[81] flex h-11 w-11 items-center justify-center rounded-full text-gray-900 transition hover:bg-gray-100"
            >
                <X className="h-6 w-6" aria-hidden />
            </button>

            <div className="mx-auto w-full max-w-screen-xl px-6 pb-16 pt-20">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{titles[id]}</h2>
                {id === 'projects' && <ProjectsContent />}
                {id === 'privacy' && <PrivacyContent />}
            </div>
        </div>
    );
}

function ProjectsContent() {
    const { socialProduct } = projectsSection;

    return (
        <div className="mt-8">
            <p className="text-lg text-gray-600">{projectsSection.intro}</p>

            <p className="mb-4 mt-10 text-xs font-semibold uppercase tracking-wider text-blue-800">
                {projectsSection.socialProductLabel}
            </p>
            <article className="max-w-3xl rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold">{socialProduct.name}</h3>
                <p className="mt-2 text-gray-600">{socialProduct.description}</p>
                <a
                    href={socialProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-800"
                >
                    Visitar o site
                    <ExternalLink className="h-4 w-4" aria-hidden />
                </a>
            </article>

            <p className="mb-8 mt-14 text-xs font-semibold uppercase tracking-wider text-blue-800">
                {projectsSection.clientProjectsLabel}
            </p>
            <div className="space-y-16">
                {projetos.map((projeto) => (
                    <article key={projeto.id} className="grid grid-cols-1 items-start gap-8 border-t border-gray-200 pt-16 first:border-t-0 first:pt-0 lg:grid-cols-2">
                        <div className="overflow-hidden rounded-2xl border border-gray-200">
                            <ProjectImageCarousel images={projeto.images} projectName={projeto.name} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">{projeto.name}</h3>
                            <p className="mt-4 whitespace-pre-wrap leading-relaxed text-gray-800">{projeto.description.trim()}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

function PrivacyContent() {
    return (
        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {policyAndPrivacy.map((item) => (
                <div key={item.title}>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-gray-800">{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default FooterModal;
