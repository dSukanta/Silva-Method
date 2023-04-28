import React from 'react'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import CustomFooter from '../Home/Home/HomeFooter/Footer';
import CountrySection from '../../components/CountrySection/CountrySection';

function FindInstructor() {

  // document.title="Find Your Silva Method Certified Instructors | CSMI";

  return (
    <div>
        <HomeHeader/>
        <CountrySection/>
        <CustomFooter/>
    </div>
  )
}

export default FindInstructor