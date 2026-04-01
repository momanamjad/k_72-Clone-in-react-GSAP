import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <div className="w-1/2 group h-full relative overflow-hidden transition-[border-radius] duration-700 ease-in-out hover:rounded-[70px] cursor-pointer">
        <img className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" src={props.image1} alt="" />
        <div className="absolute opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 inset-0 flex items-center justify-center bg-black/20">
          <h2 className="uppercase border-2 rounded-full text-2xl lg:text-4xl px-4 py-2 lg:px-8 lg:py-4 text-white hover:bg-white hover:text-black transition-colors duration-300">
            View Project
          </h2>
        </div>
      </div>
      <div className="w-1/2 group h-full relative overflow-hidden transition-[border-radius] duration-700 ease-in-out hover:rounded-[70px] cursor-pointer">
        <img className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" src={props.image2} alt="" />
        <div className="absolute opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 inset-0 flex items-center justify-center bg-black/20">
          <h2 className="uppercase border-2 rounded-full text-2xl lg:text-4xl px-4 py-2 lg:px-8 lg:py-4 text-white hover:bg-white hover:text-black transition-colors duration-300">
            View Project
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
