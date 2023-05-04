import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import silvalogo from "../../images/newimgs/silvalogo.png";
import { BsBook, BsFillPeopleFill } from "react-icons/bs";

function SingleProduct2({ data }) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 1279 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    console.log(data)
    return (
        <div className='col-12 pe-2'>
            <Card className="text-center" style={{ width: isDesktopOrLaptop ? "95%" : isTablet ? "95%" : "100%",minHeight:"280px"}}>

                <Card.Body>
                    <div className='d-flex justify-content-center'>
                        <img src={data.web_image || silvalogo} style={{ width: "100px", height: "100px" }} alt="" />
                    </div>
                    <Card.Text>
                        {data.teacher_name}
                    </Card.Text>
                    <Card.Title>
                        {
                            data.course_title
                        }
                    </Card.Title>

                </Card.Body>
                {/* <Card.Footer>
                    <div className="d-flex justify-content-center">

                        <div className='d-flex gap-4 align-items-center'>
                            <span className='d-flex gap-2 align-items-center'>
                                <BsBook size={30} />
                                <span>
                                    {
                                        data.lectures
                                    }
                                </span>
                            </span>
                            <span className='d-flex gap-2 align-items-center'>
                                <BsFillPeopleFill size={30} />
                                <span>
                                    {
                                        data.students
                                    }
                                </span>

                            </span>

                        </div>
                        <div className='d-flex justify-content-center gap-2 align-items-center mt-3'>
                            <p>${data.price.toFixed(2)}</p>
                            <p class="cross">$189.99</p>
                        </div>
                    </div>
                </Card.Footer> */}
            </Card>
        </div>
    )
}

export default SingleProduct2