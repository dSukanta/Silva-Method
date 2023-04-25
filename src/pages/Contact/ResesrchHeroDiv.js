import React from "react";
import { useMediaQuery } from "react-responsive";

function ResesrchHeroDiv() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1280px)'})
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 999 })
    const isMobile = useMediaQuery({minWidth: 200, maxWidth:480  })

  return (
    <div style={{backgroundColor:"#9b37f2",}}>
      <div style={{display:'flex', gap:'1rem', flexDirection:(isMobile||isTablet)? 'column':'row', width:(isMobile||isTablet)? '100%':'70%', margin:'auto', padding:'15px',}}>
        <div>
          <h2 style={{padding:'20px 0px', color:'white'}}>What The Scientific Community Has To Say About The Silva Method</h2>
          <p style={{color:'white'}}>
            OIn the past 5 decades, The Silva Method has touched over 6 million lives in 110 countries, and is used by everyone from celebrities to high-flying CEOs to regular people in search of personal breakthroughs.
          </p>
          <p style={{color:'white'}}>Our books have sold over 12 million copies, our seminars continue to sell out across the world, and our findings have been endorsed and practiced by many of the world's most respected scientists, doctors, thought leaders and spiritual teachers.</p>
        </div>
      <div style={{width:'100%', textAlign:'center'}}>
      <img
          src="https://silvamethod.com/assets/images/research-silvamethod.webp"
          alt="" width='100%'
        />
        <h3 style={{marginTop:'-35px', color:'white'}}>More than <span style={{color:'#f16101'}}>7840</span> students are registered</h3>
     </div>
        
      </div>
    </div>
  );
}

export default ResesrchHeroDiv;
