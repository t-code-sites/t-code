import type { ReactNode } from 'react';

interface SectionHeaderProps {
    title: string;
    intro?: ReactNode;
    /** Largura do bloco de intro: padrão ampla para evitar quebras isoladas */
    introWidth?: 'default' | 'wide' | 'full';
    dark?: boolean;
    className?: string;
}

const introWidthClass = {
    default: 'max-w-3xl lg:max-w-4xl',
    wide: 'max-w-4xl lg:max-w-5xl',
    full: 'max-w-none',
} as const;

function SectionHeader({ title, intro, introWidth = 'default', dark = false, className = '' }: SectionHeaderProps) {
    return (
        <div className={`mb-10 sm:mb-12 ${introWidthClass[introWidth]} ${className}`}>
            <h2
                className={`text-section-heading ${dark ? 'text-white' : 'text-gray-900'}`}
            >
                {title}
            </h2>
            {intro && (
                <p
                    className={`text-section-intro mt-3 text-base sm:text-lg ${
                        dark ? 'text-slate-300/95' : 'text-gray-600'
                    }`}
                >
                    {intro}
                </p>
            )}
        </div>
    );
}

export default SectionHeader;
