import Logo from '@/components/ui/logo';
import { heroSection } from '@/data/landingContent';

function LandingHero() {
    return (
        <section
            id="inicio"
            className="flex min-h-[70vh] w-full flex-col items-center justify-center px-4 py-16"
        >
            <Logo width={352} height={352} />
            <h1 className="mt-16 text-3xl font-semibold tracking-[0.35em] text-white sm:text-4xl">
                {heroSection.title}
            </h1>
        </section>
    );
}

export default LandingHero;
