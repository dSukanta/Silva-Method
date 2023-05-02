import React from 'react'
import { Link } from 'react-router-dom'
import LiveCardSingle from './LiveCardSingle'
import { useMediaQuery } from 'react-responsive'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Slider from 'react-slick';

function LiveEventsCard() {
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
        slidesToShow: isDesktopOrLaptop ? 4 : isTablet ? 3 : 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: isDesktopOrLaptop ? '0%' : "10%",

    };
    return (
        <div className='container my-5'>
            <div className='d-flex justify-content-between'>
                <h3>Live Events</h3>
                <Link to="/" style={{ color: "blue", textDecoration: "underline", fontWeight: "600" }}>See All</Link>
            </div>

            <div className="row">
                <Slider {...settings}>
                    <div className="col-3">
                        <LiveCardSingle />
                    </div>
                    <div className="col-3">
                        <LiveCardSingle />
                    </div>
                    <div className="col-3">
                        <LiveCardSingle />
                    </div>
                    <div className="col-3">
                        <LiveCardSingle />
                    </div>
                    <div className="col-3">
                        <LiveCardSingle />
                    </div>
                    <div className="col-3">
                        <LiveCardSingle />
                    </div>
                </Slider>
            </div>

        </div>
    )
}

export default LiveEventsCard