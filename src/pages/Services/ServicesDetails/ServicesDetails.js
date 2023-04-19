import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import ServicesDetailsArea from './ServicesDetailsArea/ServicesDetailsArea';
import CustomFooter from '../../Home/Home/HomeFooter/Footer';

const ServicesDetails = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Research" subtitle="Details" />
            <ServicesDetailsArea/>
            <CustomFooter/>
        </>
    );
};

export default ServicesDetails;