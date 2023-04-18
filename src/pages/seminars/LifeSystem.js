import React from 'react'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import DoctorDetailsArea from '../Doctors/DoctorDetails/DoctorDetailsArea/DoctorDetailsArea'
import CustomFooter from '../Home/Home/HomeFooter/Footer'

function LifeSystem() {
  return (
    <div>
            <HomeHeader/>
            <CommonPageHeader title="SILVA LIFE SYSTEM" subtitle="Details" />
            <DoctorDetailsArea/>
            <CustomFooter/>
    </div>
  )
}

export default LifeSystem