import Link from "next/link";
import {useRouter} from "next/router";

const buttons: Array<{ text: string; href: string; }> = [
    {text: 'Catalog', href: '/catalog'},
    {text: 'Ads', href: '/board'},
    {text: 'Profile', href: '/profile'},
]


export const TopNavigation = () => {
    const router = useRouter();
    return <div
        className="navbar bg-white w-full mb-2 border-b border-black justify-center md:justify-start text-neutral-content">

        <Link href="/" passHref={true}>
            <div className="cursor-pointer inline-flex px-2 mx-2">
                <span className="text-lg font-light text-base-content">Marimekko</span>
                <span className="text-lg ml-2 px-2 border-solid border-2 border-secondary text-secondary font-bold">SHARE</span>
            </div>
        </Link>


        <div className="items-stretch hidden md:flex">
            {buttons.map((button) => {
                const navClassName = button.href === router.pathname ? 'text-secondary' : '';
                return (
                    <Link key={button.text} href={button.href} passHref={true}>
                        <nav className={`btn btn-ghost btn-sm text-base-content rounded-btn ${navClassName}`}>
                            {button.text}
                        </nav>
                    </Link>
                )
            })}
        </div>
    </div>
}


// DRAWER NAVIGATION
// <div className="flex-none lg:hidden">
//     <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//              className="inline-block w-6 h-6 stroke-current">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"/>
//         </svg>
//     </label>
// </div>
