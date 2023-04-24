import { Card, ListGroup } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
// import instructorpic from "../../images/newimgs/instructorpic.jpg"
import {GiCheckeredFlag} from "react-icons/gi";
import {AiOutlineContacts,AiOutlineMail} from "react-icons/ai";
import {CgWebsite} from "react-icons/cg";
import moment from 'moment';

function TabsComp({data}) {
    //console.log(data);
    const {address,country,course_name,course_title,delivery_method,
        details,email,end_date,instructor_name,language,phone_number,
        phone_number_2,photo,post_date,start_date}= data;

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={12} md={12} lg={12}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item style={{ backgroundColor: "rgb(192, 129, 247)", marginBottom: "10px" }}>
                            <Nav.Link eventKey="first">Event Details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{ backgroundColor: "rgb(192, 129, 247)" }}>
                            <Nav.Link eventKey="second">Instructor Details</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={12} md={12} lg={12} className='mt-4'>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Card style={{ width: "100%" }}>
                                <Card.Body>
                                    <div className='mb-5'>
                                        <p style={{ fontSize: "1.5rem" }}>
                                            Event Start Date : {moment(start_date).format('LL')}
                                        </p>
                                        <p style={{ fontSize: "1.5rem" }}>
                                            Event End Date : {moment(end_date).format('LL')}
                                        </p>
                                    </div>

                                    <div className='mb-5'>
                                        <p style={{ fontSize: "1.5rem" }}>
                                            Event Mode

                                        </p>
                                        <p style={{ fontSize: "1.5rem", color: "#9b37f2" }}>
                                            {delivery_method}
                                        </p>
                                    </div>
                                    <div className='mb-5'>
                                        <p style={{ fontSize: "1.5rem" }}>
                                            Venue
                                        </p>
                                        <p style={{ fontSize: "1.5rem", color: "#9b37f2" }}>
                                            {address}
                                        </p>
                                    </div>
                                    <div className='mb-5'>
                                        <p style={{ fontSize: "1.5rem" }}>
                                            Details
                                        </p>
                                        <p style={{ fontSize: "1.5rem", color: "#9b37f2" }}>
                                            {details}
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
                                            Instructor Name : {instructor_name}
                                        </p>
                                    </div>

                                    <div className='mb-5'>
                                        <img src={photo} style={{ width: "280px", height: "350px" }} />

                                    </div>
                                    <div className='mb-5'>
                                        <ListGroup style={{fontSize:"1.2rem"}}>
                                            <ListGroup.Item>Country <GiCheckeredFlag /> - Cras justo odio</ListGroup.Item>
                                            <ListGroup.Item>Contact Detials <AiOutlineContacts /> - {phone_number? phone_number:'-'}{phone_number_2?`|| ${phone_number_2}`:' '}</ListGroup.Item>
                                            <ListGroup.Item>Email <AiOutlineMail /> - {email}</ListGroup.Item>
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