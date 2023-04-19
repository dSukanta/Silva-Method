import { Card, ListGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import instructorpic from "../../images/newimgs/instructorpic.jpg"
import {GiCheckeredFlag} from "react-icons/gi";
import {AiOutlineContacts,AiOutlineMail} from "react-icons/ai";
import {CgWebsite} from "react-icons/cg";

function TabsComp() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item style={{ backgroundColor: "rgb(155, 55, 242)", marginBottom: "10px" }}>
                            <Nav.Link eventKey="first">Event Details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ backgroundColor: "rgb(155, 55, 242)" }}>
                            <Nav.Link eventKey="second">Instructor Details</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Card style={{ width: "100%" }}>
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
                            </Card>

                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <Card style={{ width: "100%" }}>
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
                                        <ListGroup style={{fontSize:"1.2rem"}}>
                                            <ListGroup.Item>Country <GiCheckeredFlag /> - Cras justo odio</ListGroup.Item>
                                            <ListGroup.Item>Contact Detials <AiOutlineContacts /> - Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item>Email <AiOutlineMail /> -Morbi leo risus</ListGroup.Item>
                                            <ListGroup.Item>Website <CgWebsite /> - Porta ac consectetur ac</ListGroup.Item>
                                            <ListGroup.Item>Is Instructor a Silva certified Instructor? - Vestibulum at eros</ListGroup.Item>
                                        </ListGroup>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default TabsComp;