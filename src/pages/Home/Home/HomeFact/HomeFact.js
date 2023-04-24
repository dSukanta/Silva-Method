import React from 'react';
import { Link } from 'react-router-dom';
import foundimg1 from "../../../../images/newimgs/jose.png"
import foundimg2 from "../../../../images/newimgs/diana.png"
import { useMediaQuery } from 'react-responsive';

const HomeFact = () => {
   const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
   const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
   const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
   return (
      <>
         <section className="fact-area fact-map pink-bg pos-rel pt-115 pb-60">
            <div className="container">
               <div className="row">
                  <div className="col-xl-5 col-lg-5 col-md-10">
                     <div className="section-title pos-rel mb-45">
                        <div className="section-text section-text-white pos-rel">
                           <h2 className='white-color mb-4'>Bringing conscious practices to a world of endeavors</h2>
                           <h5 className="white-color" style={{ lineHeight: "30px" }}>
                              Our curriculum, a unique combination of Alpha and Theta level mind exercises,
                              creative visualizations, habit control, and positive programming methods has been endorsed by various thought leaders and scientists.
                              This includes personal growth icons like Jack Canfield, Dr. Wayne Dyer, and Shakti Gawain; bestselling author, Richard Bach; award-winning neuroscientist,
                              Mark Robert Waldman; and oncology research pioneer, Dr. O. Carl Simonton.
                           </h5>
                        </div>
                     </div>
                     <div className="section-button section-button-left mb-30">
                        <Link to="/contact" className="primary_btn2 ml-0">Learn More</Link>
                     </div>
                  </div>
                  <div className="col-lg-7 col-md-8">
                     <div className="cta-satisfied" style={{ width: "100%" }}>
                        <div className="section-title pos-rel mb-45">
                           <div className="w-100">
                              <h2 className='white-color'>Know More about our Founders</h2>
                              <div className='row gap-4' style={{ marginTop: "60px",marginLeft:"20px" }}>
                                 <div className="col-5">
                                    <div className='d-flex justify-content-center align-items-center flex-column gap-4'>
                                       <div>
                                          <img className="rounded-circle shadow-4-strong" alt="avatar2" src={foundimg1} style={{
                                             width: isDesktopOrLaptop ? "200px" : "100px",
                                             height: isDesktopOrLaptop ? "200px" : "100px"
                                          }} />
                                       </div>
                                       <div className="section-button section-button-left">
                                          <Link to="/contact" className={isDesktopOrLaptop?"primary_btn2":"primary_btn_mobile"}>Read About Jose</Link>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-5">
                                    <div className='d-flex justify-content-center align-items-center flex-column gap-4'>
                                          <img className="rounded-circle shadow-4-strong" alt="avatar2" src={foundimg2} style={{
                                             width: isDesktopOrLaptop ? "200px" : "100px",
                                             height: isDesktopOrLaptop ? "200px" : "100px"
                                          }} />
                                       <div className="section-button section-button-left">
                                          <Link to="/contact" className={isDesktopOrLaptop?"primary_btn2":"primary_btn_mobile"}>Read About Diana</Link>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        {/* <div className="single-satisfied mb-50">
                           <h1>100+</h1>
                           <h5><i className="far fa-thumbs-up"></i> World Awards</h5>
                           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua.</p>
                        </div> */}


                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeFact;