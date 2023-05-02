import React from 'react'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import PortfolioTwoColumnGallery from '../PortfolioTwoColumn/PortfolioTwoColumnGallery/PortfolioTwoColumnGallery'
import CustomFooter from '../Home/Home/HomeFooter/Footer'
import InstructorBanner from './InstructorBanner'
import CustomCardInstructor from './CustomCardInstructor'
import SilvaInstructorsBanner from './SilvaInstructorsBanner'


function Instructors() {

  // document.title="Learn Silva Method from Certified Instructors | Contact Silva Instructors";

  return (
    <>
        <HomeHeader/>
        <CommonPageHeader title="INSTRUCTORS" subtitle="INSTRUCTORS" />
        {/* <PortfolioTwoColumnGallery/> */}
        <InstructorBanner />
        <CustomCardInstructor />
        <SilvaInstructorsBanner />
       <CustomFooter/>
    </>
  )
}

export default Instructors