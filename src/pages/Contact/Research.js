import React from 'react'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import ServicesDetailsArea from '../Services/ServicesDetails/ServicesDetailsArea/ServicesDetailsArea'
import CustomFooter from '../Home/Home/HomeFooter/Footer'

function Research() {
  return (
    <div>
        <HomeHeader/>
        <CommonPageHeader title="Research" subtitle="Details" />
        <ServicesDetailsArea/>
        <CustomFooter/>
    </div>
  )
}

export default Research