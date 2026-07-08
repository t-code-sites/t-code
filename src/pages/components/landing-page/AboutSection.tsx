import { Link } from 'react-router-dom';
import { aboutSection } from '@/data/landingContent';
import { siteSections } from '@/data/siteSections';
import SectionHeader from '@/pages/components/landing-page/SectionHeader';
import SectionShell from '@/pages/components/landing-page/SectionShell';

function AboutSection() {
    return (
        <SectionShell
            id={siteSections.quemSomos.id}
            shellClass={siteSections.quemSomos.shell}
            theme={siteSections.quemSomos.theme}
            ariaLabel={aboutSection.title}
        >
            <div className="mx-auto w-full max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
                <SectionHeader title={aboutSection.title} intro={aboutSection.subtitle} introWidth="wide" />

                <p className="text-page-block max-w-4xl lg:max-w-5xl">{aboutSection.intro}</p>

                <p className="text-page-block mt-6 max-w-4xl lg:max-w-5xl">
                    Conheça as frentes de atuação em{' '}
                    <Link to={`/#${siteSections.servicos.id}`} className="text-page-link">
                        {aboutSection.servicesLinkLabel}
                    </Link>
                    .
                </p>

                <p className="text-page-block mt-8 max-w-4xl lg:max-w-5xl">{aboutSection.closing}</p>
            </div>
        </SectionShell>
    );
}

export default AboutSection;
