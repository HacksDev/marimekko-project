import Home from './icons/home.svg';
import Search from './icons/search.svg';
import Profile from './icons/profile.svg';
import Blocks from './icons/blocks.svg';
import Link from "next/link";
import {useRouter} from "next/router";

const buttons: Array<{ text: string, href: string, icon: any }> = [
    {text: 'Home', href: '/', icon: Home},
    {text: 'Ads', href: '/board', icon: Blocks},
    {text: 'Catalog', href: '/catalog', icon: Search},
    {text: 'Profile', href: '/profile', icon: Profile},
]

export const BottomNavigation = () => {
    const history = useRouter();
    return <section id="bottom-navigation"
                    className="block text-neutral-content border-t border-black md:hidden sm:block fixed inset-x-0 bottom-0 z-10 bg-white">
        <div id="tabs" className="flex justify-between">
            {buttons.map((button) => {
                const iconClassNames = history.pathname === button.href ? 'text-secondary' : 'text-base-content';
                return (
                    <Link key={button.text} passHref={true} href={button.href}>
                        <div
                            className="w-full text-neutral-content justify-center align-middle inline-block text-center pt-2 pb-1">
                            <button.icon width={24} height={24}
                                         className={`cursor-pointer pt-1 ml-auto mr-auto fill-current ${iconClassNames}`}/>
                            <span
                                className={`tab tab-xs tab-home  block text-xs ${iconClassNames}`}>{button.text}</span>
                        </div>
                    </Link>
                )
            })}
        </div>
    </section>;
}