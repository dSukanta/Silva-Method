import { Card, ListGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import instructorpic from "../../images/newimgs/instructorpic.jpg"
import { GiCheckeredFlag } from "react-icons/gi";
import { AiOutlineContacts, AiOutlineMail } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import serviceImg1 from "../../images/serviceimgs/more-ser-1.png"
import moment from 'moment';
import { BsCalendarDate, BsCalendarEvent,BsFillPersonFill } from "react-icons/bs";
import { MdPlace } from "react-icons/md";
import { AiOutlineInfoCircle,AiOutlineSafetyCertificate } from "react-icons/ai";


function TabsComp({ data }) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })

    const { address, country, course_name, course_title, delivery_method,
        details, email, email_2, end_date, instructor_name,instructor_id, language, phone_number,
        phone_number_2, photo, post_date, start_date,is_certified_instructor,is_coach } = data;

    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <Nav variant="pills">
                            <Nav.Item style={{ backgroundColor: "rgb(155, 55, 242)",marginRight:"20px"}}>
                                <Nav.Link eventKey="first">Event Details</Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ backgroundColor: "rgb(155, 55, 242)",marginTop:isDesktopOrLaptop?"0px":"20px" }}>
                                <Nav.Link eventKey="second">Instructor Details</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={12} md={12} lg={12} className='mt-4'>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                {/* <Card style={{ width: "100%" }}>
                                    <Card.Body>
                                        <div className='mb-5'>
                                            <p style={{ fontSize: "1.5rem" }}>
                                                Event Start Date : 20 Apr 2023
                                            </p>
                                            <p style={{ fontSize: "1.5rem" }}>
                                                Event End Date : 23 Apr 2023
                                            </p>
                                        </div>

                                        <div className='mb-5'>
                                            <p style={{ fontSize: "1.5rem" }}>
                                                Event Mode

                                            </p>
                                            <p style={{ fontSize: "1.5rem", color: "#9b37f2" }}>
                                                Live (Offline)
                                            </p>
                                        </div>
                                        <div className='mb-5'>
                                            <p style={{ fontSize: "1.5rem" }}>
                                                Venue
                                            </p>
                                            <p style={{ fontSize: "1.5rem", color: "#9b37f2" }}>
                                                Courtyard By Marriott Fort Lauderdale Plantation, 7780 SW 6th Street, Plantation, Florida, 33324,954-475-1100
                                            </p>
                                        </div>
                                        <div className='mb-5'>
                                            <p style={{ fontSize: "1.5rem" }}>
                                                Details
                                            </p>
                                            <p style={{ fontSize: "1.5rem", color: "#9b37f2" }}>
                                                (LIVE IN-PERSON In Plantation, Florida, Over 4 Consecutive Days), Thursday, April 20 Through Sunday, April 23, 8:00am – 6:00pm Eastern
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Card> */}
                                <div className="service-widget mb-50">
                                    <div className="widget-title-box mb-30">
                                        <h3 className="widget-title">Event Details</h3>
                                    </div>
                                    <div className="more-service-list">
                                        <ul>
                                            <li>
                                                {/* <div className="more-service-icon"><img src={serviceImg1} alt="" /></div> */}
                                                <div className="more-service-title doctor-details-title">Event Start Date <span>{moment(start_date).format('LL')}</span></div>
                                            </li>
                                            <li>
                                                <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                <div className="more-service-title doctor-details-title">Event End Date<span>{moment(end_date).format('LL')}</span></div>
                                            </li>
                                            <li>
                                                <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                <div className="more-service-title doctor-details-title">Event Mode<span>{delivery_method=='live'? 'Live(Offline)':'Online'}</span></div>
                                            </li>
                                            <li>
                                                <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                <div className="more-service-title doctor-details-title">Venue<span>{address}</span></div>
                                            </li>
                                            <li>
                                                <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                <div className="more-service-title doctor-details-title">
                                                    Details
                                                    <div dangerouslySetInnerHTML={{__html:details}}/>
                                                    </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                {/* <Card style={{ width: "100%" }}>
                                    <Card.Body>
                                        <div className='mb-5'>
                                            <p style={{ fontSize: "1.5rem", color: "black" }}>
                                                Instructor Name : Keith Harmeyer
                                            </p>
                                        </div>

                                        <div className='mb-5'>
                                            <img src={instructorpic} style={{ width: "280px", height: "350px" }} />

                                        </div>
                                        <div className='mb-5'>
                                            <ListGroup style={{ fontSize: "1.2rem" }}>
                                                <ListGroup.Item>Country <GiCheckeredFlag /> - Cras justo odio</ListGroup.Item>
                                                <ListGroup.Item>Contact Detials <AiOutlineContacts /> - Dapibus ac facilisis in</ListGroup.Item>
                                                <ListGroup.Item>Email <AiOutlineMail /> -Morbi leo risus</ListGroup.Item>
                                                <ListGroup.Item>Website <CgWebsite /> - Porta ac consectetur ac</ListGroup.Item>
                                                <ListGroup.Item>Is Instructor a Silva certified Instructor? - Vestibulum at eros</ListGroup.Item>
                                            </ListGroup>
                                        </div>

                                    </Card.Body>
                                </Card> */}
                                <div className="service-widget mb-50">

                                    <div className="widget-title-box mb-30">
                                        <h3 className="widget-title">Instructor Details</h3>
                                    </div>
                                    <div className='mb-5'>
                                        <img src={photo} style={{ width: "280px", height: "350px", borderRadius: "10px" }} />
                                    </div>
                                    <div className="more-service-list">
                                        <ul>
                                            <div className="row">
                                                <div className="col-sm-6 col-md-4 mt-4">
                                                    <li>
                                                        {/* <div className="more-service-icon"><img src={serviceImg1} alt="" /></div> */}
                                                        <div className="more-service-title doctor-details-title"><BsFillPersonFill size={35} /> Instructor Name <span>{instructor_name}</span></div>
                                                    </li>
                                                </div>
                                                <div className="col-sm-6 col-md-4">
                                                    <li>
                                                        <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                        <div className="more-service-title doctor-details-title"><GiCheckeredFlag size={35} /> Country <span>Cras justo odio</span></div>
                                                    </li>
                                                </div>
                                                <div className="col-sm-6 col-md-4">
                                                    <li>
                                                        <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                        <div className="more-service-title doctor-details-title"><AiOutlineContacts size={35} /> Contact Detials <span>{phone_number ? phone_number : '-'}{phone_number_2 ? `|| ${phone_number_2}` : ' '}</span></div>
                                                    </li>
                                                </div>
                                                <div className="col-sm-6 col-md-4">
                                                    <li>
                                                        <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                        <div className="more-service-title doctor-details-title"><AiOutlineMail size={35} /> Email <span>{email ? email : '-'}{email_2 ? `|| ${email_2}` : ' '}</span></div>
                                                    </li>
                                                </div>
                                                <div className="col-sm-6 col-md-4">
                                                    <li>
                                                        <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                        <div className="more-service-title doctor-details-title"><CgWebsite size={35} /> Website <span>Porta ac consectetur ac</span></div>
                                                    </li>
                                                </div>
                                                <div className="col-sm-6 col-md-4">
                                                    <li>
                                                        <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                        <div className="more-service-title doctor-details-title"><AiOutlineSafetyCertificate size={35} /> Is Instructor a Silva certified Coach?<span>{is_certified_instructor=="N"|| is_certified_instructor==null? 'No':'Yes'}</span></div>
                                                    </li>
                                                </div>
                                                <div className="col-sm-6 col-md-4">
                                                    <li>
                                                        <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                        <div className="more-service-title doctor-details-title"><AiOutlineSafetyCertificate size={35} /> Is Instructor a Silva certified Instructor?<span>{is_coach=="N"|| is_coach==null? 'No':'Yes'}</span></div>
                                                    </li>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </>
    );
}

export default TabsComp;