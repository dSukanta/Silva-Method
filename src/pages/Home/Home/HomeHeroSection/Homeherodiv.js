import React from 'react'
import { useMediaQuery } from 'react-responsive'

function Homeherodiv() {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1280px)'})
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
  const isMobile = useMediaQuery({minWidth: 320, maxWidth:480  })
  return (
    <div className='home-hero-divided'>
        <div className='d-flex flex-column text-center justify-content-center'>
            <h1>Step into our Grateness</h1>
            <button className='home-join-btn'>Join Silva Method Now</button>
        </div>
        <div>
        <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" width="100%" height='400px' style={{marginLeft:'20%'}} preload='auto' playsInline='playsinline' autoPlay></video>
        </div>
    </div>
  )
}

export default Homeherodiv