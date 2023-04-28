import React from 'react'
import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'

function MemberShipFeatures() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-10 col-lg-8">
                    <h2 className='text-center'>
                        Now Included In Silva Method Membership
                    </h2>

                    <p className='text-center mb-4 mt-3' style={{ fontSize: "1.2rem", fontWeight: "600", color: "black" }}>
                        Mindvalley Membership is More than Just 100+ Of Mindvalley’s
                        Top Programs. Becoming a Member Unlocks Advantages You Can’t Get from Enrolling in Just a Single Course.
                    </p>
                </div>
                <div className="col-sm-12 col-md-8 mt-5">
                    <h3 className='text-center'>
                        1. Get Access to Our Private Social Network
                    </h3>
                    <p className='text-center mb-4 mt-3' style={{ fontSize: "1.1rem" }}>
                        Mindvalley Members get their own private Social Network. Connect with fellow members in your city and share wisdom,
                        insights and growth strategies with other extraordinary people committed to leading lives filled with personal growth
                        and development.
                    </p>
                    <p className='text-center mb-4 mt-3' style={{ fontSize: "1.1rem" }}>
                        <span style={{ fontWeight: "600", color: "black" }}>Coming Soon</span>: our human to human matching engine will be able to introduce you to potential friends,
                        partners and even dates with surprising accuracy.
                    </p>
                    <img src="https://storyblok-cdn.mindvalley.com/f/60579/2544x1702/bb5925d2b7/mvcom_hp_new_connections.jpg?trans?quality=40&auto=webp&dpr=1&width=900"
                        alt="" />
                </div>

                <div className="col-sm-12 col-md-8 mt-5">
                    <h3 className='text-center'>
                        2. Get Access to Mindvalley Meditation
                    </h3>
                    <p className='text-center mb-4 mt-3' style={{ fontSize: "1.1rem" }}>
                        Meditation is an essential practice for personal growth. It’s fun and easy (once you know how).
                        Its benefits are vast and scientifically proven.And it can help you achieve your goals faster by
                        guiding you towards higher states of consciousness and peak performance.
                    </p>
                    <p className='text-center mb-4 mt-3' style={{ fontSize: "1.1rem" }}>
                        Mindvalley Meditations makes meditation easier than ever. It allows you to design your own inward journeys by harmonizing ambient meditation audio with guided meditation sessions in any combination of your choice.
                    </p>
                    <img style={{ borderRadius: "10px" }} src="https://storyblok-cdn.mindvalley.com/f/60579/1000x522/a8530806bd/welcome-page_omvana.jpg?trans?quality=40&auto=webp&dpr=1&width=900"
                        alt="" />
                </div>

                <div className="col-sm-12 col-md-8 mt-5">
                    <h3 className='text-center'>
                        3. Grow Your Business or Career with Our New Category of Career and Entrepreneurship Classes
                    </h3>
                    <p className='text-center mb-4 mt-3' style={{ fontSize: "1.1rem" }}>
                        We’re assembling leading edge entrepreneurs to produce truly great programs on how to start a business,
                        grow a business and improve the world.
                    </p>
                    <ReactPlayer
                    width={"100%"}
                    height={isDesktopOrLaptop?"500px":isTablet?"300px":"200px"}
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    />
                </div>
            </div>
        </div>
    )
}

export default MemberShipFeatures