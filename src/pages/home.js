import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { JrpgGradientBox } from "../components/jrpgbox";


const SocmedIcon = ({ link, iconName }) => {
  return <div className="transition duration-100 hover:scale-110 hover:text-orange-400 text-orange-600">
    <a href={link}><Icon icon={iconName} /></a>
  </div>
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


const Home = () => {
  return <div className="flex items-center justify-center">
    <Intro />
  </div>
};

export default Home;
