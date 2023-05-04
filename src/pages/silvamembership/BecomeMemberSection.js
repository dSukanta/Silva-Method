import React, { useContext, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import ct from "countries-and-timezones";
import ReactPlayer from 'react-player';
import { AuthContext } from '../../context/AllContext';

function BecomeMemberSection() {
    const [country,setCountry] = useState()
    const {userData} = useContext(AuthContext);
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    useEffect(()=>{
        const country = ct.getCountryForTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone).name;
        setCountry(country);
    },[])
    return (
        <div className='d-flex flex-column justify-content-center align-items-center align-content-center my-5'>
            <p className='text-center' style={{fontSize:isDesktopOrLaptop?"3.5rem":"2rem",fontWeight:"700",color:"black"}}>Silva Methods Membership</p>
            <p className='my-4 text-center' style={{fontSize:isDesktopOrLaptop?"1.5rem":"1.1rem",fontWeight:"500",color:"black"}}>Every Day in Every Way Become Better and Better at Living Your Full Potential.</p>
            <p className='text-center' style={{fontSize:isDesktopOrLaptop?"1.5rem":"1.1rem",fontWeight:"700",color:"black"}}>Now Available in {country}</p>
            <ReactPlayer
            width={isDesktopOrLaptop?"700px":isTablet?"500px":"350px"}
            url={"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
            playing
            controls
            />
            <button className='primary_btn2' style={{marginTop:isDesktopOrLaptop?"25px":"20px"}} disabled={userData && userData.strip_payment_status==="paid"}>
                {userData && userData.strip_payment_status==="paid" && `You have subscribed to ${userData.subscription_cycle}ly plan`}
                {
                    userData && !userData.strip_payment_status && "Become a Member Now"
                }
            </button>
        </div>
    )
}

export default BecomeMemberSection