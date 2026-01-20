import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects' 
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {
  const stateParentRef=useRef(null);
  useGSAP(function(){
    const timeline=gsap.timeline();

    timeline.to(stateParentRef.current,{
      display: 'block',
  })  
     
    timeline.from('.stare',{
      height: 0,
      stagger: {
        amount: -0.25
      },
    })
    timeline.to('.stare',{
      y: '100%',  
       stagger: {
        amount: -0.25
      },
    })
    timeline.to(stateParentRef.current,{
      display: 'none',
  })
})

  return (
<div className='text-white'>
 <div ref={stateParentRef} className=' stare h-screen w-full  top-0 fixed z-99'>
  <div className=' stare h-full  w-full flex '>
  <div className=' stare h-screen w-1/5 bg-black'>  </div>
  <div className=' stare h-screen w-1/5 bg-black'>  </div>
  <div className=' stare h-screen w-1/5 bg-black'>  </div>
  <div className=' stare h-screen w-1/5 bg-black'>  </div>
  <div className=' stare h-screen w-1/5 bg-black'>  </div>
 </div>
 </div>
  <Routes>
   
<Route path="/" element={<Home />} />
<Route path="/agence" element={<Agence />} />
<Route path="/projects" element={<Projects />} />

  </Routes>
</div>
  )
}

export default App