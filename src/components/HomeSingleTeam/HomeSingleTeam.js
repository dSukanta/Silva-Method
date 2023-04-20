import React from 'react';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const HomeSingleTeam = ({data}) => {
  
   console.log(data);

   const {web_image,teacher_name,course_title,course_id}= data;

   const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        {course_title}
      </Tooltip>
    );

    const renderSubTitle=(props)=>(
      <Tooltip id="button-tooltip" {...props}>
        {teacher_name}
      </Tooltip>
    );
   return (
      <>
         <div>
            <div>
               <div>
                  <img src={web_image? web_image:'img/logo/title-logo'} alt=''/>
                  {/* <Link className="team-link" to="/doctorDetails">+</Link> */}
               </div>
               <div>
               <OverlayTrigger
               placement="top"
               delay={{ show: 250, hide: 400 }}
               overlay={renderTooltip} >
                  <h6 style={{width:'150px', whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis', marginTop:'10px'}}>{course_title}</h6>
               </OverlayTrigger>
               <OverlayTrigger
               placement="top"
               delay={{ show: 250, hide: 400 }}
               overlay={renderSubTitle} >
                     <p style={{width:'150px', whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{teacher_name}</p>
               </OverlayTrigger>

              
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