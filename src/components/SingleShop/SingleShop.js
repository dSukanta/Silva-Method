import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

const SingleShop = ({avatar,place,name,title,date,language,type,extraRef}) => {

    // const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1280px)'})
    // const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    // const isMobile = useMediaQuery({minWidth: 320, maxWidth:480  })

    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="product mb-40" style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" , borderRadius:'15px'}}>
                    <div style={{borderRadius:'10px'}}>
                        <img src={avatar} alt="" style={{borderTopLeftRadius:'15px', borderTopRightRadius:'15px',height:'400px',width:'100%'}}/>
                        <div>
                            {/* <a href="#"><i className="fas fa-shopping-cart"></i></a>
                            <a href="#"><i className="fas fa-heart"></i></a>
                            <Link to="/shopDetails"><i className="fas fa-expand"></i></Link> */}
                            <h6 style={{padding:'5px',backgroundColor:'#7a12d4', color:'white', width:'50%', margin:'auto', textAlign:'center',marginTop:'-10px',opacity:'0.9'}}>{place}</h6>
                        </div>
                    </div>
                    <div className="product__content text-center pt-10">
                        <h5 className="text-center ms-2" style={{color:'#9d42b2'}}><span style={{color:'gray'}}>by</span> {name}</h5>
                        <h6>{title}</h6>                        
                        <div className='pb-10'>
                            <span className="text-center">Date: {date} </span>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between', padding:'1rem', border:'0.5px solid #f1f1f1'}}>
                        <p style={{ fontWeight:'bold'}}><span style={{color:'#7a12d4',}}>Language: </span>{language}</p>
                        <p style={{color:'#012237', fontWeight:'bold'}}>{type}</p>
                    </div>
                    <div style={{width:'100%', textAlign:'center', padding:'20px 10px', backgroundColor:'#7a12d4', borderBottomLeftRadius:'15px', borderBottomRightRadius:'15px',}}>
                        <a href={extraRef} style={{color:'white',}}>Course Details</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleShop;