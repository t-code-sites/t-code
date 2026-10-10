import { Link } from 'react-router-dom';
import Logo from '@/components/ui/logo';

function Header() {
    return (
        <header className="fixed top-0 z-50 h-20 w-full bg-blue-700 text-white shadow-lg md:h-24">
            <div className="mx-auto flex h-full items-center px-4 md:w-4/5 md:px-0">
                <Link to="/" title="Voltar ao início" draggable={false}>
                    <Logo width={56} height={56} />
                </Link>
            </div>
        </header>
    );
}

export default Header;
