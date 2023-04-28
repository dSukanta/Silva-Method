import React from 'react'
import {RiNumber1,RiNumber2,RiNumber3} from "react-icons/ri";
import {GrFormPrevious,GrFormNext} from "react-icons/gr";
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';

function OrderMembershipSection() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 1279 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isDesktopOrLaptop?3:isTablet?2:1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <GrFormPrevious />,
        nextArrow: <GrFormNext />,
    };
  return (
    <div className='my-5 py-5' style={{backgroundColor: "rgb(155, 55, 242)"}}>
         <h2 className='text-center white-color'>What happens after you order</h2>
         
       
       <div className="container orderslider">
       <Slider {...settings}>
         <div className='d-flex flex-column justify-content-center align-items-center mt-4'>
            <img src="https://storyblok-cdn.mindvalley.com/f/60579/750x420/fedcc3ec31/global_order_steps_01_d.png?trans?quality=40&auto=webp&dpr=1&width=384"
            alt=""
            style={{width:"350px",height:"170px"}}
            />
            <span className='white-color mt-3'>Secure checkout page</span>
            <p style={{fontSize:"1.1rem",color:"black",width:"350px",wordBreak:"break-word"}} className='white-color mt-3'>
             1. Click the purchase button above and you’ll be taken to a secure checkout page.
            </p>

         </div>
         <div className='d-flex flex-column justify-content-center align-items-center mt-4'>
            <img src="https://storyblok-cdn.mindvalley.com/f/60579/750x420/02f61405e5/global_order_steps_02_d.png?trans?quality=40&auto=webp&dpr=1&width=384"
            alt=""
            style={{width:"350px",height:"170px"}}
            />
            <span className='white-color mt-3'>Login To Your Account</span>
            <p style={{fontSize:"1.1rem",color:"black",width:"350px",wordBreak:"break-word"}} className='white-color mt-3'>
             2. Click the purchase button above and you’ll be taken to a secure checkout page.
            </p>

         </div>
         <div className='d-flex flex-column justify-content-center align-items-center mt-4'>
            <img src="https://storyblok-cdn.mindvalley.com/f/60579/750x420/048b0e33da/global_order_steps_03_d.png?trans?quality=40&auto=webp&dpr=1&width=384"
            alt=""
            style={{width:"350px",height:"170px"}}
            />
            <span className='white-color mt-3'>Enjoy your new program</span>
            <p style={{fontSize:"1.1rem",color:"black",width:"350px",wordBreak:"break-word"}} className='white-color mt-3'>
             3. Click the purchase button above and you’ll be taken to a secure checkout page.
            </p>

         </div>
         </Slider>
       </div>
    </div>
  )
}

export default OrderMembershipSection