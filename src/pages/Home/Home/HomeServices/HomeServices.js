import React from 'react';
import HomeSIngleService from '../../../../components/HomeSIngleService/HomeSIngleService';

const HomeServices = () => {
   return (
      <>
         <section className="servcies-area gray-bg pt-115 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section-title text-center pos-rel mb-75">
                        {/* <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                        </div> */}
                        <div className="section-text pos-rel home_ser_title">
                           {/* <h5>Upcoming Live & Online Classes</h5> */}
                           <h2>Upcoming Live & Online Classes</h2>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row row-cols-2 row-cols-lg-3">

                  <HomeSIngleService src={"https://silvamethod.com/assets/images/silva_instructor_gabriel_ostend.jpeg"} />
                  <HomeSIngleService src={"https://silvamethod.com/assets/images/silva_instructor_ken_coscia.jpeg"}/>
                  <HomeSIngleService src={"https://silvamethod.com/assets/images/silva_instructor_pooja_arora.jpeg"} />
                  <HomeSIngleService src={"https://silvamethod.com/assets/images/silva_instructor_christine_haley.jpeg"}/>
                  <HomeSIngleService src={"https://silvamethod.com/assets/images/silva_instructor_richard_siena.jpeg"}/>
                  <HomeSIngleService src={"https://silvamethod.com/assets/images/silva_instructor_ginger_csom.jpg"}/>

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeServices;