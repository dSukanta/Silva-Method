import React from 'react'
import { Card } from 'react-bootstrap'
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

function LiveCardSingle({ data }) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 820 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    if (data) {
        return (
            <Link to={`/events/livedetails/${data.course_id}`}>
                <Card style={{ width: "90%", borderRadius: "20px", height: isDesktopOrLaptop?"360px":"320px" }}>
                    <Card.Img variant="top" style={{ borderRadius: "20px 20px 0 0", minHeight: isDesktopOrLaptop?"200px":"150px", objectFit: "cover" }} src={data.photo || "https://assets.mindvalley.com/api/v1/assets/10b1de3f-44d4-4dd5-84d7-dc2456a79da4.jpeg?auto=webp&fit=cover&quality=50&dpr=2&width=442&height=248"} />
                    <Card.Body>
                        <Card.Text>
                            {
                                moment(data.start_date).format("MMM Do YY")
                            }
                            <br />
                            <span className='text-dark' style={{fontSize:isDesktopOrLaptop?"1rem":"0.7rem",fontWeight:"600"}}>
                                {
                                    data.course_name
                                }
                            </span>
                            
                        </Card.Text>
                        <Card.Text style={{color:"black",fontWeight:"600",fontSize:isDesktopOrLaptop?"1rem":"0.7rem",}}>
                                {
                                    data.instructor_name
                                }
                        </Card.Text>
                        {/* <Card.Text className='text-dark' style={{color:"black",fontSize:"1.05rem",fontWeight:"600"}}>
                        {
                            data.course_name
                        }
                    </Card.Text> */}
                        {/* <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex gap-3'>
                         <BsFillPersonFill />
                         <span>
                            2000
                         </span>
                        </div>
    
                        <span style={{padding:"10px 20px 10px 20px",backgroundColor:"#cccf19",borderRadius:"20px"}}>
                            <AiFillLock />
                        </span>
                    </div> */}
                    </Card.Body>
                </Card>
            </Link>
        )
    }
}

export default LiveCardSingle