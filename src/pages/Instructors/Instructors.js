import React from 'react'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import PortfolioTwoColumnGallery from '../PortfolioTwoColumn/PortfolioTwoColumnGallery/PortfolioTwoColumnGallery'
import CustomFooter from '../Home/Home/HomeFooter/Footer'


function Instructors() {
  return (
    <>
        <HomeHeader/>
        <CommonPageHeader title="INSTRUCTORS" subtitle="INSTRUCTORS" />
        <PortfolioTwoColumnGallery/>
       <CustomFooter/>
    </>
  )
}

export default Instructors