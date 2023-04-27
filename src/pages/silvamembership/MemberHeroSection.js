import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Slider from 'react-slick';

function MemberHeroSection() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    const imgstyle = { width: "400px", height: "250px", borderRadius: "10px" }
    const marginstyles = {margin:"0 10px 0 10px"}

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: isDesktopOrLaptop?4:isTablet?2:1,
        slidesToScroll: isDesktopOrLaptop?2:1,
        autoplay: true,
        speed: 300,
        autoplaySpeed: 4000,
        cssEase: "linear",
        centerMode: isDesktopOrLaptop?true:isTablet?true:false,
        // centerPadding: isDesktopOrLaptop?'10%':"0%",
        prevArrow: <GrFormPrevious />,
        nextArrow: <GrFormNext />,
    };

    return (
        <>
            <div className="container">
                <div className='row justify-content-center'>
                    <div className="col-sm-12 col-md-8">
                        <p className='text-center' style={{ fontSize: "2.2rem", lineHeight: "3rem", fontWeight: "700", color: "black" }}>
                            The best of Silva Method, for the best you
                        </p>
                        <p className='my-4 text-center' style={{ fontSize: "1.1rem" }}>
                            Silva Method Membership gives you access to the Best of Silva Method.
                        </p>
                        <p className='my-2 text-center' style={{ fontSize: "1.1rem" }}>
                            You’ll save big on your lifelong education.
                            You’ll discover transformational wisdom and ideas not yet covered in mainstream learning.
                            And you’ll connect with the world’s best teachers and community. All on one revolutionary online learning platform.
                        </p>
                    </div>


                </div>
            </div>
            {/* slider section */}
            <div className='memberslider my-4'>
                <Slider {...settings}>
                <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/6435d85154/be_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/db79176562/lvm_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                </div>
                <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/da25f4caa8/sb_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/95dd07e7d7/cpm_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                </div>
                <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/4535264079/sr_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/553248d719/tmos_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                </div>

                <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/5b9f7d0b13/cu_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/56f8c27b63/rtha_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                </div>

                <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/30e35654a5/ut_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/6c6fa394f1/tlb_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                </div>

                <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/1e7f7e9d62/ul_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1280x720/c7e5df60ff/tqpm_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                </div>

                <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/1e7f7e9d62/ul_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/4546cea8f9/npow_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                </div>

                <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/dbb6e8e744/sai_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/99f53924cd/thof_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                </div>

                <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/6435d85154/be_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/115f746109/man_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                </div>

                <div className='d-flex justify-content-center align-items-center flex-column gap-3'>
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/c8305d2893/sums_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                    <img
                        src="https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/0de0b1e34e/meq_questcover_en.jpg?trans?quality=40&auto=webp&dpr=1&width=928"
                        alt=""
                        style={imgstyle}
                    />
                </div>
                </Slider>
            </div>
        </>
    )
}

export default MemberHeroSection