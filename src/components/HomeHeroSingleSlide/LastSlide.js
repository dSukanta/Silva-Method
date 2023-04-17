import React, { Component } from "react";
import Slider from "react-slick";

export default function LastSlide() {
 
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="img/slide-2.webp"/>
          </div>
          <div>
           <img src="img/slide-3.webp"/>
          </div>
          <div>
            <img src="img/slide-4.webp"/>
          </div>
          <div>
           <img src="img/slide-5.webp"/>
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