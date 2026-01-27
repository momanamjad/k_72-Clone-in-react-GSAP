import React from "react";
import videoSource from "../../assets/homePageVideo.mp4";

const HomeHerotext = () => {
  return (
    <div className="font-[font1] text-center">
      <div className="text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8.5vw] leading-tight flex justify-center items-center">
        THE SPARK
      </div>
      <div className="text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8.5vw] leading-tight flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
        WHO
        <div className="flex items-center">
          <video
            className="h-[10vw] w-[22vw] sm:h-[9vw] sm:w-[20vw] md:h-[8vw] md:w-[19vw] lg:h-[7vw] lg:w-[18vw] rounded-full overflow-hidden object-cover"
            src={videoSource}
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>
      <div className="text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8.5vw] leading-tight flex justify-center items-center">
        GENERATES
      </div>
      <div className="text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8.5vw] leading-tight flex justify-center items-center">
        THEIR
      </div>
      <div className="text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[8.5vw] leading-tight flex justify-center items-center">
        CREATIVITY
      </div>
    </div>
  );
};

export default HomeHerotext;
