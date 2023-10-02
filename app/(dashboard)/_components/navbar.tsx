import { NavbarRoutes } from "@/components/navbar-routes"
import {MobileSidebar} from "./mobile-sidebar"



export const Navbar = () => {
    return (
        <div className="p-4 bottom-b h-full flex items-center bg-white shadow-sm" >
            <MobileSidebar/>
            <NavbarRoutes
                
            />
        </div>
    )
}