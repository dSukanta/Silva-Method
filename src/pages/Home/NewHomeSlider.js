import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

import Image1 from '../../img/benefits/Image1.jpg';
import Image2 from '../../img/benefits/Image2.jpg';
import Image3 from '../../img/benefits/Image3.jpg';
import Image4 from '../../img/benefits/Image4.jpg';
import Image5 from '../../img/benefits/Image5.jpg';
import Image6 from '../../img/benefits/Image6.jpg';
import Image7 from '../../img/benefits/Image7.jpg';
import Image8 from '../../img/benefits/Image8.jpg';
import { AuthContext } from "../../context/AllContext";




export default function NewHomeSlider() {
  const { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isPortrait } =useContext(AuthContext);
  return (
    <>
      <Swiper
        style={{width: isTabletOrMobile && '250px', height: isTabletOrMobile && '250px'}}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <img src={Image1} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image6} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image7} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image8} alt=""/>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={Image1} alt=""/>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
