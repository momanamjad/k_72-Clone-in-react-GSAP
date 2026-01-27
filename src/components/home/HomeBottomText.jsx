import React from 'react'
import { Link } from 'react-router-dom';
const HomeBottomText = () => {
  return <div className='flex font-[font2] justify-center select-none gap-4 sm:gap-6 md:gap-8 lg:gap-10 pb-6 sm:pb-8 md:pb-10 flex-wrap px-4'> 
     <Link to="/projects" className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight border-3 border-white uppercase rounded-full px-4 sm:px-8 md:px-10 lg:px-14 py-1 pt-3 pb-2 sm:pt-4 sm:pb-3 hover:text-[#D3FD50] hover:border-[#D3FD50] select-none transition-colors duration-200'>PROJECTS</Link>
     <Link to="/agence" className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight border-3 border-white uppercase rounded-full px-4 sm:px-8 md:px-10 lg:px-14 py-1 pt-3 pb-2 sm:pt-4 sm:pb-3 hover:text-[#D3FD50] hover:border-[#D3FD50] select-none transition-colors duration-200'>AGENCE</Link>
  
  </div>
};
export default HomeBottomText 