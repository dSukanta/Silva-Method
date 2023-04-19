import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import DoctorDetailsArea from './DoctorDetailsArea/DoctorDetailsArea';
import CustomFooter from '../../Home/Home/HomeFooter/Footer';

const DoctorDetails = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="SILVA LIFE SYSTEM" subtitle="Details" />
            <DoctorDetailsArea/>
            <CustomFooter/>
        </>
    );
};

export default DoctorDetails;