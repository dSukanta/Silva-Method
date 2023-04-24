import React, { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';

function FirstSlide() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    const [slide, setSlide] = useState(0);
    const items = [
        "img/combo-banner.webp",
        "img/slide-2.webp",
        "img/slide-3.webp",
        "img/slide-4.webp",
        "img/slide-5.webp"
    ];
    // const changeSlide = (payload) => {
    //     if (slide == items.length - 1 && payload == +1) {
    //         setSlide(0)
    //     }
    //     else if (slide == 0 && payload == -1) {
    //         setSlide(items.length - 1)
    //     }
    //     else {
    //         setSlide(slide + payload)
    //     }
    // }
    //console.log(slide);

    // const handleSlides=(order)=>{
    //     if(slide==items.length-1 && order=='next'){
    //         src= `${items[0]}`
    //     }else if(slide==0 && order == 'prev'){
    //         src=
    //     }
    // }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: isDesktopOrLaptop?3:isTablet?2:1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        centerMode:true,
    };
    return (
        <div className='row gap-4'>
            {/* <div className='prev-slide'>s
        <img src={slide==0? items[items.length-1]:items[slide-1]} height="100%"/>
        
        </div>
        <div className='first-slide-center'>
            <div>
                <button className='first-slide-prev-btn' onClick={()=>changeSlide(-1)}><AiOutlineLeft/></button>
            </div>
            <div>
                <a href='https://www.google.com'><img src={items[slide]}/></a>
            </div>
            <div>
            <button className='first-slide-next-btn' onClick={()=>changeSlide(+1)}><AiOutlineRight/></button>
            </div>
        </div>
        <div className='next-slide'>
        <img src={slide== items.length-1?items[0]: items[slide+1]} height="100%"/>
        </div> */}
           <Slider {...settings} arrows>
                <div className='col-12'>
                    <img src="img/combo-banner.webp" style={{ width: "100%", height: isDesktopOrLaptop?"400px":"200px" }} />
                </div>
                <div className='col-12'>
                    <img src="img/slide-2.webp" style={{ width: "100%", height: isDesktopOrLaptop?"400px":"200px" }} />
                </div>
                <div className='col-12'>
                    <img src="img/slide-3.webp" style={{ width: "100%", height: isDesktopOrLaptop?"400px":"200px" }} />
                </div>
                <div className='col-12'>
                    <img src="img/slide-4.webp" style={{ width: "100%", height: isDesktopOrLaptop?"400px":"200px" }} />
                </div>
                <div className='col-12'>
                    <img src="img/slide-5.webp" style={{ width: "100%", height: isDesktopOrLaptop?"400px":"200px" }} />
                </div>
            </Slider>
           </div>
    )
}

export default FirstSlide