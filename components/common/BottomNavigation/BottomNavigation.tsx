import Home from './icons/home.svg';
import Search from './icons/search.svg';
import Profile from './icons/profile.svg';
import Add from './icons/add.svg';
import Link from "next/link";
import {useRouter} from "next/router";

const buttons: Array<{ text: string, href: string, icon: any, active: boolean }> = [
    {
        text: 'Home',
        href: '/',
        icon: Home,
        active: false
    },
    {
        text: 'Catalog',
        href: '/catalog',
        icon: Search,
        active: false
    },
    // {
    //     text: 'Subscriptions',
    //     href: '/subscriptions',
    //     icon: Home,
    //     active: false
    // },
    {
        text: 'New Ad',
        href: '/addNewAd',
        icon: Add,
        active: false
    },
    {
        text: 'Profile',
        href: '/profile',
        icon: Profile,
        active: false
    },
]

export const BottomNavigation = () => {
    const history = useRouter();
    return <section id="bottom-navigation"
                    className="block bg-primary text-neutral-content md:hidden sm:block  fixed inset-x-0 bottom-0 z-10 bg-white shadow">
        <div id="tabs" className="flex justify-between">
            {buttons.map((button) => {
                const iconClassNames = history.pathname === button.href ? 'text-base-content' : '';
                return (
                    <Link key={button.text} passHref={true} href={button.href}>
                        <div
                            className="w-full text-neutral-content justify-center align-middle inline-block text-center pt-2 pb-1">
                            <button.icon width={24} height={24}
                                         className={`cursor-pointer pt-1 ml-auto mr-auto fill-current ${iconClassNames}`}/>
                            <span
                                className={`tab tab-xs tab-home text-neutral-content block text-xs ${iconClassNames}`}>{button.text}</span>
                        </div>
                    </Link>
                )
            })}
        </div>
    </section>;
}