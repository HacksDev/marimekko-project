import {ReactNode} from "react";

export const DrawerLayout = ({children}: { children: ReactNode }) => {
    return <div className="shadow bg-base-200 drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
        {children}
    </div>
}