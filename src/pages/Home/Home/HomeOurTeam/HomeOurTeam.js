import React from 'react';
import { Link } from 'react-router-dom';
import HomeSingleTeam from '../../../../components/HomeSingleTeam/HomeSingleTeam';
import { useMediaQuery } from 'react-responsive'


const HomeOurTeam = () => {
   const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1280px)'})
   const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
   const isMobile = useMediaQuery({minWidth: 320, maxWidth:480  })

   return (
      <>
         <section className="team-area pt-115 pb-5">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-10">
                     <div className="section-title pos-rel mb-75">
                        {/* <div className="section-icon">
                           <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt=""/>
                        </div> */}
                        <div className="section-text pos-rel">
                           {/* <h5>Our Team</h5> */}
                           <h2>Check our Unique Products</h2>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-5">
                     {/* <div className="section-button text-end d-none d-lg-block pt-80 team_btn">
                        <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>Make Appointment</Link>
                     </div> */}
                  </div>
               </div>
               <div style={{display:'grid', gridTemplateColumns: isMobile? '1fr 1fr':'1fr 1fr 1fr 1fr', gap:"1rem"}}>

                  <HomeSingleTeam src={"https://silvamethod.com/assets/images/buy-silva-mind-control-book.webp"} title="THE SILVA MIND CONTROL METHOD" subtitle="by Jose Silva and Philip Miele" />
                  <HomeSingleTeam src={"https://silvamethod.com/assets/images/Silva%20method%20Life%20System%20Homestudy%20Program.webp"} title="Silva Life System - Home Study Programs" subtitle="by Silva Method" />
                  <HomeSingleTeam src={"https://silvamethod.com/assets/images/i-have-a-lunch.webp"} title="I Have a Hunch: The Autobiography of Jose Silvan" subtitle="by Jose Silva" />
                  <HomeSingleTeam src={"https://silvamethod.com/assets/images/pathways-to-personal-freedom-using-the-silva-method.webp"} title="Pathways to Personal Freedom using the Silva Method" subtitle="by Diana Silva and Robert Deutchmant" />
                  <HomeSingleTeam src={"https://silvamethod.com/assets/images/silva-long-relax-exercise.webp"} title="Silva Long Relax Exercisee" subtitle="by Jose Silva (Digital)" />
                  <HomeSingleTeam src={"https://silvamethod.com/assets/images/theta-sound-meditation.webp"} title="Theta Sound Meditation" subtitle="by Silva Method" />
                  <HomeSingleTeam src={"https://silvamethod.com/assets/images/alpha-sound.webp"} title="Alpha Sound Digital" subtitle="by Silva Method" />
                  <HomeSingleTeam src={"https://silvamethod.com/assets/images/getting-well-again.jpg"} title="Getting Well Again" subtitle="by O. CARL SIMONTON, M.D." />

               </div>
            </div>
         </section>
      </>
   );
};

export default HomeOurTeam;