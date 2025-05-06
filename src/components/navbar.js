import { pages } from "../utils/pages"
import { Link } from "react-router-dom";


export default function Navbar() {
    return <div className="w-full">
        <div className="flex flex-row items-center justify-end mx-16 my-6 gap-4">
            {pages.map((page, index) => {
                return <div className="text-xl"><Link to={page.path}>{page.label}</Link></div>
            })}
            <img className="w-[20px] h-[20px]" src="RU.png"/>
        </div>
    </div>
}