import React from 'react';
import { Link } from 'react-router-dom';
import contactimg1 from "../../../../images/newimgs/contactpageimg1.webp"

const HomeFact2 = () => {
    return (
        <>
            <section className="fact-area fact-map primary-bg pos-rel pt-115 pb-60">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-10">
                            <div className="section-title pos-rel mb-45">
                                <div className="section-text section-text-white pos-rel">
                                    <h5>Helping others live the life of their dreams</h5>
                                    <h6 className="white-color">SILVA METHOD</h6>
                                    <h5 className='mt-3 mb-3 white-color'>
                                    Since 1966, we've helped over 6 million people in 110 countries gain control over their minds and improve their lives in various meaningful ways.
                                    </h5>
                                    <h5 className='mt-3 mb-3 white-color'>
                                    Through a scientific and time-tested curriculum based on the findings of our late founder, Jose Silva, the man widely credited with bringing modern meditation to the West, we've helped our graduates spark profound and lasting positive changes in their careers, finances, health, emotional wellbeing, and relationships.
                                    </h5>
                                </div>
                            </div>
                            <div className="section-button section-button-left mb-30">
                                <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>Learn More</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-lg-6 col-md-8">
                            <div className="cta-satisfied">
                                <div className="single-satisfied">
                                <img src={contactimg1} alt="" style={{width:"100%",height:"300px",zIndex:"50000"}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeFact2;