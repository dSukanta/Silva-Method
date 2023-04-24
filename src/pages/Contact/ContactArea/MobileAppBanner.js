import React from 'react'
import { Link } from 'react-router-dom';
import contactimg1 from "../../../images/newimgs/mobilead.webp"
import {TiTick} from "react-icons/ti"
import { useMediaQuery } from 'react-responsive';
import googleplayimg from "../../../images/newimgs/googleplaybtn.webp"
import appstoreimg from "../../../images/newimgs/appstorebtn.webp"
import contactimg2 from "../../../images/newimgs/mobilead2.webp"
function MobileAppBanner() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    return (
        <>
            <section className="fact-area fact-map primary-bg2">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-10">
                            <div className="section-title mb-45">
                                <div className="section-text section-text-white">
                                    <h2 className='white-color mb-3'>Become a Silva Method Member Today</h2>
                                    <h4 className="white-color mb-3">Access all current and upcoming Mindvalley programs in Mind, Body, Soul, Career, Entrepreneurship,
                                        Relationship & Kids, Teens and Parenting. Over 50 Quest Programs and 200+ short form trainings in everything from Parenting, to Work to Yoga.</h4>
                                    <ul className='white-color' style={{fontSize:"1.1rem",lineHeight:"40px",textIndent:"-35px",marginLeft:"35px"}}>
                                        <li><span className='me-3'><TiTick size={20} /></span>Mindvalley’s entire curriculum of 50+ Quests</li>
                                        <li><span className='me-3'><TiTick size={20} /></span>Daily LIVE Classes with World Class Experts and Celebrities</li>
                                        <li><span className='me-3'><TiTick size={20} /></span>500+ Immersive Mindvalley Meditations</li>
                                        <li><span className='me-3'><TiTick size={20} /></span>Unlimited Access to Our Private Social Network to build life-long connections</li>
                                        <li><span className='me-3'><TiTick size={20} /></span>Accessible everywhere: Apple, Android, Desktop, iPad, Apple TV, and many more.</li>
                                        <li><span className='me-3'><TiTick size={20} /></span>One-click refund in the first 15 days so your purchase is 100% safe.</li>

                                    </ul>
                                </div>
                            </div>
                            <div className="section-button section-button-left mb-30">
                                <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>Become A Member Now</Link>
                            </div>
                            <div className='mt-3 mb-3'>
                                <h6 className='white-color'>Available On:</h6>
                                <div className="d-flex justify-content-start gap-3 flex-sm-column flex-md-row">
                                  <img src={googleplayimg} style={{width:"170px",height:"50px"}} />
                                  <img src={appstoreimg} style={{width:"170px",height:"50px"}} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-lg-6 col-md-8" style={{height:"100%"}}>
                            <img src={isDesktopOrLaptop?contactimg1:contactimg2} alt="" style={{ width: "100%", height: isDesktopOrLaptop?"800px":"100%", zIndex: "50000",marginLeft:isDesktopOrLaptop?"50px":"0px" }} />

                            <div className="cta-satisfied">
                                <div className="single-satisfied">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MobileAppBanner