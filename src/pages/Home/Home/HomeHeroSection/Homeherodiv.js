import React from 'react'
import { useMediaQuery } from 'react-responsive'

function Homeherodiv() {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1280px)'})
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
  const isMobile = useMediaQuery({minWidth: 320, maxWidth:480  })
  return (
    <div style={{display: 'flex' , flexDirection:isDesktopOrLaptop? 'row':'column-reverse', backgroundColor:'purple',textAlign:'center', justifyContent:'center', alignItems:'center', gap: isDesktopOrLaptop?'1rem':'0',}}>
        <div>
            {isDesktopOrLaptop? <h1 style={{color:'white',}}>Step into our Grateness</h1>: <h3 style={{color:'white'}}>Step into our Grateness</h3>}
            <button className='home-join-btn'>Join Silva Method Now</button>
        </div>
        <div style={{width:'100%'}}>
        <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" width='100%' preload='auto' playsInline='playsinline' autoPlay loop></video>
        </div>
    </div>
  )
}

export default Homeherodiv