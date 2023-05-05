import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

const HomeSingleClass = ({data}) => {
   //console.log(data);

   const {instructor_name,course_id}= data;


   const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1280px)'})
   const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
   const isMobile = useMediaQuery({minWidth: 320, maxWidth:480  })

   return (
      <>
        <div className='ovrlay-card'>
            <img src='https://silvamethod.com/assets/images/silva_instructor_pooja_arora.jpeg' className='overlay-card-image'/>
            
         <div className='overlay-section'>
            <div className='overlay-text' style={{fontSize: isMobile? '10px':'20px'}}>
                  Instructor Name
                  <br/>
                  <br/>
                  {instructor_name}
                  <br/>
                  <br/>
                  <Link to={`/events/livedetails/${course_id}`}><p style={{color:'white',}}>Show more details</p></Link>
            </div>
         </div>
        </div>
      </>
   );
};

export default HomeSingleClass;