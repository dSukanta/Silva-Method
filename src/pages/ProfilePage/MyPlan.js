import React, { useContext } from 'react'
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { requestData2 } from '../../utils/baseUrl';
import { AuthContext } from '../../context/AllContext';
import { useNavigate } from 'react-router-dom';
import { Card, ListGroup } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import moment from 'moment';



function MyPlan() {


    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })


    const navigate = useNavigate()

    const { userData, setUserData } = useContext(AuthContext);


    const getProfile = async () => {
        const res = await requestData2("getStudentProfile", "POST", {});
        if (res && res.error === false) {
            setUserData(res.data);
        }
    }



    useEffect(() => {
        if (userData) {
            if (!userData.first_name || !userData.last_name || !userData.email || !userData.phone) {
                toast.error("Enter your basic information first !");
                navigate("/store/profile/avijit123/settings/basic_information");
            }
        }
    }, [userData])

    return (
        <div style={{ width: "96%", marginRight: "25px", marginLeft: isDesktopOrLaptop ? "80px" : "0px" }} className='mt-5 mb-4'>
            {
                userData.strip_payment_status && (
                    <Card>
                        <Card.Body>
                            <Card.Title style={{ color: "black" }}>Your Subscription Plan Details</Card.Title>
                            <ListGroup style={{ fontSize: "1.05rem" }}>
                                <ListGroup.Item style={{ borderRight: "none", borderLeft: "none" }}>
                                    Subscription Plan Pricing - <span style={{ fontWeight: "600" }}>{userData?.subscription_price} $ / {userData?.subscription_cycle}</span>
                                </ListGroup.Item>
                                <ListGroup.Item style={{ borderTop: "none", borderRight: "none", borderLeft: "none" }}>
                                    Your Plan Started At - <span style={{ fontWeight: "600" }}>{moment(userData?.stripe_created_at).format("LLL")}</span>
                                </ListGroup.Item>
                                <ListGroup.Item style={{ borderTop: "none", borderRight: "none", borderLeft: "none" }}>
                                    Your Plan Will Expire At - <span style={{ fontWeight: "600" }}>{moment(userData?.strip_expires_at).format("LLL")}</span>
                                </ListGroup.Item>
                                <ListGroup.Item style={{ borderTop: "none", borderRight: "none", borderLeft: "none" }}>
                                    Total Amount Paid - <span style={{ fontWeight: "600" }}>{userData?.strip_amount_total} $</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                )
            }

            {
                !userData.strip_payment_status && (
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                You Have no subscriptions
                            </Card.Title>
                            <button className='primary_btn3'>View Plans</button>
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    )
}

export default MyPlan