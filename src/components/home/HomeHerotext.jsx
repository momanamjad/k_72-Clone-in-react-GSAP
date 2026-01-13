import React from "react";
import videoSource from "../../assets/homePageVideo.mp4";
const HomeHerotext = () => {
  return (
    <div className="font-[font1] text-center leading-[8.5vw]  ">
      <div className="text-[8.5vw] leading-[8.5vw] flex justify-center  items-center">THE SPARK </div>
      <div className="text-[8.5vw] leading-[8.5vw] flex items-start justify-center"> WHO  <div><video className="h-[7vw] w-[18-vw]  rounded-full overflow-hidden" src={videoSource} autoPlay muted loop /></div></div>
      <div className="text-[8.5vw] leading-[8.5vw] flex justify-center items-center">GENERATES </div>
      <div className="text-[8.5vw] leading-[8.5vw] flex justify-center items-center"> THERE </div>
      <div className="text-[8.5vw] leading-[8.5vw] flex justify-center items-center ">CREATIVITY </div>
  
    </div>
  );
};

export default HomeHerotext;
