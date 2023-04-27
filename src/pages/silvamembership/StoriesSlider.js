import React, { useEffect, useState } from 'react'
import ReviewsContainer from '../../components/DifferenceSection/ReviewsContainer'
import ct from "countries-and-timezones";

function StoriesSlider() {
    const [country,setCountry] = useState();

    useEffect(()=>{
        const country = ct.getCountryForTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone).name;
        setCountry(country);
    },[])
  return (
    <div className='reviewslider' style={{margin:"100px 0px 50px 0"}}>
        <ReviewsContainer title={'Stories From'+' '+country} />
    </div>
  )
}

export default StoriesSlider