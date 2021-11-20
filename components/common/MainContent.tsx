import {ReactNode} from "react";

export const MainContent = ({children}: { children: ReactNode }) => {
    return <div data-theme="default" className="flex flex-col drawer-content">
        {children}
    </div>
}