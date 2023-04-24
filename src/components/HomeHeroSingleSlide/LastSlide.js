import React, { Component } from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";

export default function LastSlide() {
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
    };
    return (
      <div className="mb-5">
        <Slider {...settings}>
          <div>
            <img src="img/slide-2.webp" style={{width:"100%"}}/>
          </div>
          <div>
           <img src="img/slide-3.webp" style={{width:"100%"}}/>
          </div>
          <div>
            <img src="img/slide-4.webp" style={{width:"100%"}}/>
          </div>
          <div>
           <img src="img/slide-5.webp" style={{width:"100%"}}/>
          </div>
          {/* <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div> */}
        </Slider>
      </div>
    );
  }