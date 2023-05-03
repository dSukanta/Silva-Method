import React from 'react'
import { Card, Image } from 'react-bootstrap'
import CardComPopular from './CardComPopular'
import useGlobalContext from '../../../../hooks/useGlobalContext';
import Slider from 'react-slick';
import {GrFormPrevious,GrFormNext} from "react-icons/gr";
import { useMediaQuery } from 'react-responsive';

function PopularNowCourses() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    const { SlickArrowLeft, SlickArrowRight } = useGlobalContext();
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: <GrFormPrevious />,
        nextArrow: <GrFormNext />,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode:true,
        centerPadding: isDesktopOrLaptop?'0%':"10%",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]

    };
    return (
        <div className='container mb-5'>
            <div className="row newslider">
                <Slider {...settings}>
                    <div className="col-4">
                        <CardComPopular />
                    </div>
                    <div className="col-4">
                        <CardComPopular />
                    </div>
                    <div className="col-4">
                        <CardComPopular />
                    </div>
                    <div className="col-4">
                        <CardComPopular />
                    </div>
                    <div className="col-4">
                        <CardComPopular />
                    </div>
                </Slider>
            </div>

        </div>
    )
}

export default PopularNowCourses