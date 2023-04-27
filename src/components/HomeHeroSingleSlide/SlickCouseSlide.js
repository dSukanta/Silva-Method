import React, { Component } from "react";
import Slider from "react-slick";
import {GrFormPrevious,GrFormNext} from "react-icons/gr";
export default function SlickSlider(props) {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      dots: true,
      infinite: true,
      autoPlay:true,
      prevArrow: <GrFormPrevious />,
      nextArrow: <GrFormNext />,

    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="https://silvamethod.com/assets/images/silva-method-testimonial-simontion.webp"/>
          </div>
          <div>
          <img src="https://silvamethod.com/assets/images/silva-method-testimonial-simontion.webp"/>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
