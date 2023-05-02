import React from 'react'
import "./pricing.css";
import {TiTick} from "react-icons/ti";

function MemberShipPricingPlan({white=false}) {
    return (
       <>
       <div className="container" style={{marginTop:"80px"}}>
        <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8">
                <h2 className='text-center' style={{color:white?"white":"black"}}>Become a Silva Method Member To Start</h2>
                <img style={{objectFit:"cover"}} src="https://storyblok-cdn.mindvalley.com/f/60579/1594x883/c981ac783d/mvcom_hp_aa_devices.png?trans?quality=40&auto=webp&dpr=1&width=800"
                alt="" />
                <div>
                    <h3 className='text-start' style={{color:white?"white":"black"}}>What You Get:</h3>
                    <div className='d-flex mb-2'>
                    <TiTick size={40} color='purple' />
                    <p style={{color:white?"white":"black",fontSize:"1.1rem"}}>
                      Full access to Mindvalley’s entire curriculum of best-in-class programs for transforming every dimension of your life.
                    </p>
                    </div>

                    <div className='d-flex mb-2'>
                    <TiTick size={40} color='purple' />
                    <p style={{color:white?"white":"black",fontSize:"1.1rem"}}>
                      Weekly Mindvalley Live sessions featuring today’s biggest trainers, bestselling authors, and celebrities.
                    </p>
                    </div>
                    <div className='d-flex mb-2'>
                    <TiTick size={50} color='purple' />
                    <p style={{color:white?"white":"black",fontSize:"1.1rem"}}>
                     Full access to Mindvalley Meditations, featuring a vast selection of guided and ambient meditation audios for deep inner transformation.
                    </p>
                    </div>
                    <div className='d-flex mb-2'>
                    <TiTick size={50} color='purple' />
                    <p style={{color:white?"white":"black",fontSize:"1.1rem"}}>
                     Access to Mindvalley’s private social network, where you can connect, share wisdom, and grow with fellow members in your city and around the world
                    </p>
                    </div>

                    <div className='d-flex mb-2'>
                    <TiTick size={40} color='purple' />
                    <p style={{color:white?"white":"black",fontSize:"1.1rem"}}>
                      One-click refund in the first 15 days so your purchase is a 100% safe.
                    </p>
                    </div>

                    <div className='d-flex'>
                    <TiTick size={40} color='purple' />
                    <p className='pricingplan' style={{color:white?"white":"black",fontSize:"1.1rem",fontWeight:"bold"}}>
                     PLUS: a lifetime discount when you choose an annual membership.
                    </p>
                    </div>
                </div>
            </div>
        </div>
       </div>
        <div className="container2 " style={{marginTop:"50px",marginBottom:"40px"}}>
            <div className="column">
                <div className="pricing-card pro" style={{border:"2px solid whitesmoke"}}>
                    <div className="popular">POPULAR</div>
                    <div className="pricing-header">
                        <span className="plan-title">MONTHLY PLAN</span>
                        <div className="price-circle">
                            <span className="price-title">
                                <small>$</small><span>23.95</span>
                            </span>
                            <span className="info">/ Month</span>
                        </div>
                    </div>
                   
                    <div className="badge-box">
                        {/* <span>Save 8%</span> */}
                        <span>Pay monthly, cancel anytime</span>

                    </div>
                    <div className="buy-button-box">
                        <a href="#" className="buy-now">JOIN MEMBERSHIP</a>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="pricing-card business" style={{border:"2px solid whitesmoke"}}>
                    <div className="pricing-header">
                        <span className="plan-title">YEARLY PLAN</span>
                        <div className="price-circle">
                            <span className="price-title">
                                <small>$</small><span>59.95</span>
                            </span>
                            <span className="info">/ Month</span>
                        </div>
                    </div>
                    <div className="badge-box">
                        <span>Pay monthly, cancel anytime</span>
                    </div>
                    <div className="buy-button-box">
                        <a href="#" className="buy-now">JOIN MEMBERSHIP</a>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}

export default MemberShipPricingPlan