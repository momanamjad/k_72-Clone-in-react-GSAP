import React from 'react'
import { Link } from 'react-router-dom';
const HomeBottomText = () => {
  return <div className='flex font-[font2] justify-center select-none gap-10 pb-10 '> 
     <Link to="/projects" className='text-[6.5vw] leading-[6vw] border-3 border-white uppercase rounded-full px-14 py-1 pt-4 pb-3 hover:text-[#D3FD50] hover:border-[#D3FD50] select-none '>PROJECTS</Link>
     <Link to="/agency" className='text-[6.5vw] leading-[6vw] border-3 border-white uppercase rounded-full px-14 py-1 pt-4 pb-3 hover:text-[#D3FD50]  hover:border-[#D3FD50] select-none'>AGENCY</Link>
  
  </div>
};
export default HomeBottomText 