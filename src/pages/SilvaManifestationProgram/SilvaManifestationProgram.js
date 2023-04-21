import React, { useEffect, useRef, useState } from 'react'
import StickyNavbar from './StickyNavbar'
import MainHeroSection from './MainHeroSection'
import MainTabs from './MainTabs'
import LeaveCommentBox from './LeaveCommentBox'
import SocialShareButtons from './SocialShareButtons'

function SilvaManifestationProgram() {
    window.addEventListener("scroll",function(){
        console.log("scrolling")
    })

    return (
        <div className="mainlandingpage" style={{ width: "100vw",minHeight:"100vh",paddingBottom:"20px" }}>
                <StickyNavbar />
            <div className='container'>
                <MainHeroSection />
                <MainTabs />
                <LeaveCommentBox />
                <SocialShareButtons />
            </div>
            
        </div>

    )
}

export default SilvaManifestationProgram