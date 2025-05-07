import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { JrpgGradientBox } from "../components/jrpgbox";
import { useMediaQuery } from "react-responsive";

const SocmedIcon = ({ link, iconName }) => {
  return <div className="transition duration-100 hover:scale-110 hover:text-orange-400 text-orange-600">
    <a href={link}><Icon icon={iconName} /></a>
  </div>
}


const IntroMobile = () => {
  return <div>
  <div className="py-4 px-4 text-white items-center justify-center">

    <div>
      <div className="font-dmSerif select-none justify-center text-center">
        <span className="text-xl -mb-1">We are</span>
        <div className="text-5xl text-orange-500">
          <span><span className="text-amber-500 text-6xl">R</span>ESONANT</span> &nbsp;
          <span><span className="text-amber-500 text-6xl">U</span>NION</span>
        </div>
      </div>
    </div>

    <div className="flex flex-row items-center space-x-24 mt-4">

      <div className="flex flex-col space-y-4 z-10 mx-2">
        <JrpgGradientBox>
        <div className="flex text-center font-robotoSlab">
          <div> Resonant Union is a music collective made by VGM fans across the world! <br />
            (We just so happen to also be musicians.) <br />
            <br />
            We joined together to celebrate the legacies of soundtracks we enjoy
            through a rich variety of arrangements, and our own original works.</div>
        </div>
        </JrpgGradientBox>

        <div className = "flex flex-col items-center">
        <div className = "font-pixelify text-sm mb-2">Check out our socials!</div>

        <div className="flex justify-center text-3xl space-x-4">
          {/*i probably should have mapped this */}
          <SocmedIcon link="https://resonantunion.bandcamp.com/" iconName="fa:bandcamp" />
          <SocmedIcon link="https://www.youtube.com/@ResonantUnion" iconName="mdi:youtube" />
          <SocmedIcon link="https://bsky.app/profile/resonantunion.bsky.social" iconName="ri:bluesky-fill" />
          <SocmedIcon link="https://twitter.com/ResonantUnion" iconName="mdi:twitter" />
        </div>
        </div>
      </div>

    </div>

  </div>
</div>;
}

const Intro = () => {
  return <div>
    <div className="py-4 text-white">

      <div className="absolute ml-[40%] z-0">
        <img src="RU_colorless.png" className="h-96 w-96" />
      </div>

      <div>
        <div className="font-dmSerif select-none z-10">
          <span className="text-3xl">We are</span>
          <div className="text-8xl text-orange-500">
            <span><span className="text-amber-500 text-9xl">R</span>ESONANT</span>
            <br />
            <span><span className="text-amber-500 text-9xl">U</span>NION</span>
          </div>
        </div>
      </div>



      <br />

      <div className="flex flex-row items-center space-x-24">
        <img src="albums/compressed-album-images/Cover.png" className="w-48 h-48" />

        <div className="flex flex-col space-y-4 z-10">
          <div className="flex text-right font-robotoSlab">
            <div> Resonant Union is a music collective made by VGM fans across the world! <br />
              (We just so happen to also be musicians.) <br />
              <br />
              We joined together to celebrate the legacies of soundtracks we enjoy<br />
              through a rich variety of arrangements, and our own original works.</div>
          </div>

          <div className="flex justify-end text-3xl space-x-4">
            {/*i probably should have mapped this */}
            <SocmedIcon link="https://resonantunion.bandcamp.com/" iconName="fa:bandcamp" />
            <SocmedIcon link="https://www.youtube.com/@ResonantUnion" iconName="mdi:youtube" />
            <SocmedIcon link="https://bsky.app/profile/resonantunion.bsky.social" iconName="ri:bluesky-fill" />
            <SocmedIcon link="https://twitter.com/ResonantUnion" iconName="mdi:twitter" />
          </div>
        </div>

      </div>

    </div>
  </div>;
}


const HomeMobile = () => {
  return <div><IntroMobile/></div>
}

const HomeDesktop = () => {
  return <div><Intro/></div>
}

const Home = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })


  return <div className="flex items-center justify-center">
    {isMobile ? <HomeMobile/> : <HomeDesktop/> }
  </div>
};

export default Home;
