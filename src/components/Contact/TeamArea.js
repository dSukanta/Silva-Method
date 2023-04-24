import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick';
import OurTeamCard from './OurTeamCard';
import img1 from "../../images/newimgs/nina.png"
import img2 from "../../images/newimgs/memo.png"


function TeamArea() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
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

    const items = [
        {
            name:"Nina Perez",
            job:"CUSTOMER SUPPORT",
            text:"Nina has a heightened sense of intuition. She is our in-house case-working,lost and found, go to master! She began with the Silva Method's Electronic Department assembling biofeedback equipment over 25 years ago and has steadily moved up the ranks. Today, she wears many hats supporting the staff, our team of global instructors, and students worldwide.",
            img:img1
        },
        {
            name:"Guillermo Lopez",
            job:"OFFICE MANAGER",
            text:"Memo, as we affectionately call him, is our office and events manager extraordinaire! Memo has been with the Silva Method organization for over 27 years. He has experienced and contributed to Silva's ongoing evolution for nearly 3 decades and is a fundamental part of our team, bringing humor, fun, and daily accountability to all here at the Silva Headquarters.",
            img:img2
        }
    ]


  return (
     <>
     <div className="container mt-5">
            <div className='row justify-content-center mb-4 mt-4'>
                <h2 style={{ fontWeight: "bolder", textAlign: "center",marginBottom:"15px" }}>Meet Our Team</h2>
                <p style={{ textAlign: "center",color:"black",fontSize:"1.2rem" }}>The Silva Team Is Based In The Progressive Border Town Of Laredo Texas, And Has Over 6 Million Instructors And Graduates Worldwide.</p>
                <div style={{ width:  isDesktopOrLaptop?"90%":"95%" }}>
                    {/* <Slider {...settings}>
                       
                    </Slider> */}
                    <div className="row">
                    {
                        items.map((val,i)=>(
                            <div className="col-sm-12 col-md-6">
                                <OurTeamCard text={val.text} job={val.job} name={val.name} img={val.img} />
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
     </>
  )
}

export default TeamArea