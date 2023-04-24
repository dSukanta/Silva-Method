import React from 'react';
import { Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const ProductSingle = ({src,title}) => {
  

   const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        {title}
      </Tooltip>
    );

    // const renderSubTitle=(props)=>(
    //   <Tooltip id="button-tooltip" {...props}>
    //     {subtitle}
    //   </Tooltip>
    // );
   return (
      <>
         <div className='m-2'>
            <div>
               <div>
                  <img src={src} style={{width:"100%",height:"400px",objectFit:"cover"}} alt=''/>
                  {/* <Link className="team-link" to="/doctorDetails">+</Link> */}
               </div>
               <div>
               {/* <OverlayTrigger
               placement="top"
               delay={{ show: 250, hide: 400 }}
               overlay={renderTooltip} >
                  <h6 style={{width:'150px', whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis', marginTop:'10px'}}>{title}</h6>
               </OverlayTrigger> */}
               <h6 style={{wordWrap:"break-word",textOverflow:'ellipsis', marginTop:'10px'}}>{title}</h6>

               {/* <OverlayTrigger
               placement="top"
               delay={{ show: 250, hide: 400 }}
               overlay={renderSubTitle} >
                     <p style={{width:'150px', whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{subtitle}</p>
               </OverlayTrigger> */}
               </div>
               <div>
                  <button className='primary_btn_mobile'>Start Learning Now</button>
               </div>
            </div>
         </div>
      </>
   );
};

export default ProductSingle;