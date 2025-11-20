import { useState } from "react"
import { useEffect } from "react"

export const Reel = () => {
    const [isLoading, setLoading] = useState(true)


    return <div className="w-full py-5 px-20">
        <div id="85b7cd5d-4055-47e0-8d6e-a4f2ca44be89">
            <script src="https://sharefol.io/api/player/85b7cd5d-4055-47e0-8d6e-a4f2ca44be89"
             async type="text/javascript"
             ></script>
        </div>
    </div>
}