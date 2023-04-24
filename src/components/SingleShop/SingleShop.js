import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

// avatar={'https://silvamethod.com/adminsilva/uploads/profile_pic/3fe28-keith-harmeyer-photo-2.jpg'} 
//                                           key ={el.class_id} place={el.address} name={el.instructor_name} title={'Four Day Immersion Seminar'} 
//                                           date={`${el.start_date.split('-').reverse().join('-')} - ${el.end_date.split('-').reverse().join('-')}`} 
//                                           language={el.language} type={"Live"} extraRef={"https://silvamethod.com/events/livedetails/3049"} CourseId={el.class_id}

const SingleShop = ({data}) => {
        const {address,course_id,course_name,course_title,instructor_name,language,photo,start_date,end_date,delivery_method}= data;
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {address}
        </Tooltip>
      );

      const renderName=(props)=>(
        <Tooltip id="button-tooltip" {...props}>
          {instructor_name}
        </Tooltip>
      );

    // const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1280px)'})
    // const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    // const isMobile = useMediaQuery({minWidth: 320, maxWidth:480  })

    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="product mb-40" style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" , borderRadius:'15px'}}>
                    <div style={{borderRadius:'10px'}}>
                        <img src={photo} alt="" style={{borderTopLeftRadius:'15px', borderTopRightRadius:'15px',height:'400px',width:'100%'}}/>
                        <div>
                            {/* <a href="#"><i className="fas fa-shopping-cart"></i></a>
                            <a href="#"><i className="fas fa-heart"></i></a>
                            <Link to="/shopDetails"><i className="fas fa-expand"></i></Link> */}
                           
                            {(address!=null && address!= 'Online'&& address!='') && 
                            
                            <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 400 }}
                            overlay={renderTooltip} >
                            <h6 style={{padding:'5px',backgroundColor:'#7a12d4', color:'white', width:'50%', margin:'auto', textAlign:'center',marginTop:'-10px',opacity:'0.9',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis', marginTop:'10px'}}>{address}</h6></OverlayTrigger>}
                        </div>
                    </div>
                    <div className="product__content text-center pt-10">
                        <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 400 }}
                         overlay={renderName} >
                                <h5 style={{color:'#9d42b2',width:'150px',margin:'auto', whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis', marginTop:'10px'}}><span style={{color:'gray'}}>by</span> {instructor_name}</h5>
                        </OverlayTrigger>
                        <h6>{course_title}</h6>                        
                        <div className='pb-10'>
                            <span className="text-center">Date: {`${start_date.split("-").reverse().join('-')} - ${end_date.split("-").reverse().join()}`}</span>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between', padding:'1rem', border:'0.5px solid #f1f1f1'}}>
                        <p style={{ fontWeight:'bold'}}><span style={{color:'#7a12d4',}}>Language: </span>{language}</p>
                        <p style={{color:'#012237', fontWeight:'bold'}}>{delivery_method}</p>
                    </div>
                    <div style={{width:'100%', textAlign:'center', padding:'10px 10px', backgroundColor:'#7a12d4', borderBottomLeftRadius:'15px', borderBottomRightRadius:'15px',}}>
                     <Link to={`/events/livedetails/${course_id}`}><p style={{color:'white',}}>Course Details</p></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleShop;