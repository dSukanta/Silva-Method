import React, { useContext, useState } from 'react'
import CustomerReviews from './CustomerReviews'
import Slider from 'react-slick';
import { AuthContext } from '../../context/AllContext';
import CustomModal from './CustomModal';
import {GrFormPrevious,GrFormNext} from "react-icons/gr";

function ReviewsContainer() {
    const [modalShow, setModalShow] = useState(false);
    const [data,setData] = useState(null);

    const { isDesktopOrLaptop,
        isTabletOrMobile } = useContext(AuthContext);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        prevArrow: <GrFormPrevious />,
        nextArrow: <GrFormNext />,
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
    const reviews = [
        {
            img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
            heading: "Mindvalley has been an amazing resource for uncovering tools to help with a range of things in my life",
            text: "Mindvalley has been an amazing resource for uncovering tools to help with a range of things in my life. From mental health to business building, I have everything at my fingertips. I've already recommended Mindvalley to people for years (6-7 years now in fact) and will continue to do so. Thank you for all you do.  My advice for anyone considering a Mindvalley is what the heck are you waiting for? Get started! You won't regret it, you can only raise your frequency and open yourself to living on a level you've only dreamed of",
            name: "Gabrielle Kudrnka",
            profession: "Birth Worker",
            address: "St. Louis, United States"
        },
        {
            img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
            heading: "Mindvalley has been an amazing resource for uncovering tools to help with a range of things in my life",
            text: "Mindvalley has been an amazing resource for uncovering tools to help with a range of things in my life. From mental health to business building, I have everything at my fingertips. I've already recommended Mindvalley to people for years (6-7 years now in fact) and will continue to do so. Thank you for all you do.  My advice for anyone considering a Mindvalley is what the heck are you waiting for? Get started! You won't regret it, you can only raise your frequency and open yourself to living on a level you've only dreamed of",
            name: "Gabrielle Kudrnka",
            profession: "Birth Worker",
            address: "St. Louis, United States"
        },
        {
            img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
            heading: "Mindvalley has been an amazing resource for uncovering tools to help with a range of things in my life",
            text: "Mindvalley has been an amazing resource for uncovering tools to help with a range of things in my life. From mental health to business building, I have everything at my fingertips. I've already recommended Mindvalley to people for years (6-7 years now in fact) and will continue to do so. Thank you for all you do.  My advice for anyone considering a Mindvalley is what the heck are you waiting for? Get started! You won't regret it, you can only raise your frequency and open yourself to living on a level you've only dreamed of",
            name: "Gabrielle Kudrnka",
            profession: "Birth Worker",
            address: "St. Louis, United States"
        },
        {
            img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
            heading: "Mindvalley has been an amazing resource for uncovering tools to help with a range of things in my life",
            text: "Mindvalley has been an amazing resource for uncovering tools to help with a range of things in my life. From mental health to business building, I have everything at my fingertips. I've already recommended Mindvalley to people for years (6-7 years now in fact) and will continue to do so. Thank you for all you do.  My advice for anyone considering a Mindvalley is what the heck are you waiting for? Get started! You won't regret it, you can only raise your frequency and open yourself to living on a level you've only dreamed of",
            name: "Gabrielle Kudrnka",
            profession: "Birth Worker",
            address: "St. Louis, United States"
        },
        {
            img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
            heading: "Mindvalley has been an amazing resource for uncovering tools to help with a range of things in my life",
            text: "Mindvalley has been an amazing resource for uncovering tools to help with a range of things in my life. From mental health to business building, I have everything at my fingertips. I've already recommended Mindvalley to people for years (6-7 years now in fact) and will continue to do so. Thank you for all you do.  My advice for anyone considering a Mindvalley is what the heck are you waiting for? Get started! You won't regret it, you can only raise your frequency and open yourself to living on a level you've only dreamed of",
            name: "Gabrielle Kudrnka",
            profession: "Birth Worker",
            address: "St. Louis, United States"
        },
        {
            img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
            heading: "Mindvalley has been an amazing resource for uncovering tools to help with a range of things in my life",
            text: "Mindvalley has been an amazing resource for uncovering tools to help with a range of things in my life. From mental health to business building, I have everything at my fingertips. I've already recommended Mindvalley to people for years (6-7 years now in fact) and will continue to do so. Thank you for all you do.  My advice for anyone considering a Mindvalley is what the heck are you waiting for? Get started! You won't regret it, you can only raise your frequency and open yourself to living on a level you've only dreamed of",
            name: "Gabrielle Kudrnka",
            profession: "Birth Worker",
            address: "St. Louis, United States"
        }
    ]
    return (
       <>
        <div className="container">
            <div className='row justify-content-center mb-4 mt-4'>
                <h2 style={{ fontWeight: "bolder", textAlign: "center" }}>What People Have To Say About Us</h2>
                <div style={{ width:  isDesktopOrLaptop?"90%":"95%" }}>
                    <Slider {...settings}>
                        {
                            reviews.map((val, i) => (
                                <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
                                    <CustomerReviews data={val} setModalShow={setModalShow} setData={setData} />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
        <CustomModal
        data={data}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
       </>
    )
}

export default ReviewsContainer