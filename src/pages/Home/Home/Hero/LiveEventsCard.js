import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LiveCardSingle from './LiveCardSingle'
import { useMediaQuery } from 'react-responsive'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Slider from 'react-slick';
import { requestData } from '../../../../utils/baseUrl';

function LiveEventsCard() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 820 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    const [liveCourses, setLiveCourses] = useState([]);

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: <GrFormPrevious />,
        nextArrow: <GrFormNext />,
        slidesToShow: isDesktopOrLaptop ? 4 : isTablet ? 2 : 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: isDesktopOrLaptop ? '0%' : "5%",

    };

    const getEvents = async () => {
        const res = await requestData("latestClassListbyStartDate", "POST", { start_index: 0, no_of_records: 20 });
        //console.log(res)
        if (res && res.error === false) {
            const data = res.data.filter((d, i) => {
                return d.delivery_method === "live"
            })
            setLiveCourses(data)
            //console.log(data, "Data")
        }
    }

    useEffect(() => {
        getEvents();
    },[])
    return (
        <div className={`my-5 ${isDesktopOrLaptop?'container':'mx-2'}`}>
            <div className='d-flex justify-content-between'>
                <h3>Live Events</h3>
                <Link to="/events/live" style={{ color: "blue", textDecoration: "underline", fontWeight: "600" }}>See All</Link>
            </div>

            <div className="row livecard">
                <Slider {...settings}>
                   {
                    liveCourses && liveCourses.map((lc,i)=>(
                    <div className="col-3 p-2">
                        <LiveCardSingle data={lc} />
                    </div>
                    ))
                   }
                </Slider>
            </div>

        </div>
    )
}

export default LiveEventsCard