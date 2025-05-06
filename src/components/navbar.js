import { pages } from "../utils/pages"
import { Link } from "react-router-dom";



const JrpgGradientBox = ({children}) => {

    //background cant do transition... gradients are bgs.... L...

    return <div className="text-xl font-pixelify 
    hover:from-blue-500 hover:to-blue-700 
    bg-gradient-to-b from-blue-700 from-20% to-slate-950 to-90% 
    px-2 py-0.5 border border-2 border-white rounded-md uppercase">
        {children}
        </div>
}

export default function Navbar() {
    return <div className="w-full text-white">
        <div className="flex flex-row items-center justify-end mx-16 py-6 gap-4">
            {pages.map((page, index) => {
                return <JrpgGradientBox><Link to={page.path}>{page.label}</Link></JrpgGradientBox>
            })}
            <img className="w-12 h-12" src="RU.png"/>
        </div>
    </div>
}