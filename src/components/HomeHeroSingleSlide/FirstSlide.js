import React, { useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import {FcPrevious,FcNext} from "react-icons/fc";
import {GrFormPrevious,GrFormNext} from "react-icons/gr";

function CourseSlide() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })

    const [courses, setCourses] = useState([]);

    const getCourses = async () => {
        const myHeaders = new Headers();
        myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
        myHeaders.append("Device", "Android");
        myHeaders.append("Language", "english");

        const formData = new FormData();
        formData.append("start_index", "0");
        formData.append("no_of_records", "100");

        const options = {
            method: 'POST',
            headers: myHeaders,
            body: formData
        }
        const res = await fetch(`https://projectsites.in/silvamethod/api/home`, options)
        const data = await res.json();
        //console.log(data.data.classes);
        setCourses(data.data.course);
    }

    useEffect(() => {
        getCourses();
    }, []);

    //console.log(courses);




    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 300,
        // autoplaySpeed: 2000,
        cssEase: "linear",
        centerMode: true,
        centerPadding: isDesktopOrLaptop?'25%':"0%",
        prevArrow: <GrFormPrevious />,
        nextArrow: <GrFormNext />,
    };
    return (
        <div className='row'>
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

                {courses && courses.map(course =>
                    <div key={course.course_id} className='col-12'>
                        <img src={course.web_image || "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                         style={{ width: isDesktopOrLaptop?"97%":"96.5%",margin:isDesktopOrLaptop?"30px":"0px",borderRadius:"10px", height: isDesktopOrLaptop ? "500px" : isTablet?"320px":"200px" }} />
                    </div>)}
                {/* <div className='col-12'>
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
                </div> */}
            </Slider>
        </div>
    )
}

export default CourseSlide;