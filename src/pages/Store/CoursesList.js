import React from 'react'
import HomeSingleTeam from '../../components/HomeSingleTeam/HomeSingleTeam'
import { useMediaQuery } from 'react-responsive'
import ProductSingle from './ProductsSingle'
import courseimg1 from "../../images/newimgs/courseimg1.webp";
import courseimg2 from "../../images/newimgs/courseimg2.webp"
import courseimg3 from "../../images/newimgs/courseimg3.webp"
import courseimg4 from "../../images/newimgs/courseimg4.webp"
import courseimg5 from "../../images/newimgs/courseimg5.webp"
import courseimg6 from "../../images/newimgs/courseimg6.webp"
import Slider from 'react-slick';
import {GrFormPrevious,GrFormNext} from "react-icons/gr";

function CoursesList() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <GrFormPrevious />,
        nextArrow: <GrFormNext />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 2,
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
        <div className="container text-center">
            <h2>Learn Silva Mind Control from Audio Courses</h2>
            <p>
                These Courses below are created for those who don’t want to take the Whole Silva Life System Program and want to Learn and Practice a
                specific part or exercise of Silva Life System. Those who are enrolling to the Silva Life System
                digital Audio Course Should not take the courses below as these are already included in the Silva Life system Audio Course.
            </p>
            <div className="row mb-5 mt-5">
                <Slider {...settings}>
                    <div className="col-4">
                        <ProductSingle src={courseimg1} title="Learn The Silva Method Manifestation Techniques" />
                    </div>
                    <div className="col-4">
                        <ProductSingle src={courseimg2} title="A Step Forward to Silva Life System – Enroll To Learn" />
                    </div>
                    <div className="col-4">
                        <ProductSingle src={courseimg3} title="Learn How To Activate Your Intuition with Silva Method" />
                    </div>
                    <div className="col-4">
                        <ProductSingle src={courseimg4} title="Learn to Heal and Solve Problems Using Silva Method" />
                    </div>
                    <div className="col-4">
                        <ProductSingle src={courseimg5} title="Learn To Control Your Body and Mind with Silva Method" />
                    </div>
                    <div className="col-4">
                        <ProductSingle src={courseimg6} title="The Complete Silva Method Course(Life System & Intuition System)" />
                    </div>
                </Slider>
            </div>

        </div>
    )
}

export default CoursesList