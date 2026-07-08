import type { ReactNode } from 'react';
import type { SectionTheme } from '@/data/siteSections';

interface SectionShellProps {
    id: string;
    shellClass?: string;
    theme?: SectionTheme;
    ariaLabel?: string;
    children: ReactNode;
}

function SectionShell({ id, shellClass = 'bg-white', theme = 'light', ariaLabel, children }: SectionShellProps) {
    const toneClass = theme === 'light' ? 'section-light' : 'section-invert';

    return (
        <section
            id={id}
            aria-label={ariaLabel}
            className={`scroll-mt-24 w-full sm:scroll-mt-28 ${shellClass} ${toneClass}`}
        >
            {children}
        </section>
    );
}

export default SectionShell;
