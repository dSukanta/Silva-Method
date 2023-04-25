import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

const SingleCourse = ({data}) => {
   //console.log(data);

   const {web_image,course_id,course_title,teacher_id,teacher_name}= data;


   const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1280px)'})
   const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
   const isMobile = useMediaQuery({minWidth: 320, maxWidth:480  })

   return (
      <>
        <div className='ovrlay-card p-4'>
            <img src={web_image} className='overlay-card-image'/>
            
         <div className='overlay-section'>
            <div className='overlay-text' style={{fontSize: isMobile? '10px':'20px'}}>
                  <Link to={`/blogLeftSideBar`}><p style={{color:'white',}}>Read More</p></Link>
            </div>
         </div>
        </div>
      </>
   );
};

export default SingleCourse;