import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeFact from '../../Home/Home/HomeFact/HomeFact';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import CounterArea from './CounterArea/CounterArea';
import DoctorOneTeamArea from './DoctorOneTeamArea/DoctorOneTeamArea';
import CustomFooter from '../../Home/Home/HomeFooter/Footer';

const DoctorsOne = () => {
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

export default DoctorsOne;