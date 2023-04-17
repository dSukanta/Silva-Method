import React, { useContext } from 'react';
import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService';
import HomeThreeHiring from '../../../../components/HomeThreeHiring/HomeThreeHiring';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AllContext';
import AboutInstructorCard from '../../../../components/AboutInstructorCard/AboutInstructorCard';
import AboutBannerCourse from '../../../../components/AboutBannerCourse/AboutBannerCourse';


const ServicesOneABout = () => {
   const { isDesktopOrLaptop,
      isBigScreen,
      isTabletOrMobile,
      isPortrait,
      isRetina } = useContext(AuthContext);

   return (
      <>
         <section className="about-area pt-120 pb-90">
            <div className="container">
               <div className="row ">
                  <div className="col-xl-6 col-lg-6 col-md-12">
                     <div className="section-title section-title-m-0 pos-rel mb-50 text-end">
                        <div className="section-icon">
                           <img className="section-back-icon back-icon-right" src="img/section/section-back-icon.png" alt="" />
                        </div>
                        <div className="section-text section-text-small pos-rel d-flex justify-content-start flex-column">
                           {/* <h5>health care facility</h5> */}

                           <h1 style={{ textAlign: "start" }}>A 50-Year Old
                              Global Organization</h1>
                           <Link to="/contact"
                              style={{ maxWidth: (isDesktopOrLaptop || isBigScreen) ? "50%" : "70%" }}
                              className="primary_btn btn-icon ml-0"><span>+</span>Start learning now</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                     <div className="facalty-text mb-50">
                        <p>We believe the key to the next stage of human evolution lies in the mind's hidden potential.
                           Our mission is to awaken this potential for everyone on the planet.
                           Silva Method is a program backed by Science and Research. We have spent nearly 50 years researching, experimenting, and collaborating with leading scientists, researchers, and personal growth leaders.</p>
                     </div>
                  </div>
               </div>
               <div className="row justify-content-center" style={{marginBottom:"50px",marginTop:"40px" }}>
                  <h2 style={{ textAlign: "center"}}>Meet the teachers
                     With Upcoming Classes</h2>
                    <AboutInstructorCard />
               </div>
               <AboutBannerCourse />
            </div>
         </section>
      </>
   );
};

export default ServicesOneABout;