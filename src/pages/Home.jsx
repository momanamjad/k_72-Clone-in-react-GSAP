import React from "react";
import Video from "../components/home/Video";
import HomeHerotext from "../components/home/HomeHerotext";
import HomeBottomText from "../components/home/HomeBottomText";
const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex flex-col">
        <HomeHerotext />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;
