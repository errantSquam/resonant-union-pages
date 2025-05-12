import { useEffect, useRef } from "react";
import { JrpgGradientBoxExpand } from "../components/jrpgbox"

export const AlbumsModal = ({ album, isOpen, onClickCallback }) => {
    let modalHeaderRef = useRef()
    let modalBodyRef = useRef()

    function checkClickOutside(e) {
        if (modalBodyRef.current && modalHeaderRef.current && !modalBodyRef.current.contains(e.target) && !modalHeaderRef.current.contains(e.target)) {
            onClickCallback(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', checkClickOutside)
    }, [])

    return isOpen && <div className="fixed z-20 top-0 left-0 w-full h-full bg-black/75">
        <div className="absolute top-[10%] left-[25%] w-[50%] h-[10%]" ref={modalHeaderRef}>
            <div className="w-full h-full">
                <JrpgGradientBoxExpand>
                    <div className="flex flex-row w-full justify-center items-center text-3xl font-pixelify text-white">{album.title}</div>
                </JrpgGradientBoxExpand>
            </div>
        </div>
        <div className="absolute top-[25%] left-[15%] w-[70%] h-[60%] z-30" ref={modalBodyRef}>
            <div className="w-full h-full">
                <JrpgGradientBoxExpand >
                    <div className="flex flex-row items-start justify-center h-full gap-x-14 mx-8 my-8" ref={modalBodyRef}>
                        <div className="flex flex-col items-center justify-center space-y-4 pb-8">
                            <img src={album.cover} alt="album-cover" className="w-[24rem]" />
                            <iframe src={album.youtubeLink}></iframe>
                        </div>
                        <div className="flex flex-col items-center justify-center space-y-8 text-xl lg:text-2xl font-pixelify text-white">
                            {album.desc?.split('|').map((paragraph, index) => {
                                return <div>
                                    {paragraph}
                                </div>
                            })}
                            {album.link &&
                                <div className="w-full">
                                    <a href={album.link} className="items-start underline decoration-dotted">{album.linkLabel}
                                    </a>
                                </div>
                            }
                        </div>
                    </div>
                </JrpgGradientBoxExpand></div>
        </div>
    </div>
}

