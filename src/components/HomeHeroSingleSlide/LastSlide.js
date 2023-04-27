import React, { Component } from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import SlideImg1 from '../../../src/img/slide-2.webp';
import SlideImg2 from '../../../src/img/slide-3.webp'
import SlideImg3 from '../../../src/img/slide-4.webp'
import SlideImg4 from '../../../src/img/slide-5.webp'
import {GrFormPrevious,GrFormNext} from "react-icons/gr";

export default function InstructorsSlide() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: isDesktopOrLaptop?3:isTablet?2:1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      prevArrow: <GrFormPrevious />,
      nextArrow: <GrFormNext />,
    };
    return (
      <div className="mb-5">
        <Slider {...settings}>
          <div>
            <img src={SlideImg1} style={{width:"100%"}}/>
          </div>
          <div>
           <img src={SlideImg2} style={{width:"100%"}}/>
          </div>
          <div>
            <img src={SlideImg3} style={{width:"100%"}}/>
          </div>
          <div>
           <img src={SlideImg4} style={{width:"100%"}}/>
          </div>
        </Slider>
      </div>
    );
  }