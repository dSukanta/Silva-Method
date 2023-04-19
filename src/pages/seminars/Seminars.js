import React from 'react'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import DoctorsTwoTeamArea from '../Doctors/DoctorsTwo/DoctorsTwoTeamArea/DoctorsTwoTeamArea'
import HomeFact from '../Home/Home/HomeFact/HomeFact'
import CounterArea from '../Doctors/DoctorsOne/CounterArea/CounterArea'
import CustomFooter from '../Home/Home/HomeFooter/Footer'

function Seminars() {
  return (
    <div>
        <HomeHeader/>
        <CommonPageHeader title="SEMINARS" subtitle="Doctor" />
        <DoctorsTwoTeamArea/>
        <HomeFact />
        <CounterArea/>
        <CustomFooter/>
    </div>
  )
}

export default Seminars