import React, { useState } from "react";
import {AiFillMail} from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive'


function Newsletter() {

  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1280px)'})
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
  const isMobile = useMediaQuery({minWidth: 320, maxWidth:480  })

  return (
    <div className="newsletter-container" style={{height: (isMobile||isTablet) && '450px'}}>
    <div style={{display:'grid', gridTemplateColumns:isDesktopOrLaptop? '1fr 1fr 1fr':'1fr', gap:'1rem', padding:'70px 50px', justifyContent:'center', alignItems:'center',textAlign:'center', width:(isMobile||isTablet)?'90%':'70%', margin:'auto', backgroundColor:'white',boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px", borderTop:'5px solid #8019da', borderRadius:'5px', height:(isMobile||isTablet) && '400px'}}>
        <h3>Get latest courses updates by signing up</h3>
          <input type="text" placeholder="Enter Your Email" style={{width:'100%', height:'55px', borderRadius:'15px', border:'0.5px solid gray'}} />
        <button style={{width:'250px',height:'55px',borderRadius:'15px', backgroundColor:'#8019da', border:'none', textAlign:'center', fontWeight:'bold', fontSize:'20px', color:'white',}}><AiFillMail style={{fontSize:'25px', color:'white'}}/> Subscribe</button>
    </div>
    </div>
  );
}

export default Newsletter;
