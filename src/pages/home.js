import React from "react";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { JrpgGradientBox, JrpgGradientButton } from "../components/jrpgbox";
import { useMediaQuery } from "react-responsive";
import { Fade } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import SpinningDisc from "../components/spinningdisc";
import { textArray, reviewsArray, imageArray } from "../const/placeholder";

//TODO: Migrate this to a .json



const SocmedIcon = ({ link, iconName }) => {
  return <div className="transition duration-100 hover:scale-110 hover:text-orange-400 text-orange-600">
    <a href={link}><Icon icon={iconName} /></a>
  </div>
}




const AlbumCarousel = () => {

  return <div className = "flex flex-row mt-4">
    <div className="w-48 h-48 rounded overflow-hidden">
      <Fade
        arrows={false}
        duration={1500}
        infinite={true}>
        {imageArray.map((image) => {
          return <div>
            <img src={`albums/compressed-album-images/${image}`} alt="albums-carousel"/>

          </div>
        })
        }
      </Fade>
    </div>
    {/*
    <div className="w-48 h-48 -mt-[100%] -ml-[70%] bg-black">
      <div>

            <div className = "relative w-full z-30">
              <div className="rounded overflow-hidden w-48 h-48 flex items-center justify-center bg-slate-700">
                <img src='RU.png' className = "w-20 h-20"/>
              </div>
            </div>

          </div>
    </div>*/}
  </div>

}

const IntroBlurb = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })

  return <div className="mt-4"> Resonant Union is a music collective made by VGM fans across the world! <br />
    (We just so happen to also be musicians.) <br />
    <br />
    We joined together to celebrate the legacies of soundtracks we enjoy
    {!isMobile && <br />}
    through a rich variety of arrangements, and our own original works.</div>
}

const IconList = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })

  return <div className={isMobile ? "flex text-3xl space-x-4 justify-center" : "flex text-3xl space-x-4 justify-end"}>
    <div className="text-2xl flex flex-col justify-center items-center"><SocmedIcon link="https://resonantunion.bandcamp.com/" iconName="fa:bandcamp" /></div>
    <SocmedIcon link="https://www.youtube.com/@ResonantUnion" iconName="mdi:youtube" />
    <SocmedIcon link="https://bsky.app/profile/resonantunion.bsky.social" iconName="ri:bluesky-fill" />
    <SocmedIcon link="https://twitter.com/ResonantUnion" iconName="mdi:twitter" />
  </div>
}

const IntroMobile = () => {
  return <div>
    <div className="px-4 text-white items-center justify-center">

      <div>
        <div className="font-dmSerif select-none flex flex-col justify-center items-center text-center">

          <span className="text-xl -mb-1 font-pixelify">We are</span>
            <div className="text-4xl text-orange-500">
              <span><span className="text-amber-500 text-5xl">R</span>ESONANT</span> &nbsp;
              <span><span className="text-amber-500 text-5xl">U</span>NION</span>
            </div>

          {/*<img src = "RU.png" className = "w-20 h-20 animate-bounce mt-6"/>*/}
          {/*<div className = "scale-50 scale-y-[0.2] -my-10 -mx-10 relative">
            <SpinningDisc image = "RU.png"/>
          </div>*/}
        </div>
      </div>

      <div className="flex flex-row items-center space-x-24 mt-4">

        <div className="flex flex-col space-y-4 z-10 mx-2">
          <JrpgGradientBox>
            <div className="flex flex-col items-center text-center font-robotoSlab">
              <IntroBlurb />
              <Icon icon="raphael:arrowdown" className = "mt-2 animate-bounce"/>
            </div>
          </JrpgGradientBox>

          <div className="flex flex-col items-center">
            <div className="font-pixelify text-sm mb-2">Check out our socials!</div>
            <IconList />

          </div>
        </div>

      </div>

    </div>
  </div>;
}

