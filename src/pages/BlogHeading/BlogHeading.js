import React from 'react'
import blogsliderimg1 from "../../images/newimgs/blogsliderimg1.jpg";
import blogsliderimg2 from "../../images/newimgs/blogsliderimg2.jpg"
import blogsliderimg3 from "../../images/newimgs/blogsliderimg.webp";
import BlogSliderCard from './BlogSliderCard';
import Slider from 'react-slick';
import getstarted from "../../images/newimgs/getstarted.jpg"
function BlogHeadings() {
    const data = [
        {
            title:"A Realistic Guide to Authentic Self-Love",
            author:"Ram",
            date:"March 22 2023",
            img:blogsliderimg1,
            category:"Soul"
        },
        {
            title:"A Realistic Guide to Authentic Self-Love",
            author:"Sam",
            date:"March 3 2023",
            img:blogsliderimg2,
            category:"Body"
        },
        {
            title:"A Realistic Guide to Authentic Self-Love",
            author:"Jadu",
            date:"March 4 2023",
            img:blogsliderimg3,
            category:"Soul"
        }
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
    };



    return (
        <div className='container text-center'>
             <h2 className='mb-3'>Silva Method Blogs</h2>
                <h4>Step into your greatness and learn from best-selling personal growth trainers.
                    Don’t miss out on the latest articles on mind, body, spirit, and work.
                </h4>
           
                <Slider {...settings}>
                {
                    data.map((val,i)=>(
                        <BlogSliderCard data={val} key={i} />
                    ))
                }
                </Slider>
                <img src={getstarted} style={{width:"50%",marginTop:"30px"}} />
              
        </div>
    )
}

export default BlogHeadings