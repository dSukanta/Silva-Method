import React, { useContext } from 'react'
import "./pricing.css";
import { TiTick } from "react-icons/ti";
import { requestData, requestData2 } from '../../utils/baseUrl';
import { useEffect } from 'react';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip'
import ReactDOMServer from 'react-dom/server';
import { AuthContext } from '../../context/AllContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import Spinner from 'react-bootstrap/Spinner';

function MemberShipPricingPlan({ white = false }) {

    const { isUserLoggedIn, userData } = useContext(AuthContext)
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState({
        state: false,
        id: null
    });

    const navigate = useNavigate();
    const fetchPlans = async () => {
        const res = await requestData("subscriptionPlanList", "POST", {});
        console.log(res)
        setPlans(res.data)
    }

    useEffect(() => {
        fetchPlans()
    }, [])

    const handleSubscription = async (id) => {
        //console.log(id);
        setLoading({
            state: true,
            id: id
        });
        if (isUserLoggedIn) {
            const res = await requestData2(`subscribeNowCourse?plan_id=${id}`, "POST");
            setLoading({
                state: false,
                id: id
            });
            console.log(res);
            if (res && res.error === false) {
                window.location.assign(res.data)
            }
        } else {
            toast.error("Please Login to subscribe", {
                position: "top-center"
            })
            navigate("/login")
        }
    }

    return (
        <>



            <div className="container" style={{ marginTop: "80px" }}>
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-8">
                        <h2 className='text-center' style={{ color: white ? "white" : "black" }}>Become a Silva Method Member To Start</h2>
                        <img style={{ objectFit: "cover" }} src="https://storyblok-cdn.mindvalley.com/f/60579/1594x883/c981ac783d/mvcom_hp_aa_devices.png?trans?quality=40&auto=webp&dpr=1&width=800"
                            alt="" />
                        <div>
                            <h3 className='text-start' style={{ color: white ? "white" : "black" }}>What You Get:</h3>
                            <div className='d-flex mb-2'>
                                <TiTick size={40} color='purple' />
                                <p style={{ color: white ? "white" : "black", fontSize: "1.1rem" }}>
                                    Full access to Mindvalley’s entire curriculum of best-in-class programs for transforming every dimension of your life.
                                </p>
                            </div>

                            <div className='d-flex mb-2'>
                                <TiTick size={40} color='purple' />
                                <p style={{ color: white ? "white" : "black", fontSize: "1.1rem" }}>
                                    Weekly Mindvalley Live sessions featuring today’s biggest trainers, bestselling authors, and celebrities.
                                </p>
                            </div>
                            <div className='d-flex mb-2'>
                                <TiTick size={50} color='purple' />
                                <p style={{ color: white ? "white" : "black", fontSize: "1.1rem" }}>
                                    Full access to Mindvalley Meditations, featuring a vast selection of guided and ambient meditation audios for deep inner transformation.
                                </p>
                            </div>
                            <div className='d-flex mb-2'>
                                <TiTick size={50} color='purple' />
                                <p style={{ color: white ? "white" : "black", fontSize: "1.1rem" }}>
                                    Access to Mindvalley’s private social network, where you can connect, share wisdom, and grow with fellow members in your city and around the world
                                </p>
                            </div>

                            <div className='d-flex mb-2'>
                                <TiTick size={40} color='purple' />
                                <p style={{ color: white ? "white" : "black", fontSize: "1.1rem" }}>
                                    One-click refund in the first 15 days so your purchase is a 100% safe.
                                </p>
                            </div>

                            <div className='d-flex'>
                                <TiTick size={40} color='purple' />
                                <p className='pricingplan' style={{ color: white ? "white" : "black", fontSize: "1.1rem", fontWeight: "bold" }}>
                                    PLUS: a lifetime discount when you choose an annual membership.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container2 " style={{ marginTop: "50px", marginBottom: "40px" }}>
                <div className="column">
                    <div className="pricing-card pro2" style={{ border: "2px solid whitesmoke" }}>
                        <div className="popular">{plans && plans.length > 0 && (plans[0].cycle + "LY").toUpperCase()}</div>
                        <div className="pricing-header">
                            <span className="plan-title">
                                {
                                    plans && plans.length > 0 && (plans[0].title).toUpperCase()
                                }
                            </span>
                            <div className="price-circle">
                                <span className="price-title">
                                    <small>$</small><span>
                                        {plans && plans.length > 0 && (Number(plans[0].price)).toFixed(2)}
                                    </span>
                                </span>
                                <span className="info">/ WEEK</span>
                            </div>
                        </div>
                        {
                            plans && plans.length > 0 && (
                                <a data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-html={ReactDOMServer.renderToStaticMarkup(<div dangerouslySetInnerHTML={{ __html: plans[0].description }}></div>)}>
                                    <div className="badge-box">
                                        {/* <span>Save 8%</span> */}
                                        <span>Hover to see Description</span>
                                    </div>
                                </a>
                            )
                        }

                        <div className="buy-button-box">
                            {loading.id == plans[0]?.id && loading.state ?
                                <Spinner animation="border" variant="primary" /> :
                                <a href="#" className="buy-now" onClick={() => handleSubscription(plans[0]?.id)}>JOIN MEMBERSHIP</a>
                            }
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="pricing-card pro" style={{ border: "2px solid whitesmoke" }}>
                        <div className="popular">{plans && plans.length > 0 && (plans[1].cycle + "LY").toUpperCase()}</div>
                        <div className="pricing-header">
                            <span className="plan-title">
                                {
                                    plans && plans.length > 0 && (plans[1].title).toUpperCase()
                                }
                            </span>
                            <div className="price-circle">
                                <span className="price-title">
                                    <small>$</small><span>
                                        {plans && plans.length > 0 && (Number(plans[1].price)).toFixed(2)}
                                    </span>
                                </span>
                                <span className="info">/ Month</span>
                            </div>
                        </div>

                        {
                            plans && plans.length > 0 && (
                                <a data-tooltip-id="my-tooltip2" data-tooltip-place="bottom" data-tooltip-html={ReactDOMServer.renderToStaticMarkup(<div dangerouslySetInnerHTML={{ __html: plans[1].description }}></div>)}>
                                    <div className="badge-box">
                                        {/* <span>Save 8%</span> */}
                                        <span>Hover to see Description</span>
                                    </div>
                                </a>
                            )
                        }
                        <div className="buy-button-box">
                            {loading.id == plans[1]?.id && loading.state ?
                                <Spinner animation="border" variant="primary" /> :
                                <a href="#" className="buy-now" onClick={() => handleSubscription(plans[1]?.id)}>JOIN MEMBERSHIP</a>
                            }
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="pricing-card business" style={{ border: "2px solid whitesmoke" }}>
                        <div className="popular">{plans && plans.length > 0 && (plans[2].cycle + "LY").toUpperCase()}</div>
                        <div className="pricing-header">
                            <span className="plan-title">
                                {
                                    plans && plans.length > 0 && (plans[2].title).toUpperCase()
                                }
                            </span>
                            <div className="price-circle">
                                <span className="price-title">
                                    <small>$</small><span>
                                        {plans && plans.length > 0 && (Number(plans[2].price)).toFixed(2)}
                                    </span>
                                </span>
                                <span className="info">/ Year</span>
                            </div>
                        </div>
                        {
                            plans && plans.length > 0 && (
                                <a data-tooltip-id="my-tooltip3" data-tooltip-place="bottom" data-tooltip-html={ReactDOMServer.renderToStaticMarkup(<div dangerouslySetInnerHTML={{ __html: plans[2].description }}></div>)}>
                                    <div className="badge-box">
                                        {/* <span>Save 8%</span> */}
                                        <span>Hover to see Description</span>
                                    </div>
                                </a>
                            )
                        }
                        <div className="buy-button-box">
                            {loading.id == plans[2]?.id && loading.state ?
                                <Spinner animation="border" variant="primary" /> :
                                <a href="#" className="buy-now" onClick={() => handleSubscription(plans[2]?.id)}>JOIN MEMBERSHIP</a>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Tooltip id="my-tooltip" />
            <Tooltip id="my-tooltip2" />
            <Tooltip id="my-tooltip3" />




        </>
    )
}

export default MemberShipPricingPlan