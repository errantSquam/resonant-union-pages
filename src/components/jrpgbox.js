export const JrpgGradientButton = ({children}) => {


    return <div className="text-xl font-pixelify 
    transition duration-100
    hover:from-blue-500 hover:to-blue-700 hover:scale-110
    bg-gradient-to-b from-blue-700 from-20% to-slate-950 to-90% 
    px-2 py-0.5 border border-2 border-white rounded-md uppercase">
        {children}
        </div>
}


export const JrpgGradientBox = ({children}) => {


    return <div className="
    bg-gradient-to-b from-blue-700/50 from-20% to-slate-950/50 to-90% 
    px-5 py-3 border border-2 border-white rounded-md">
        {children}
        </div>
}