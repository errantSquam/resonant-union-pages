export const HeaderText = ({ text, isLoaded }) => {
    const firstChara = text.charAt(0).toUpperCase()
    const restChara = text.slice(1).toUpperCase()
    return <div className={`font-dmSerif select-none z-10 relative transition duration-[1.6s] ease-out ${isLoaded ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-32'}`}>
        <div className={`text-5xl lg:text-8xl text-orange-500 transition duration-[1.5s] ease-out ${isLoaded ? 'opacity-100 -translate-x-0' : 'opacity-30 -translate-x-32'}`}>
            <span><span className="text-amber-500 text-6xl lg:text-9xl">{firstChara}</span>{restChara}</span>
        </div>
    </div>
}