import React from 'react';
import { Link } from 'react-router-dom';
import foundimg1 from "../../images/newimgs/jose.png"
import foundimg2 from "../../images/newimgs/diana.png"
import { useMediaQuery } from 'react-responsive';

const TrainingPrograms = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })

    return (
        <>
            <section className="fact-area fact-map pink-bg pos-rel pt-115 pb-60 mb-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <div className="cta-satisfied" style={{ width: "100%" }}>
                                <div className="section-title pos-rel mb-45">
                                    <div className="w-100">
                                        <h2 className='white-color'>WHICH OF OUR HOME TRAINING PROGRAMS SUITS YOU BEST?</h2>
                                        <p className='white-color mt-4' style={{ fontSize: "1.2rem" }}>
                                            Since 2004, over 21,070 people have used our home training programs. Everyone, from celebrities to high-flying professionals to everyday people in search of a breakth

                                            activate your natural healing ability or awaken your intuitive senses, you’re sure to find one that fits your needs.
                                        </p>
                                       <div className='row gap-3'>
                                       <div className="col-sm-12 col-md-4 section-button section-button-left">
                                            <Link to="/contact" className={isDesktopOrLaptop ? "primary_btn2" : "primary_btn_mobile"}>Silva Life System</Link>
                                        </div>
                                        <div className="col-sm-12 col-md-4 section-button section-button-left">
                                            <Link to="/contact" className={isDesktopOrLaptop ? "primary_btn2" : "primary_btn_mobile"}>Silva Intuition System
                                            </Link>
                                        </div>
                                        
                                       </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TrainingPrograms;