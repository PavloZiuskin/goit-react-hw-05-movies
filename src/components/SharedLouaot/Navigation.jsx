import { Outlet } from "react-router-dom";
import {Suspense} from "react";
import { ContainerHeader,Header,Navigate,StyledNavLink } from "./Nav.styled";

export default function Navigation(){
    return (
        <ContainerHeader>
            <Header>
                <Navigate>
                    <StyledNavLink to='/' >Home</StyledNavLink>
                    <StyledNavLink to='/movies' >Movies</StyledNavLink>
                </Navigate>
            </Header>
            
            <Suspense fallback={<p>Loading ...</p>} >
                <Outlet />
            </Suspense>
        </ContainerHeader>
    )
}