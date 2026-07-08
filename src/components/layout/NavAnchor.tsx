import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface NavAnchorProps {
    hash: string;
    className?: string;
    title?: string;
    children: ReactNode;
    onClick?: () => void;
}

/** Link interno da SPA para seções via hash. */
function NavAnchor({ hash, className, title, children, onClick }: NavAnchorProps) {
    const to = hash.startsWith('#') ? `/${hash}` : `/#${hash}`;

    return (
        <Link to={to} title={title} className={className} onClick={onClick}>
            {children}
        </Link>
    );
}

export default NavAnchor;
