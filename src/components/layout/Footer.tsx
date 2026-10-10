import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import { WHATSAPP_URL } from '@/config/site';
import Logo from '@/components/ui/logo';
import FooterModal from '@/components/layout/FooterModal';
import { amaviCities } from '@/data/amaviCities';
import { footerServiceLinks, institutional, type FooterItem, type FooterModalId } from '@/data/footer';
import { siteSections } from '@/data/siteSections';

const social = [
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/tcodesolucoes/',
        icon: BsInstagram,
    },
    {
        label: 'LinkedIn',
        href: 'https://br.linkedin.com/company/t-code-solucoes-tecnologicas',
        icon: FaLinkedinIn,
    },
    {
        label: 'WhatsApp',
        href: WHATSAPP_URL,
        icon: BsWhatsapp,
    },
];

function FooterLink({
    item,
    onOpen,
}: {
    item: FooterItem;
    onOpen: (id: FooterModalId) => void;
}) {
    const className = 'block w-fit p-0 text-left text-sm leading-5 text-gray-700 transition hover:text-blue-800';

    if (item.modal) {
        return (
            <button type="button" className={className} onClick={() => onOpen(item.modal!)}>
                {item.description}
            </button>
        );
    }

    if (item.link?.startsWith('http')) {
        return (
            <a className={className} href={item.link} target="_blank" rel="noopener noreferrer">
                {item.description}
            </a>
        );
    }

    return (
        <Link className={className} to={item.link ?? '/'}>
            {item.description}
        </Link>
    );
}

function Footer() {
    const [modal, setModal] = useState<FooterModalId | null>(null);

    return (
        <footer id={siteSections.contato.id} className="w-full text-gray-900">
            <div className="mx-auto flex w-full max-w-screen-xl flex-col items-start gap-x-16 gap-y-12 px-6 pb-10 pt-14 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:pt-16">
                <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700">
                        <Logo width={36} height={36} />
                    </div>
                    <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-700">
                        Software sob medida.
                    </p>
                </div>

                <div>
                    <h2 className="text-sm font-semibold text-gray-900">Serviços</h2>
                    <ul className="mt-4 space-y-2.5">
                        {footerServiceLinks.map((item) => (
                            <li key={item.link}>
                                <FooterLink item={item} onOpen={setModal} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="text-sm font-semibold text-gray-900">Institucional</h2>
                    <ul className="mt-4 space-y-2.5">
                        {institutional.map((item) => (
                            <li key={item.description}>
                                <FooterLink item={item} onOpen={setModal} />
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="lg:text-right">
                    <h2 className="text-sm font-semibold text-gray-900">Contato</h2>
                    <p className="mt-4 text-sm text-gray-700">Rio do Sul, SC</p>
                    <div className="mt-4 flex items-center gap-2 lg:justify-end">
                        {social.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                title={label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-900/15 text-gray-800 transition hover:border-blue-800 hover:text-blue-800"
                            >
                                <Icon className="h-4 w-4" aria-hidden />
                                <span className="sr-only">{label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <nav className="sr-only" aria-label="Cidades do Alto Vale do Itajaí">
                <ul>
                    {amaviCities.map((city) => (
                        <li key={city.slug}>
                            <Link to={`/regiao/${city.slug}`}>{city.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="border-t border-blue-900/10">
                <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-3 px-6 py-8 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
                    <p>Todos os direitos reservados.</p>
                    <p>&copy; {new Date().getFullYear()} T-Code Soluções Tecnológicas LTDA, 51.946.998/0001-52</p>
                </div>
            </div>
            {modal ? <FooterModal id={modal} onClose={() => setModal(null)} /> : null}
        </footer>
    );
}

export default Footer;
