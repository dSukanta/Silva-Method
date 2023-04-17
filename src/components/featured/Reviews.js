// import React, { Component } from "react";
// import Slider from "react-slick";

// const Reviews=()=>{
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 700,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       centerMode: true,
//     };
//     return (
//       <div className="mt-5">
//         <Slider {...settings}>
//           <div>
//             <img src="https://silvamethod.com/assets/images/silva-method-testimonial-shakti-gawain.webp" width='80%' height='500px'/>
//             <h4>“Our rational mind is like a computer… The intuitive mind, on the other hand, seems to give access to an infinite supply of information…”</h4>
//           </div>
//           <div>
//           <img src="https://silvamethod.com/assets/images/silva-method-testimonial-simontion.webp" width='80%' height='500px'/>
//           <h4>“About the Silva system, I would say it is the most powerful single tool that I have to offer patients.”</h4>
//           </div>
//           <div>
//           <img src="https://silvamethod.com/assets/images/silva-method-testimonial-wayne-dyer.webp" width='80%' height='500px'/>
//           <h4>“Anything with the name of Jose Silva as the author has my vote before I open to page one. Read it with a pen for underlining.”</h4>
//           </div>
//           <div>
//           <img src="https://silvamethod.com/assets/images/silva-method-testimonial-robert-stiller.webp" width='80%' height='500px'/>
//           <h4>“By offering the Silva Method to (our) employees we provide an opportunity to experience for themselves the power of the mind…”</h4>
//           </div>
//         </Slider>
//       </div>
//     );
//   };

//   export default Reviews;


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from 'react-responsive'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function Reviews() {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1280px)'})
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
  const isMobile = useMediaQuery({minWidth: 320, maxWidth:480  })

  return (
    <div className="mt-5">
      <Swiper
        slidesPerView={isDesktopOrLaptop? 3:1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
           <div style={{ textAlign:"center"}}>
            <img src="https://silvamethod.com/assets/images/silva-method-testimonial-shakti-gawain.webp" />
            <h4>“Our rational mind is like a computer… The intuitive mind, on the other hand, seems to give access to an infinite supply of information…”</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ textAlign:"center"}}>
          <img src="https://silvamethod.com/assets/images/silva-method-testimonial-simontion.webp"/>
          <h4>“About the Silva system, I would say it is the most powerful single tool that I have to offer patients.”</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ textAlign:"center"}}>
          <img src="https://silvamethod.com/assets/images/silva-method-testimonial-wayne-dyer.webp"/>
          <h4>“Anything with the name of Jose Silva as the author has my vote before I open to page one. Read it with a pen for underlining.”</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div style={{ textAlign:"center"}}>
          <img src="https://silvamethod.com/assets/images/silva-method-testimonial-robert-stiller.webp"/>
          <h4>“By offering the Silva Method to (our) employees we provide an opportunity to experience for themselves the power of the mind…”</h4>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
}

