import React from "react";
import ProjectCard from "../components/project/ProjectCard";

const Projects = () => {
  const projects=[{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]

  return (
    <div className="p-4">
      <div className="   pt-[45vh]">
        <h2 className="text-[9vw] uppercase">Projects</h2>
      </div>
           {projects.map(function(elem){
     <div className="flex gap-4  w-full mb-4">
            return 
            <ProjectCard image1={elem.image1}  image2={elem.image2}/>
            </div>
           })}
           
    </div>
  );
};

export default Projects;
