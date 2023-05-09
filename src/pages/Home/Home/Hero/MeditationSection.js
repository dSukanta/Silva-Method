import React from 'react'
import MeditationCard from './MeditationCard'
import { useMediaQuery } from 'react-responsive'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Slider from 'react-slick';

function MeditationSection() {

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: <GrFormPrevious />,
        nextArrow: <GrFormNext />,
        slidesToShow: isDesktopOrLaptop?4:isTablet?2:1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: isDesktopOrLaptop ? '0%' : "15%",
    
    };
    return (
        <div className={`${isDesktopOrLaptop?'container':''}`}>
            <div className="row meditateslider">
                <Slider {...settings}>
                    <div className="col-3">
                        <MeditationCard />
                    </div>
                    <div className="col-3">
                        <MeditationCard />
                    </div>
                    <div className="col-3">
                        <MeditationCard />
                    </div>
                    <div className="col-3">
                        <MeditationCard />
                     </div>
                </Slider>
            </div>
        </div>
    )
}

export default MeditationSection