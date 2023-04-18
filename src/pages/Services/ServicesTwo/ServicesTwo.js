import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import CalculateArea from '../ServicesOne/CalculateArea/CalculateArea';
import ServicesOneHiringArea from '../ServicesOne/ServicesOneHiringArea/ServicesOneHiringArea';
import ServicesTwoAbout from './ServicesTwoAbout/ServicesTwoAbout';
import ServicesTwoArea from './ServicesTwoArea/ServicesTwoArea';
import CustomFooter from '../../Home/Home/HomeFooter/Footer';

const ServicesTwo = () => {
    return (
        <>
            <HomeHeader />
            <CommonPageHeader title="Our Services" subtitle="Services" />
            <ServicesTwoAbout/>
            <ServicesTwoArea/>
            <CalculateArea />
            <ServicesOneHiringArea />
            <CustomFooter/>
        </>
    );
};

export default ServicesTwo;