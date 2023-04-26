import React from 'react'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import DoctorsTwoTeamArea from '../Doctors/DoctorsTwo/DoctorsTwoTeamArea/DoctorsTwoTeamArea'
import HomeFact from '../Home/Home/HomeFact/HomeFact'
import CounterArea from '../Doctors/DoctorsOne/CounterArea/CounterArea'
import CustomFooter from '../Home/Home/HomeFooter/Footer'
import SeminarBanner from './SeminarBanner'
import { ParallaxBanner } from 'react-scroll-parallax'
import SeminarCustomCard from './SeminarCustomCard'
import SeminarReviewsSection from './SeminarReviewsSection'
import SeminarJoinSection from './SeminarJoinSection'

function Seminars() {
  return (
    <div>
      <HomeHeader />
      <CommonPageHeader title="SEMINARS" subtitle="SEMINARS" />


      <SeminarBanner title="FOR 50 YEARS WE’VE BEEN HOSTING A VARIETY OF SILVA PROGRAMS ACROSS THE WORLD."
        text="In our live seminars, you’ll experience our trademark in-depth and personalized training system in an atmosphere of lively exchange and experiential learning with people from all walks of life. Take a meditative retreat with a Silva Seminar and get results faster!"
        btnText="FIND AN EVENT NOW"
      />

      <SeminarCustomCard />

      <SeminarReviewsSection />

      <SeminarJoinSection
      />

      {/* <DoctorsTwoTeamArea /> */}
      {/* <HomeFact /> */}
      <CounterArea />
      <CustomFooter />
    </div>
  )
}

export default Seminars