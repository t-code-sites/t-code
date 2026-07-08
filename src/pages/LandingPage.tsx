import LandingHero from '@/pages/components/landing-page/LandingHero';
import AboutSection from '@/pages/components/landing-page/AboutSection';
import ProblemsSection from '@/pages/components/landing-page/ProblemsSection';
import ServicesSection from '@/pages/components/landing-page/ServicesSection';
import HowWeWorkSection from '@/pages/components/landing-page/HowWeWorkSection';
import ProjectsSection from '@/pages/components/landing-page/ProjectsSection';
import DifferentialsSection from '@/pages/components/landing-page/DifferentialsSection';
import ContactSection from '@/pages/components/landing-page/ContactSection';
import AnimatedVisibility from '@/functions/animatedVisibility.tsx';

function LandingPage() {
    return (
        <div className="w-full">
            <LandingHero />

            <AnimatedVisibility animation="animate__fadeInUp duration-1000">
                <AboutSection />
            </AnimatedVisibility>

            <AnimatedVisibility animation="animate__fadeInUp duration-1000">
                <ProblemsSection />
            </AnimatedVisibility>

            <AnimatedVisibility animation="animate__fadeInUp duration-1000">
                <ServicesSection />
            </AnimatedVisibility>

            <AnimatedVisibility animation="animate__fadeInUp duration-1000">
                <HowWeWorkSection />
            </AnimatedVisibility>

            <AnimatedVisibility animation="animate__fadeInUp duration-1000">
                <ProjectsSection />
            </AnimatedVisibility>

            <AnimatedVisibility animation="animate__fadeInUp duration-1000">
                <DifferentialsSection />
            </AnimatedVisibility>

            <AnimatedVisibility animation="animate__fadeInUp duration-1000">
                <ContactSection />
            </AnimatedVisibility>
        </div>
    );
}

export default LandingPage;
