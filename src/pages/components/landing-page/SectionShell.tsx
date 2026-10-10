import type { ReactNode } from 'react';

interface SectionShellProps {
    id: string;
    ariaLabel?: string;
    children: ReactNode;
}

function SectionShell({ id, ariaLabel, children }: SectionShellProps) {
    return (
        <section id={id} aria-label={ariaLabel} className="section-light scroll-mt-24 w-full sm:scroll-mt-28">
            {children}
        </section>
    );
}

export default SectionShell;
