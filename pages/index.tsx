import type {NextPage} from 'next'

const Home: NextPage = () => {
    return (

        <div className="shadow bg-base-200 drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
            <div className="flex flex-col drawer-content">

                <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">


                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </label>
                    </div>


                    <div className="flex-none px-2 mx-2">
                        <span className="text-lg font-bold">daisyUI</span>
                    </div>


                    <div className="flex-1 px-2 mx-2">
                        <div className="items-stretch hidden lg:flex">
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                Home
                            </a>
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                Portfolio
                            </a>
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                About
                            </a>
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                Contact
                            </a>
                        </div>
                    </div>

                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="flex-none">
                        <button className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 className="inline-block w-6 h-6 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </button>
                    </div>


                </div>


                <div className="w-full shadow stats">
                    <div className="stat">
                        <div className="stat-title">Downloads</div>
                        <div className="stat-value">310M</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc text-success">↗︎ 400 (22%)</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc text-error">↘︎ 90 (14%)</div>
                    </div>
                </div>


                <div className="hero min-h-screen bg-base-200">
                    <div className="text-center hero-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">
                                Hello there
                            </h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>


                <footer className="p-10 footer bg-neutral text-neutral-content">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </footer>

            </div>


            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"/>
                <ul className="p-4 overflow-y-auto menu w-80 bg-base-100">
                    <li>
                        <a className="btn btn-ghost">Home</a>
                    </li>
                    <li>
                        <a className="btn btn-ghost">Portfolio</a>
                    </li>
                    <li>
                        <a className="btn btn-ghost">About</a>
                    </li>
                    <li>
                        <a className="btn btn-ghost">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home
