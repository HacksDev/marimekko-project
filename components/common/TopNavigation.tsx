import Link from "next/link";

export const TopNavigation = () => {
    return <div
        className="navbar w-full mb-2 shadow-lg bg-accent justify-center md:justify-start text-neutral-content">

        <Link href="/" passHref={true}>
            <div className="cursor-pointer inline-flex px-2 mx-2">
                <span className="text-lg font-bold">Marimekko</span>
                <span className="text-lg ml-2 px-2 text-neutral bg-neutral-content font-bold">SHARE</span>
            </div>
        </Link>


        <div className="items-stretch hidden md:flex">
            <a className="btn btn-ghost btn-sm rounded-btn">
                Catalog
            </a>
            <a className="btn btn-ghost btn-sm rounded-btn">
                Profile
            </a>
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
