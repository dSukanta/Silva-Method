import React from 'react'
import { Badge, Button, Card, ProgressBar } from 'react-bootstrap'
import { GrFormNext } from "react-icons/gr";
import { BsFillPersonFill ,BsFillCalendarCheckFill} from "react-icons/bs";
import moment from 'moment';

function SingleClassCards({data}) {
  console.log(data);
    return (
        <div className="container mb-5">
            <div className="row justify-content-center gap-4">
                <div className="col-sm-10 col-md-11">
                    <Card className="text-start cardbody" style={{ borderRadius: "20px",width:"97%" }}>
                        <Card.Header className='bg-transparent'
                            style={{ borderBottom: "none",minHeight:"100px" }}
                        >
                            <div className='d-flex justify-content-start align-content-center gap-3 mt-3'>
                                <h5><Badge bg="dark">{data && data.delivery_method}</Badge></h5>
                                <h6 className='text-dark'>{data && data.course_title}</h6>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Img style={{ width: "100%"}} src={data && data.class_image? data.class_image:'https://assets.mindvalley.com/api/v1/assets/b7249d98-ecf0-48f0-82d8-6e2dedbd9ed8.jpeg?auto=webp&fit=cover&quality=50&width=438&height=246'} />
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex flex-column'>
                                    <Card.Text className='text-dark'>
                                        <b>by</b> <br />  {data && data.instructor_name}
                                    </Card.Text>
                                </div>
                                <GrFormNext size={30} />

                            </div>
                        </Card.Body>
                        <Card.Footer className="bg-transparent"><BsFillCalendarCheckFill size={20}/> Date: {moment(data && data.start_date).format("MMM Do YY")}</Card.Footer>
                    </Card>
                </div>


                {/*  */}

                {/* <div className="col-sm-10 col-md-5">
                    <Card className="text-start cardbody" style={{ borderRadius: "20px",width:"97%" }}>
                        <Card.Header className='bg-transparent'
                            style={{ borderBottom: "none" }}
                        >
                            <div className='d-flex justify-content-start align-items-center gap-3'>
                                <h5><Badge bg="dark">New</Badge></h5>
                                <img src="https://cdn.mindvalley.com/asset/2741a992-a959-4e26-89d8-7856ee14e434/6Phase_MainCover_1920x1080px_EN_thumbnail.png?auto=webp&fit=cover&quality=50&width=80&height=44"
                                style={{width:"70px",height:"40px"}}
                                alt="" />
                               <div className=''>
                                <h5 className='text-dark'>The 6 Phase Medication</h5>
                                <p>
                                    3 of 7 Lessons completed
                                </p>
                                <ProgressBar variant="warning" now={60} />

                               </div>
                               <GrFormNext size={30} />
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Img style={{ width: "100%" }} src='https://assets.mindvalley.com/api/v1/assets/b7249d98-ecf0-48f0-82d8-6e2dedbd9ed8.jpeg?auto=webp&fit=cover&quality=50&width=438&height=246' />
                            <div className='d-flex justify-content-between align-items-center pt-4'>
                                <div className='d-flex flex-column'>
                                    <Card.Text className='text-dark'>
                                        Getting Started with Mindvalley <br /> Vishen
                                    </Card.Text>
                                </div>
                                <GrFormNext size={30} />

                            </div>
                        </Card.Body>
                        <Card.Footer className="bg-transparent"><BsFillPersonFill /> 35,000 people joined</Card.Footer>
                    </Card>
                </div> */}

                {/*  */}

                 
            </div>
        </div>
    )
}

export default SingleClassCards