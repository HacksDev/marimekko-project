export const DrawerNavigation = () => {
    return <div className="drawer-side">
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
}