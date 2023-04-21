import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import {FaArrowCircleUp} from 'react-icons/fa';

function BottomToTop() {
   const [visible, setVisible] = useState(false)

   const toggleVisible = () => {
    console.log("Scrolling")
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  return (
    <>
    <div style={{
         position: "fixed", 
         width: "100%",
         left: "50%",
         bottom: "50px",
         height: "20px",
         fontSize: "3.5rem",
         zIndex: "10000",
         cursor: "pointer",
         color: "#a439f5"
    }}>
    <FaArrowCircleUp onClick={scrollToTop} size={40} 
     style={{display: visible ? 'inline' : 'none'}}
      />
    </div>
    <Outlet />
    </>
  )
}

export default BottomToTop