const Intro = () => {

  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  }

  useEffect(() => {
    handleLoad()
  }, [])


  return <div className="flex flex-col items-center">

    <div className="py-4 flex flex-col">

      <div className={`absolute self-center ml-[40%] transition duration-[1.6s] ease-out ${loaded ? 'opacity-100' : 'opacity-20'}`}>
        <img src="./RU_colorless.png" className="h-96 w-96 relative z-0 select-none" alt="RU-Logo-Silhouette" />
      </div>

      <div>
        <div className={`font-dmSerif select-none z-10 relative transition duration-[1.6s] ease-out ${loaded ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-32'}`}>
          <div className="flex flex-row space-x-2 items-center">
            {/*<img src = "pointer.gif" className = "h-6"/>*/}
            <span className="text-3xl font-pixelify">We are</span>

          </div>
          <div className={`text-8xl text-orange-500 transition duration-[1.5s] ease-out ${loaded ? 'opacity-100 -translate-x-0' : 'opacity-30 -translate-x-32'}`}>
            <span><span className="text-amber-500 text-9xl">R</span>ESONANT</span>
            <br />
            <div className="flex flex-row space-x-2 items-center">
              <span><span className="text-amber-500 text-9xl">U</span>NION</span>
              {/*<img src = "pointer_flipped.gif" className = "h-6 mt-6"/>*/}
            </div>

          </div>
        </div>
      </div>

      <br />

      <div className={`flex flex-row items-center space-x-24 relative z-10 transition duration-[2s] ${loaded ? 'opacity-100' : 'opacity-0'}`}>

        <AlbumCarousel />

        <div className="flex flex-col space-y-4 z-10">
          <div className="flex text-right font-robotoSlab">
            <IntroBlurb />

          </div>
          <div className="flex flex-row items-center justify-end space-x-2">
            <div className="font-pixelify text-sm">Visit our socials!</div>
            <img src="./pointer.gif" className="h-6" alt="pointer-gif"/>
            <IconList />
          </div>

        </div>

      </div>

    </div>
  </div>;
}

const FeaturedAlbum = () => {

  const [reviewIndex, setReviewIndex] = useState(0)



  const handleReviewIndex = (direction) => {
    let newReviewIndex = reviewIndex
    if (direction === "L") {
      newReviewIndex -= 1
      if (newReviewIndex < 0) {
        newReviewIndex = reviewsArray.length - 1
      }
    }
    else if (direction === "R") {
      newReviewIndex += 1
      if (newReviewIndex > reviewsArray.length - 1) {
        newReviewIndex = 0
      }
    }

    setReviewIndex(newReviewIndex)


  }


  return <div>

    <div className="flex flex-col justify-center text-center space-y-6 relative z-10 pt-20">
      <div className="flex flex-row justify-center gap-x-10 align-middle">
        <div>
          <div>
            <iframe className="w-96 h-96" title="bandcamp-player"
              src="./https://bandcamp.com/EmbeddedPlayer/album=869133121/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://resonantunion.bandcamp.com/album/zeroranger-arranged-album-green-arrange">ZeroRanger Arranged Album -GREEN ARRANGE- by eebrozgi and Resonant Union</a></iframe>
          </div>
          <div className="font-pixelify text-xs text-center mt-2">ZeroRanger Arranged Album<br />-GREEN ARRANGE-</div>

        </div>
        <div className="flex flex-col items-center text-center gap-y-4">
          <div className="text-4xl font-dmSerif text-amber-500"> ZeroRanger Arranged Album<br />
            <span className="text-emerald-600">-GREEN ARRANGE-</span>
          </div>
          {
            textArray.map((text) => { return <div className="w-[32rem] font-robotoSlab"><JrpgGradientBox>{text}</JrpgGradientBox> </div> })
          }

        </div>

      </div>
      <div className="flex flex-col justify-center items-center text-center space-y-4">
        <div className="font-robotoSlab text-emerald-600"> Reviews for -GREEN ARRANGE- on Bandcamp</div>

        <div className="flex flex-row justify-center text-center items-center space-x-6 w-[80rem] h-24">
          <div className="hover:text-white text-orange-500 text-4xl select-none"><Icon icon="raphael:arrowleft"
            onClick={() => handleReviewIndex("L")} /></div>
          <div className="w-3/4 font-robotoSlab">
            <JrpgGradientBox>
              <div className="flex px-20 text-center h-20 items-center justify-center">
                <i>{reviewsArray[reviewIndex]}</i>
              </div>
            </JrpgGradientBox></div>
          <div className="hover:text-white text-orange-500 text-4xl select-none"><Icon icon="raphael:arrowright"
            onClick={() => handleReviewIndex("R")} /></div>

        </div>

      </div>

      <div className="font-pixelify flex flex-row items-center text-center justify-center select-none">
        
        Can't get enough? View more of our albums &nbsp;<JrpgGradientButton>HERE</JrpgGradientButton>
      </div>
    </div>
  </div>
}

