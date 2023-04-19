import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

const HomeSIngleService = ({ src,redirectRef}) => {
   const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1280px)'})
   const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
   const isMobile = useMediaQuery({minWidth: 320, maxWidth:480  })

   return (
      <>
        <div className='ovrlay-card'>
            <img src={src} className='overlay-card-image'/>
            
         <div className='overlay-section'>
            <div className='overlay-text' style={{fontSize: isMobile? '10px':'20px'}}>
                  Instructor Name
                  <br/>
                  <br/>
                  Gabriel Ostend
                  <br/>
                  <br/>
                  <a href={redirectRef}>View Details</a>
            </div>
         </div>
        </div>
      </>
   );
};

export default HomeSIngleService;