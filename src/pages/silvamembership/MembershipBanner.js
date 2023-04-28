import React from 'react'
import { Link } from 'react-router-dom';
import contactimg1 from "../../images/newimgs/mobilead.webp"
import {TiTick} from "react-icons/ti"
import { useMediaQuery } from 'react-responsive';
import googleplayimg from "../../images/newimgs/googleplaybtn.webp"
import appstoreimg from "../../images/newimgs/appstorebtn.webp"
import contactimg2 from "../../images/newimgs/mobilead2.webp"
function MemberShipBanner() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    return (
        <>
            <section className="fact-area fact-map" style={{backgroundColor:"whitesmoke"}}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-10">
                            <div className="section-title mb-45">
                                <div className="section-text section-text-white">
                                    <h2 className='mb-3'>Silva Method Membership, Anywhere You Go</h2>
                                    <h4 className="mb-3">
                                    Access all your Quests on the go with the Mindvalley app. Just search for ‘Mindvalley’ on the App Store or Google Play. Or use the links below.
                                    </h4>
                                    <h4 className="mb-3">
                                     Once you’ve downloaded the app, use your account email and password to login.
                                    </h4>
                                    {/* <ul className='' style={{fontSize:"1.1rem",lineHeight:"40px",textIndent:"-35px",marginLeft:"35px"}}>
                                        <li><span className='me-3'><TiTick color='black' size={20} /></span>Mindvalley’s entire curriculum of 50+ Quests</li>
                                        <li><span className='me-3'><TiTick color='black' size={20} /></span>Daily LIVE Classes with World Class Experts and Celebrities</li>
                                        <li><span className='me-3'><TiTick color='black' size={20} /></span>500+ Immersive Mindvalley Meditations</li>
                                        <li><span className='me-3'><TiTick color='black' size={20} /></span>Unlimited Access to Our Private Social Network to build life-long connections</li>
                                        <li><span className='me-3'><TiTick color='black' size={20} /></span>Accessible everywhere: Apple, Android, Desktop, iPad, Apple TV, and many more.</li>
                                        <li><span className='me-3'><TiTick color='black' size={20} /></span>One-click refund in the first 15 days so your purchase is 100% safe.</li>

                                    </ul> */}
                                </div>
                            </div>
                            {/* <div className="section-button section-button-left mb-30">
                                <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>Become A Member Now</Link>
                            </div> */}
                            <div className='mt-3 mb-3'>
                                <h6 className=''>Available On:</h6>
                                <div className="d-flex justify-content-start gap-3 flex-sm-column flex-md-row">
                                  <img src={googleplayimg} style={{width:"170px",height:"50px"}} />
                                  <img src={appstoreimg} style={{width:"170px",height:"50px"}} />
                                </div>
                                {/* <h4 className="mb-3">
                                     Once you’ve downloaded the app, use your account email and password to login.
                                </h4> */}
                            </div>
                        </div>
                        <div className="col-lg-6 col-lg-6 col-md-8" style={{height:"100%"}}>
                            <img src={isDesktopOrLaptop?"https://storyblok-cdn.mindvalley.com/f/60579/1200x1329/220fb60ebd/access-sp-anywhereyougo-bg.jpg?trans?quality=40&auto=webp&dpr=1&width=auto":contactimg2} alt="" style={{ width: "100%", height: isDesktopOrLaptop?"800px":"100%", zIndex: "50000",marginLeft:isDesktopOrLaptop?"50px":"0px" }} />

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

export default MemberShipBanner