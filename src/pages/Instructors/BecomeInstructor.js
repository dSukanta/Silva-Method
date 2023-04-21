import React from 'react'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import CustomFooter from '../Home/Home/HomeFooter/Footer';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import BecomeInstructorBanners from './BecomeInstructorBanners';

function BecomeInstructor() {
  return (
    <div>
        <HomeHeader/>
        <CommonPageHeader title="BECOME INSTRUCTOR" subtitle="BECOME INSTRUCTOR" />
        <BecomeInstructorBanners />
        <CustomFooter/>
    </div>
  )
}

export default BecomeInstructor