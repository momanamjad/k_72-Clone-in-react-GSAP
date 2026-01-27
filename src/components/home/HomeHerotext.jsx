import React from "react";
import videoSource from "../../assets/homePageVideo.mp4";

const HomeHerotext = () => {
  return (
    <div className="font-[font1] text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="text-[15vw] xs:text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw] xl:text-[6.5vw] 2xl:text-[6vw] leading-none font-bold">
        THE SPARK
      </div>
      <div className="text-[15vw] xs:text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw] xl:text-[6.5vw] 2xl:text-[6vw] leading-none font-bold flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6">
        <span>WHO</span>
        <div className="flex items-center my-2 sm:my-0">
          <video
            className="h-[10vw] w-[22vw] sm:h-[9vw] sm:w-[20vw] md:h-[8vw] md:w-[19vw] lg:h-[7vw] lg:w-[18vw] rounded-full overflow-hidden object-cover backdrop-blur-md border-white/30 shadow-2xl"
            src={videoSource}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
      <div className="text-[15vw] xs:text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw] xl:text-[6.5vw] 2xl:text-[6vw] leading-none font-bold">
        GENERATES
      </div>
      <div className="text-[15vw] xs:text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw] xl:text-[6.5vw] 2xl:text-[6vw] leading-none font-bold">
        THEIR
      </div>
      <div className="text-[15vw] xs:text-[13vw] sm:text-[11vw] md:text-[9vw] lg:text-[7.5vw] xl:text-[6.5vw] 2xl:text-[6vw] leading-none font-bold">
        CREATIVITY
      </div>
    </div>
  );
};

export default HomeHerotext;