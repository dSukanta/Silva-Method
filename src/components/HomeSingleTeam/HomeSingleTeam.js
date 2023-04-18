import React from 'react';
import { Link } from 'react-router-dom';

const HomeSingleTeam = ({src,title,subtitle}) => {
   return (
      <>
         <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="team-box text-center mb-60">
               <div className="team-thumb mb-45 pos-rel">
                  <img src={src} alt=''/>
                  {/* <Link className="team-link" to="/doctorDetails">+</Link> */}
               </div>
               <div className="team-content">
                  <h4>{title}</h4>
                  <h6>{subtitle}</h6>
               </div>
               <div>
                  <button className='buy-now-btn'>Buy Now</button>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSingleTeam;