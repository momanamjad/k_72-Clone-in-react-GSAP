import React from "react";
import Video from "../components/home/Video";
import HomeHerotext from "../components/home/homeHerotext";
import HomeBottomText from "../components/home/homeBottomText";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Fixed background video */}
      <div className="fixed inset-0 w-full h-full">
        <Video />
      </div>
      
      {/* Content overlay */}
      <div className="relative min-h-screen w-full flex flex-col justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10 lg:py-12">
        <HomeHerotext />
        <HomeBottomText />
      </div>
    </div>
  );
};

export default Home;