const FeaturedAlbumMobile = () => {

  const [textIndex, setTextIndex] = useState(0)
  const [reviewIndex, setReviewIndex] = useState(0)



  const handleTextIndex = (direction) => {
    let newTextIndex = textIndex
    if (direction === "L") {
      newTextIndex -= 1
      if (newTextIndex < 0) {
        newTextIndex = textArray.length - 1
      }
    }
    else if (direction === "R") {
      newTextIndex += 1
      if (newTextIndex > textArray.length - 1) {
        newTextIndex = 0
      }
    }
    setTextIndex(newTextIndex)
  }


  const handleReviewIndex = (direction) => {
    let newReviewIndex = reviewIndex
    if (direction === "L") {
      newReviewIndex -= 1
      if (newReviewIndex < 0) {
        newReviewIndex = reviewsArray.length - 1
      }
    }
    else if (direction === "R") {
      newReviewIndex += 1
      if (newReviewIndex > reviewsArray.length - 1) {
        newReviewIndex = 0
      }
    }

    setReviewIndex(newReviewIndex)
  }


  return <div className="flex flex-col justify-center items-center text-center z-10 relative space-y-6">
    <div className="text-2xl font-dmSerif text-amber-500"> ZeroRanger Arranged Album<br />
      <span className="text-emerald-600">-GREEN ARRANGE-</span></div>

    <div>
      <iframe className="w-40 h-40" title="bandcamp-player"
        src="./https://bandcamp.com/EmbeddedPlayer/album=869133121/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="https://resonantunion.bandcamp.com/album/zeroranger-arranged-album-green-arrange">ZeroRanger Arranged Album -GREEN ARRANGE- by eebrozgi and Resonant Union</a></iframe>
    </div>
    <div className="font-pixelify text-xs text-center mt-2">ZeroRanger Arranged Album<br />-GREEN ARRANGE-</div>

    <div className="flex flex-col items-center text-center gap-y-4 font-robotoSlab w-3/4">
      <div className="text-sm"><JrpgGradientBox>{textArray[3]}</JrpgGradientBox></div>

    </div>

    <div className="flex flex-col justify-center items-center text-center space-y-4">
      <div className="font-robotoSlab text-emerald-600 text-sm"> Reviews for -GREEN ARRANGE- on Bandcamp</div>

      <div className="flex flex-col justify-center text-center items-center space-y-2">

        <div className="w-3/4 font-robotoSlab">
          <JrpgGradientBox>
            <div className="flex text-center h-40 text-sm items-center justify-center">
              <i>{reviewsArray[reviewIndex]}</i>
            </div>
          </JrpgGradientBox>
        </div>

        <div className="font-pixelify flex flex-row items-center text-center justify-between w-2/3">

          <div onClick={() => handleReviewIndex("L")}><JrpgGradientButton> Prev </JrpgGradientButton></div>
          <div onClick={() => handleReviewIndex("R")}><JrpgGradientButton> Next </JrpgGradientButton></div>
        </div>

      </div>

    </div>

    <div className="font-pixelify flex flex-col items-center text-center justify-center select-none">
      <div> Can't get enough? </div>
      <div className="flex flex-row">
        View more of our albums&nbsp;<u>HERE</u>
      </div>
    </div>
  </div>
}

const HomeMobile = () => {
  return <div className="flex flex-col min-w-full gap-y-4 items-center">
    
    
    <div className = "min-w-full relative">
    <div className="absolute bg-gradient-to-b from-slate-950/0 from-0% via-slate-950/100 via-70% 
      to-slate-950/100 to-90% min-w-full h-full"/>
      <div className = "relative z-20">
      <IntroMobile />
      </div>
    </div>

    <div className = "flex flex-col items-center justify-center text-center relative z-10 bg-slate-950 w-full h-full py-16 -my-16">
      <div className = "scale-50 scale-y-[0.2] -my-16 -mx-10 relative">
        
      
              <SpinningDisc image = "RU.png"/>
      </div>
      {/*<div className = "font-pixelify text-white/50 text-xs">Keep scrolling...</div>*/}
    </div>
    
    <div className="min-w-full z-10 relative">
      <img src="./ga_bg_animation.gif" className="absolute min-w-full h-full" alt="featured-section-bg"/>

      <div className="absolute bg-gradient-to-b from-slate-950/100 from-10% 
      to-black/0 to-20% min-w-full h-full"/>

      <div className="absolute bg-gradient-to-b from-black/0 from-80% 
      to-slate-950/100 to-90% min-w-full h-full"/>

      <div> <FeaturedAlbumMobile /></div>

    </div>
  </div>
}

const HomeDesktop = () => {
  return <div className="flex flex-col min-w-full">



    <div className="min-w-full">

      <div className="absolute bg-gradient-to-b from-slate-950/0 from-0% via-slate-950/100 via-70% 
      to-slate-950/100 to-90% min-w-full h-full"/>
      <Intro />
    </div>

    <div className="min-w-full">
      <img src="./ga_bg_animation.gif" className="absolute min-w-full h-full" alt="featured-section-bg"/>

      <div className="absolute bg-gradient-to-b from-slate-950/100 from-10% 
      to-black/0 to-20% min-w-full h-full"/>

      <div className="absolute bg-gradient-to-b from-black/0 from-80% 
      to-slate-950/100 to-90% min-w-full h-full"/>

      <FeaturedAlbum />
    </div>

    
    <div>
    </div>
  </div>
}

const Home = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 1000px)' })


  return <div className="flex items-center justify-center  text-white">
    {isMobile ? <HomeMobile /> : <HomeDesktop />}
  </div>
};

export default Home;

