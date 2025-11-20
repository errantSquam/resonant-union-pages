import { useState } from "react"
import { useEffect } from "react"

export const Reel = () => {
    const [isLoading, setLoading] = useState(true)


    return <div className="w-full py-5 px-20">
        {isLoading && <div className = "text-white font-pixelify">Loading...</div>}
        <div id="85b7cd5d-4055-47e0-8d6e-a4f2ca44be89"><script src="https://sharefol.io/api/player/85b7cd5d-4055-47e0-8d6e-a4f2ca44be89"
             type="text/javascript" id = "reel" onLoad={() => { setLoading(false) }}></script></div>
    </div>
}