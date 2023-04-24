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
function TabsComp() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })

    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        <Nav variant="pills">
                            <Nav.Item style={{ backgroundColor: "rgb(155, 55, 242)", marginRight: "10px", marginBottom: isDesktopOrLaptop ? "0px" : "10px" }}>
                                <Nav.Link eventKey="first">Event Details</Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ backgroundColor: "rgb(155, 55, 242)" }}>
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
                                                <div className="more-service-title doctor-details-title">Event Start Date <span>20 Apr 2023</span></div>
                                            </li>
                                            <li>
                                                <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                <div className="more-service-title doctor-details-title">Event End Date<span>23 Apr 2023</span></div>
                                            </li>
                                            <li>
                                                <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                <div className="more-service-title doctor-details-title">Event Mode<span>Live (Offline)</span></div>
                                            </li>
                                            <li>
                                                <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                <div className="more-service-title doctor-details-title">Venue<span>Courtyard By Marriott Fort Lauderdale Plantation,
                                                    7780 SW 6th Street, Plantation, Florida, 33324,954-475-1100</span></div>
                                            </li>
                                            <li>
                                                <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                <div className="more-service-title doctor-details-title">Details<span>(LIVE IN-PERSON In Plantation, Florida, Over 4 Consecutive Days),
                                                    Thursday, April 20 Through Sunday, April 23, 8:00am – 6:00pm Eastern</span></div>
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
                                        <img src={instructorpic} style={{ width: "280px", height: "350px",borderRadius:"10px" }} />
                                    </div>
                                    <div className="more-service-list">
                                        <ul>
                                            <li>
                                                {/* <div className="more-service-icon"><img src={serviceImg1} alt="" /></div> */}
                                                <div className="more-service-title doctor-details-title">Instructor Name <span>Keith Harmeyer</span></div>
                                            </li>
                                            <li>
                                                <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                <div className="more-service-title doctor-details-title"><GiCheckeredFlag size={35} /> Country <span>Cras justo odio</span></div>
                                            </li>
                                            <li>
                                                <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                <div className="more-service-title doctor-details-title"><AiOutlineContacts size={35} /> Contact Detials <span>Dapibus ac facilisis in</span></div>
                                            </li>
                                            <li>
                                                <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                <div className="more-service-title doctor-details-title"><AiOutlineMail size={35} /> Email <span>Morbi leo risus</span></div>
                                            </li>
                                            <li>
                                                <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                <div className="more-service-title doctor-details-title"><CgWebsite size={35} /> Website <span>Porta ac consectetur ac</span></div>
                                            </li>
                                            <li>
                                                <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                                <div className="more-service-title doctor-details-title">Is Instructor a Silva certified Instructor?<span>Vestibulum at eros</span></div>
                                            </li>
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