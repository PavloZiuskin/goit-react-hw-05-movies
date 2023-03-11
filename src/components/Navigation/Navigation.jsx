import { NavLink, Outlet } from "react-router-dom";
import {Suspens} from "react";

export default function Navigation(){
    return (
        <div>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/movies'>Movies</NavLink>
            </nav>
            <div>
                <Suspens fallback={<p>Loading ...</p>} >
                <Outlet />
            </Suspens>
            </div>
            
        </div>
    )
}