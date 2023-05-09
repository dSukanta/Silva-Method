import React from 'react'
import { Button, Card, Tooltip } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import silvalogo from "../../images/newimgs/silvalogo.png";
import { BsBook, BsFillPeopleFill } from "react-icons/bs";
import ReactDOMServer from 'react-dom/server';
import { useNavigate } from 'react-router-dom';

function SingleProduct({ data }) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 1279 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    const navigate = useNavigate();

    //console.log(data)
    return (
        <div className='col-12'>
            <Card className="text-center" style={{ width: isDesktopOrLaptop ? "95%" : isTablet ? "95%" : "100%", minHeight: "400px" }}>

                <Card.Body>
                    <div className='d-flex justify-content-center'>
                        <img src={data.web_image || silvalogo} style={{ width: "100%", height: "200px", objectFit: "contain" }} alt="" />
                    </div>
                    <Card.Text>
                        {data.teacher_name}
                    </Card.Text>
                    <Card.Title>
                        {
                            data.course_title
                        }
                    </Card.Title>
                    {/* <a data-tooltip-id={data.category_id} data-tooltip-place="bottom" data-tooltip-html={ReactDOMServer.renderToStaticMarkup(<div dangerouslySetInnerHTML={{ __html: data.course_description }}></div>)}>
                        <div className="badge-box">
                            <span>Hover to see Description</span>
                        </div>
                    </a> */}
                    <button className='primary_btn3' onClick={()=>navigate(`/store/course/${data.course_id}`)}>View More</button>

                </Card.Body>
                {/* <Card.Footer>
                    <div className="d-flex justify-content-between">
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
            <Tooltip id={data.category_id} />
        </div>
    )
}

export default SingleProduct