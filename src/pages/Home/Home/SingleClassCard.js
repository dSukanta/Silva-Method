import React from 'react'
import { Badge, Button, Card, ProgressBar } from 'react-bootstrap'
import { GrFormNext } from "react-icons/gr";
import { BsFillPersonFill ,BsFillCalendarCheckFill} from "react-icons/bs";
import moment from 'moment';
import { Link } from 'react-router-dom';

function SingleClassCards({data}) {
  //console.log(data);
    return (
        
                <div className="col-sm-10 col-md-6">
                    <Card className="text-start cardbody" style={{ borderRadius: "20px",width:"90%" }}>
                        <Card.Header className='bg-transparent'
                            style={{ borderBottom: "none"}}
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
                                <Link to={`/events/livedetails/${data && data.course_id}`}>
                                <GrFormNext size={30} />
                                </Link>

                            </div>
                        </Card.Body>
                        <Card.Footer className="bg-transparent"><BsFillCalendarCheckFill size={20}/> Date: {moment(data && data.start_date).format("MMM Do YY")}</Card.Footer>
                    </Card>
                </div>



    )
}

export default SingleClassCards