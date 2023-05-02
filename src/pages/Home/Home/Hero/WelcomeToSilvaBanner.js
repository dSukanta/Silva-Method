import React from 'react'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'
import {AiFillCloseCircle} from "react-icons/ai";

function WelcomeToSilvaBanner() {
    const [showShow,setShouldShow] = useState(true);
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    if(!showShow){
        return "";
    }
    return (
        <div className="container" style={{height:"auto",marginBottom:"30px",padding:isDesktopOrLaptop?"20px":"30px"}}>
        <div className='row justify-content-start align-items-center gap-5' style={{
           backgroundColor: "rgba(0,63,255,0.1)",
           padding: "15px 10px 15px 10px",
           borderRadius: "20px"
       }}>
           
           <section className='col-sm-12 col-md-5' style={{position:(isMobile || isTablet)?"relative":""}}>

           {
               (isMobile || isTablet) && (
                   <AiFillCloseCircle style={{position:"absolute",right:"0"}} color='white' size={30} onClick={()=>setShouldShow(false)} />
               )
              }
               <ReactPlayer
                   light="https://images.unsplash.com/photo-1542681575-352258e0c854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                   width={"100%"}
                   url={"https://file-examples.com/storage/fe644084cb644d3709528c4/2017/04/file_example_MP4_480_1_5MG.mp4"}
                   controls
                   muted
                   config={{
                       file: {
                           attributes: {
                               controlsList: 'nodownload'
                           }
                       }
                   }}
               />
           </section>
           <section className='col-sm-12 col-md-5' style={{position:isDesktopOrLaptop?"relative":""}}>
              
              {
               isDesktopOrLaptop && (
                   <AiFillCloseCircle style={{position:"absolute",top:"-130",right:"-170"}} onClick={()=>setShouldShow(false)} size={30} />
               )
              }

               <h3>Welcome to Silva Method</h3>
               <p className='text-dark'>Watch this video to learn how to get started</p>
               <button className='primary_btn3'>Discover Programs</button>
               <button className='primary_btn3 mx-3' style={{marginTop:isMobile?"20px":"0px"}}>Get Membership</button>

           </section>

       </div>
      </div>
    )
}

export default WelcomeToSilvaBanner