import React from 'react'

const ProjectCard = (props) => {
  return (
<>
        <div className="w-1/2 group  h-full transition-all relative hover:rounded-[70px] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={props.image1} alt=""/>
        <div className="absolute opacity-0 ransition-all group-hover:opacity-100 inset-0 flex items-center justify-center bg-black/10">
          <h2 className="uppercase border-2 rounded-full text-4xl px-6 py-3 text-white">
            View The Project
          </h2>
        </div>
      </div>
      <div className="w-1/2 group h-full transition-all relative hover:rounded-[70px] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={props.image2}alt=""/>
        <div className="absolute opacity-0 ransition-all group-hover:opacity-100 inset-0 flex items-center justify-center bg-black/10">
          <h2 className="uppercase border-2 rounded-full text-4xl px-6 py-3 text-white">
            View The Project
          </h2>
        </div>
      </div></>
  )
}

export default ProjectCard