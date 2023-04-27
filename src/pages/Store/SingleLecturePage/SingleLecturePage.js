import React from 'react'
import SingleLectureNavbar from './SingleLectureNavbar'
import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'

function SingleLecturePage() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    const videoSrc = {
        type: "video",
        sources: [
          {
            src: "https://images.unsplash.com/photo-1542681575-352258e0c854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          }
        ]
      };
    return (
        <div className='d-flex justify-content-center align-items-center flex-column text-center'>
            <SingleLectureNavbar />
            <h2 className='mt-5'>The Truth About Meditation</h2>
            <ReactPlayer
                light="https://images.unsplash.com/photo-1542681575-352258e0c854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                width={!isMobile?"50%":"95%"}
                height={!isMobile ?"500px":"200px"}
                url={"https://joy1.videvo.net/videvo_files/video/free/2019-02/large_watermarked/181004_10_LABORATORIES-SCIENCE_12_preview.mp4"}
                controls
            />
        </div>
    )
}

export default SingleLecturePage