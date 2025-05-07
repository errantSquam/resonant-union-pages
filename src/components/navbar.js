import { pages } from "../utils/pages"
import { Link } from "react-router-dom";
import React from "react";
import { JrpgGradientButton } from "./jrpgbox";

import { useMediaQuery } from "react-responsive";

const NavbarDesktop = () => {
    return <div className="w-full text-white">
        <div className="flex flex-row items-center justify-end mx-16 py-6 gap-4 text-xl font-pixelify">
            {pages.map((page, index) => {
                return <JrpgGradientButton><Link to={page.path}>{page.label}</Link></JrpgGradientButton>
            })}
            <img className="w-12 h-12" src="RU.png"/>
        </div>
    </div>
}

const NavbarMobile = () => {
    return <div className="w-full text-white">
    <div className="flex flex-row items-center justify-center py-4 gap-3 font-pixelify">
        {pages.map((page, index) => {
            return <JrpgGradientButton><Link to={page.path}>{page.label}</Link></JrpgGradientButton>
        })}
        <img className="w-12 h-12" src="RU.png"/>
    </div>
</div>
}

export default function Navbar() {

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    
    return <div>{isMobile ? <NavbarMobile/> : <NavbarDesktop/>}</div>
    
}