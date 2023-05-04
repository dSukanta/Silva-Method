import React, { useEffect, useState } from 'react'
import blogsliderimg1 from "../../images/newimgs/blogsliderimg1.jpg";
import blogsliderimg2 from "../../images/newimgs/blogsliderimg2.jpg"
import blogsliderimg3 from "../../images/newimgs/blogsliderimg.webp";
import BlogSliderCard from './BlogSliderCard';
import Slider from 'react-slick';
import getstarted from "../../images/newimgs/getstarted.jpg"

import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import BlogMainBanner from './BlogMainBanner';
import { useMediaQuery } from 'react-responsive';
import BlogSection from './BlogSection';
import SingleProduct from '../SilvaManifestationProgram/SingleProduct';
import SingleProduct2 from '../SilvaManifestationProgram/SingleProduct2';
import { requestData } from '../../utils/baseUrl';

function BlogHeadings() {
    const [coursesData2,setCoursesData2] = useState([]);

    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 1279 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isDesktopOrLaptop ? 3 : isTablet ? 2 : 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <GrFormPrevious />,
        nextArrow: <GrFormNext />,
    };

    const coursesdata = [
        {
            title: "Silva Mind and Body Healing",
            lectures: 54,
            students: 152,
            price: 49
        },
        {
            title: "Silva Method Manifesting Course",
            lectures: 54,
            students: 152,
            price: 49
        },
        {
            title: "How to Manage Mind and Body Simultaneously",
            lectures: 54,
            students: 152,
            price: 49
        },
        {
            title: "Silva Alpha Sound",
            lectures: 54,
            students: 152,
            price: 49
        }
    ]

    const data = [
        {
            title: "A Realistic Guide to Authentic Self-Love",
            author: "Ram",
            date: "March 22 2023",
            img: blogsliderimg1,
            category: "Soul"
        },
        {
            title: "A Realistic Guide to Authentic Self-Love",
            author: "Sam",
            date: "March 3 2023",
            img: blogsliderimg2,
            category: "Body"
        },
        {
            title: "A Realistic Guide to Authentic Self-Love",
            author: "Jadu",
            date: "March 4 2023",
            img: blogsliderimg3,
            category: "Soul"
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <GrFormPrevious />,
        nextArrow: <GrFormNext />,
    };


    const getLatestCourses = async()=>{
        const res =await requestData("latestCourseList","POST",{
            start_index:0,
            no_of_records:10
        })
        if(res && res.error===false){
            setCoursesData2(res.data);
        }
    }


    useEffect(()=>{
     getLatestCourses();
    },[])



    return (
        <div className='container text-center'>
            <div className="blog-slider">
                <Slider {...settings}>
                    {
                        data.map((val, i) => (
                            <BlogSliderCard data={val} key={i} />
                        ))
                    }
                </Slider>
            </div>

            <BlogMainBanner />


            <img src={"https://silvamethod.com/store/wp-content/uploads/2023/04/Silva-Meditation-The-Secret-to-Achieving-Inner-Peace-and-Personal-Growth-1.webp"}
                style={{ width: isDesktopOrLaptop ? "100%" : "100%", marginTop: "30px", marginBottom: "30px" }} />

            <BlogSection />

            <div className="row mt-5 mb-5 latest-courses-slide">
                <h3 className='mb-3'>Latest Courses</h3>
                <Slider {...settings2}>
                    {
                        coursesData2.map((val, i) => (
                            <SingleProduct2 data={val} key={i + 1} />
                        ))
                    }
                </Slider>
            </div>

        </div>
    )
}

export default BlogHeadings