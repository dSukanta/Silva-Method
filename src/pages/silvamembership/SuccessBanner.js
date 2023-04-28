import React from 'react'
import { useMediaQuery } from 'react-responsive'

function SuccessBanner() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })


    const handleScroll = ()=>{
        document.querySelector(".pricingplan").scrollIntoView({
            behavior:"smooth"
        })
    }
    return (
        <div className='container' style={{marginBottom:"120px"}}>
            <div className='row justify-content-center align-items-center my-5 gap-4'>
                {
                    isDesktopOrLaptop && (
                        <div className="col-4">
                            <img src="https://storyblok-cdn.mindvalley.com/f/60579/1010x1604/3ada6c5e24/mvcom_hp_stories_left.jpg?trans?quality=40&auto=webp&dpr=1&width=544" alt="" />
                        </div>
                    )
                }
                {
                    (isTablet||isMobile) && (
                        <div className="col-12">
                            <img src="https://storyblok-cdn.mindvalley.com/f/60579/1125x694/c1804e2775/mvcom_hp_stories_mobile.jpg?trans?quality=40&auto=webp&dpr=1&width=auto" alt="" />
                        </div>
                    )
                }
                <div className="col-sm-12 col-lg-2">
                    <h1 style={{ color: "#6f25af" }}>19,064</h1>
                    <h2>Case studies of success</h2>
                    <p>Mindvalley has some of the highest success rates in the world at transforming our learners. Browse case studies and stories of success on stories.mindvalley.com.</p>
                    <button className='primary_btn3' onClick={handleScroll}>
                        Become A Member Now
                    </button>
                </div>
                {
                    isDesktopOrLaptop && (
                        <div className="col-4">
                            <img src="https://storyblok-cdn.mindvalley.com/f/60579/1192x1712/1c753e40c5/mvcom_hp_stories_right.jpg?trans?quality=40&auto=webp&dpr=1&width=544" alt="" />
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default SuccessBanner