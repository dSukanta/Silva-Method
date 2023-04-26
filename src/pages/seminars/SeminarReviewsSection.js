import React from 'react'
import SeminarReviewCard from './SeminarReviewCard'
import Slider from 'react-slick';

function SeminarReviewsSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay:true,
                autoplaySpeed:3000,
              }
            },
            {
              breakpoint: 600,
              settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay:true,
                autoplaySpeed:3000,
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay:true,
                autoplaySpeed:3000,
              }
            }
          ]
    };
  return (
    <div className='container'>
       <h2 className='text-center'>REALIZE YOUR FULL POTENTIAL AND LIVE THE LIFE OF YOUR DESIGN</h2>
       <p className="text-center" style={{fontSize:"1.2rem"}}>The Original Mind-Empowerment Methodology, The Silva Method</p>

       <div className="row mb-5 mt-5">
       <Slider {...settings}>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <SeminarReviewCard />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <SeminarReviewCard />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <SeminarReviewCard />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <SeminarReviewCard />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <SeminarReviewCard />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
            <SeminarReviewCard />
          </div>
          </Slider>
       </div>
    </div>
  )
}

export default SeminarReviewsSection