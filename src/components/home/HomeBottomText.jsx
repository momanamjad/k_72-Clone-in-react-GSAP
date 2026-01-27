import React from "react";
import { Link } from "react-router-dom";
const HomeBottomText = () => {
  return (
    <div className="flex font-[font2] justify-center select-none gap-2 xs:gap-3 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 pb-4 xs:pb-5 sm:pb-6 md:pb-8 lg:pb-10 flex-wrap px-2 xs:px-3 sm:px-4">
      <Link
        to="/projects"
        className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight border-2 xs:border-2 sm:border-3 border-white uppercase rounded-full px-2 xs:px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 py-1 xs:py-1.5 sm:pt-3 sm:pb-2 md:pt-4 md:pb-3 lg:pt-4 lg:pb-3 hover:text-[
#D3FD50] hover:border-[
#D3FD50] select-none transition-colors duration-200"
      >
        PROJECTS
      </Link>
      <Link
        to="/agence"
        className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-tight border-2 xs:border-2 sm:border-3 border-white uppercase rounded-full px-2 xs:px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 py-1 xs:py-1.5 sm:pt-3 sm:pb-2 md:pt-4 md:pb-3 lg:pt-4 lg:pb-3 hover:text-[
#D3FD50] hover:border-[
#D3FD50] select-none transition-colors duration-200"
      >
        AGENCE
      </Link>
    </div>
  );
};
export default HomeBottomText;
