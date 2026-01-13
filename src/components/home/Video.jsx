import React from 'react'
import videoSource from '../../assets/homePageVideo.mp4';
const Video = () => {
  return (
    <div  className='h-full w-full select-none'> 
        <video autoPlay muted  loop className='h-full w-full object-cover' src={videoSource}></video>
    </div>
  )
}

export default Video    