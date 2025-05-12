import { useState, useEffect } from "react";
import { HeaderText } from "../components/headerText";

const Contact = () => {
    const [loaded, setLoaded] = useState(false);
    
        const handleLoad = () => {
            setLoaded(true);
        }
    
        useEffect(() => {
            handleLoad()
        }, [])
    
        return <div className="w-full">
            <div className="flex flex-col justify-items items-center space-y-8">
                <HeaderText text={"CONTACT US"} isLoaded={loaded}/>
            </div>
        </div>
}

export default Contact