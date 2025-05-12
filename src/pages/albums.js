import { JrpgGradientBox } from "../components/jrpgbox"
import { albums } from "../const/albumsInfo"
import { AlbumsModal } from "../components/albumsModal"
import { useState, useEffect } from "react";

const AlbumBox = ({ album, onClickCallback }) => {
    return <div className="flex flex-col justify-center items-center space-y-8">
        <div className="w-64 h-64 hover:scale-105 transition duration-100 cursor-pointer" onClick={() => {onClickCallback(album)}}><img src={album.cover} alt={album.title} /></div>
        <JrpgGradientBox><div className="font-robotoSlab text-white">{album.title}</div></JrpgGradientBox>
    </div>
}

const Albums = () => {
    const [loaded, setLoaded] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalAlbum, setModalAlbum] = useState(null);

    const handleLoad = () => {
        setLoaded(true);
    }

    useEffect(() => {
        handleLoad()
    }, [])

    const onAlbumClick = (album) => {
        setModalAlbum(album)
        setIsModalVisible(true)
        console.log(isModalVisible)
    }

    return <div className="w-full">
        <AlbumsModal album={modalAlbum} isOpen={isModalVisible} onClickCallback={setIsModalVisible}/>
        <div className="flex flex-col justify-items items-center space-y-8">
            <div className={`font-dmSerif select-none z-10 relative transition duration-[1.6s] ease-out ${loaded ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-32'}`}>
                <div className={`text-8xl text-orange-500 transition duration-[1.5s] ease-out ${loaded ? 'opacity-100 -translate-x-0' : 'opacity-30 -translate-x-32'}`}>
                    <span><span className="text-amber-500 text-9xl">A</span>LBUMS</span>

                </div>
            </div>
            <div className={`w-fit mx-auto grid grid-cols-3 gap-12 transition duration-[2.0s] ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                {
                    albums.map((album, index) => {
                        return <div key={index}><AlbumBox album={album} onClickCallback={onAlbumClick}/></div>
                    })
                }
            </div>
        </div>
    </div>
}

export default Albums