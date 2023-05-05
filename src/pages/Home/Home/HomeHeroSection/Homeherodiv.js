import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link } from 'react-router-dom'

function Homeherodiv() {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1280px)'})
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
  const isMobile = useMediaQuery({minWidth: 320, maxWidth:480  })
  return (
    <div style={{display: 'flex' , flexDirection:isDesktopOrLaptop? 'row':'column-reverse', background:'rgb(73,64,224)',backgroundImage: "linear-gradient(#3420e7, #da01fd)", textAlign:'center', justifyContent:'center', alignItems:'center', gap: isDesktopOrLaptop?'1rem':'0', marginBottom:'20px'}}>
        <div>
            {isDesktopOrLaptop? <h1 style={{color:'white',}}>Step into our Grateness</h1>: <h3 style={{color:'white'}}>Step into our Grateness</h3>}
            <Link to="/store/courses" className="primary_btn">Explore Courses</Link>
        </div>
        <div style={{width:isDesktopOrLaptop? '70%':'100%'}}>
        <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" x-webkit-airplay="allow" width='100%' preload='auto' playsInline='playsinline' loop muted autoPlay></video>
        </div>
    </div>
  )
}

export default Homeherodiv