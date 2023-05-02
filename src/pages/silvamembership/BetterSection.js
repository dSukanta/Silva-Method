import React from 'react'
import { useMediaQuery } from 'react-responsive'

function BetterSection() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    const btntexts = [
        "Manifesting Dream",
        "Authenticity",
        "Focus",
        "Manifesting Dream",
        "Authenticity",
        "Focus",
        "Manifesting Dream",
        "Authenticity",
        "Focus",
        "Manifesting Dream",
        "Authenticity",
        "Focus",
        "Manifesting Dream",
        "Authenticity",
        "Focus",
        "Manifesting Dream",
        "Authenticity",
        "Focus",
        "Manifesting Dream",
        "Authenticity",
        "Focus",
        "Manifesting Dream",
        "Authenticity",
        "Focus",
        "Manifesting Dream",
        "Authenticity",
        "Focus",
        "Manifesting Dream",
        "Authenticity",
        "Focus",
        "Manifesting Dream",
        "Authenticity",
        "Focus",
        "Manifesting Dream",
        "Authenticity",
        "Focus"
    ]
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <p className='mt-4 text-center' style={{ fontSize: "1.4rem", color: "black", fontWeight: "600" }}>Silva Method Makes You</p>
                <p className='text-center' style={{ fontSize: "2.5rem", lineHeight: "3rem", fontWeight: "700", color: "black" }}>
                    Better and Better Every Day,
                    in Every Way
                </p>
                <div className="col-sm-6 col-md-3">
                    <img style={{ width: isDesktopOrLaptop ? "100%" : "98%", marginBottom: isDesktopOrLaptop ? "0" : "10px" }} src="https://storyblok-cdn.mindvalley.com/f/60579/1600x1200/3cf5d3a177/mvcom_hp_outcome_01.jpg?trans?quality=40&auto=webp&dpr=1&width=300" alt="" />
                </div>
                <div className="col-sm-6 col-md-3">
                    <img style={{ width: isDesktopOrLaptop ? "100%" : "98%", marginBottom: isDesktopOrLaptop ? "0" : "10px" }} src="https://storyblok-cdn.mindvalley.com/f/60579/1600x1200/3cf5d3a177/mvcom_hp_outcome_01.jpg?trans?quality=40&auto=webp&dpr=1&width=300" alt="" />
                </div>
                <div className="col-sm-6 col-md-3">
                    <img style={{ width: isDesktopOrLaptop ? "100%" : "98%", marginBottom: isDesktopOrLaptop ? "0" : "10px" }} src="https://storyblok-cdn.mindvalley.com/f/60579/1600x1200/3cf5d3a177/mvcom_hp_outcome_01.jpg?trans?quality=40&auto=webp&dpr=1&width=300" alt="" />
                </div>
                <div className="col-sm-6 col-md-3">
                    <img style={{ width: isDesktopOrLaptop ? "100%" : "98%", marginBottom: isDesktopOrLaptop ? "0" : "10px" }} src="https://storyblok-cdn.mindvalley.com/f/60579/1600x1200/3cf5d3a177/mvcom_hp_outcome_01.jpg?trans?quality=40&auto=webp&dpr=1&width=300" alt="" />
                </div>
            </div>
            <div className="my-4 py-4">
               <div style={{maxHeight:"450px",overflowY:"scroll"}} className="scrollable d-flex justify-content-center gap-4 align-items-center flex-wrap">
               {
                    btntexts.map((text, i) => (
                        <span className='badge rounded-pill py-2 px-4' style={{ backgroundColor: "#9b37f2",fontSize:"1.1rem" }}>
                            {text}
                        </span>
                    ))
                }
               </div>
            </div>
            {/* <h3 className='text-center text-dark mt-4'>And hundreds more areas of transformation.</h3> */}

        </div>
    )
}

export default BetterSection