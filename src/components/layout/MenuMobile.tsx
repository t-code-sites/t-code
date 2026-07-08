import NavAnchor from '@/components/layout/NavAnchor';
import { CgMenu } from 'react-icons/cg';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPeopleFill, BsGearFill, BsFolder2Open, BsChatDotsFill } from 'react-icons/bs';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from '@/components/ui/menubar';
import { mainNavLinks } from '@/data/siteSections';

const navIcons = [AiFillHome, BsFillPeopleFill, BsGearFill, BsFolder2Open, BsChatDotsFill];

interface MenuMobileProps {
    lightNav: boolean;
    overHero: boolean;
}

function MenuMobile(_props: MenuMobileProps) {
    const triggerClass = 'border border-white/20 bg-blue-600/80 text-white';

    const contentClass = 'mt-5 w-screen rounded-none border-none bg-blue-700';
    const itemClass = 'text-white';

    return (
        <Menubar className={`flex h-10 w-10 items-center justify-center p-2 ${triggerClass}`}>
            <MenubarMenu>
                <MenubarTrigger className="h-full w-full bg-transparent p-0 focus:bg-transparent data-[state=open]:bg-transparent">
                    <CgMenu className="h-full w-full" />
                </MenubarTrigger>
                <MenubarContent className={contentClass}>
                    {mainNavLinks.map(({ label, hash }, index) => {
                        const Icon = navIcons[index] ?? AiFillHome;

                        return (
                            <div key={hash}>
                                {index > 0 && <MenubarSeparator className="bg-white/20" />}
                                <NavAnchor hash={hash} title={label} className={itemClass}>
                                    <MenubarItem className={itemClass}>
                                        {label}
                                        <MenubarShortcut className={itemClass}>
                                            <Icon className={itemClass} />
                                        </MenubarShortcut>
                                    </MenubarItem>
                                </NavAnchor>
                            </div>
                        );
                    })}
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
}

export default MenuMobile;
