import { useLocation } from 'react-router-dom';
import NavAnchor from '@/components/layout/NavAnchor';
import { mainNavLinks } from '@/data/siteSections';

interface MenuProps {
    lightNav: boolean;
    overHero: boolean;
}

function Menu({ lightNav, overHero }: MenuProps) {
    const { hash } = useLocation();
    const linkClass =
        lightNav || overHero
            ? 'underline-offset-8 text-white transition hover:underline'
            : 'underline-offset-8 text-white transition hover:underline';

    return (
        <nav>
            <ul className="flex items-center gap-6 text-base font-medium">
                {mainNavLinks.map(({ label, hash: itemHash }) => (
                    <li key={itemHash}>
                        <NavAnchor
                            hash={itemHash}
                            title={label}
                            className={`${linkClass}${hash === itemHash ? ' underline' : ''}`}
                        >
                            {label}
                        </NavAnchor>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;
