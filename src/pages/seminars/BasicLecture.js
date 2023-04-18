import React from 'react';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import DoctorOneTeamArea from '../Doctors/DoctorsOne/DoctorOneTeamArea/DoctorOneTeamArea';
import HomeFact from '../Home/Home/HomeFact/HomeFact';
import CounterArea from '../Doctors/DoctorsOne/CounterArea/CounterArea';
import CustomFooter from '../Home/Home/HomeFooter/Footer';


const BasicLecture = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="BASIC LECTURE SERIES" subtitle="Doctor" />
            <DoctorOneTeamArea/>
            <HomeFact/>
            <CounterArea/>
            <CustomFooter/>
        </>
    );
};

export default BasicLecture;