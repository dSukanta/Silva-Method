import React from 'react';
import { Link } from 'react-router-dom';
import useGlobalContext from '../../hooks/useGlobalContext';

const HomeHeroSingleSlide = ({ bg_className}) => {
   const videoPopup = useGlobalContext();
   const {setIsOpen} = videoPopup
   return (
      <>
         <div className={`single-slider slider-height d-flex align-items-center slider_bg_${bg_className}`}>
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-8 col-md-10">
                     <div className="hero-text">
                        <div className="hero-slider-caption ">
                       

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeHeroSingleSlide;