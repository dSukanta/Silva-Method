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


import React, { useContext, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import {GrFormPrevious,GrFormNext} from "react-icons/gr";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from 'react-responsive'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination,Autoplay } from "swiper";
import { AuthContext } from "../../context/AllContext";

export default function Testimonials() {
  const { isDesktopOrLaptop, isBigScreen, isTabletOrMobile, isPortrait } =useContext(AuthContext);


  const[reviews,setReviews]=useState([]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: isDesktopOrLaptop ? 1 : 1,
    speed: 500,
    prevArrow: <GrFormPrevious/>,
    nextArrow: <GrFormNext />,
    dots:true,
    autoplay:true
  };

      const getreviews = async() =>{
         const myHeaders = new Headers();
         myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
         myHeaders.append("Device", "Android");
         myHeaders.append("Language", "english");
 
         const formData= new FormData();
         formData.append("start_index", "0");
         formData.append("no_of_records", "10");
 
       const options={
          method:'POST',
          headers:myHeaders,
          body: formData
       }
       const res= await fetch(`https://projectsites.in/silvamethod/api/testimonialList`,options)
       const data= await res.json();
       //console.log(data.data.classes);
       setReviews(data.data);
      }

      useEffect(()=>{
         getreviews()
      },[]);

     // console.log(reviews);



  return (
    <div className = {isTabletOrMobile ? "mt-0 mb-0 p-4":"mt-40 mb-40 p-4"}>
      <div className="row justify-content-center">
      <div className="col-12 text-center">
      <h3>What Others Say about Us...</h3>
        <Slider {...settings}>
        
        {reviews && reviews.map((review)=>
            <div key={review.id} className="d-flex flex-column flex-md-row justify-content-center align-items-center text-start border border-1 p-3 text-center">
              <img src={review.image}/>
              <div>
              <div
                dangerouslySetInnerHTML={{__html: review.comment}}
                  />
              <h5>{`${review.name}, ${review.designation}`}</h5>
              </div>
              {/* <h4>{`"${review.comment}"`}</h4> */}
              
            </div>
        )}
        
        </Slider>
      </div>
      </div>
    </div>
  );
}

