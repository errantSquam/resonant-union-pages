import { pages } from "../utils/pages"
import { Link } from "react-router-dom";

import { JrpgGradientButton } from "./jrpgbox";

export default function Navbar() {
    return <div className="w-full text-white">
        <div className="flex flex-row items-center justify-end mx-16 py-6 gap-4">
            {pages.map((page, index) => {
                return <JrpgGradientButton><Link to={page.path}>{page.label}</Link></JrpgGradientButton>
            })}
            <img className="w-12 h-12" src="RU.png"/>
        </div>
    </div>
}