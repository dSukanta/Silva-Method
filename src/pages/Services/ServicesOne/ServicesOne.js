import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import CalculateArea from './CalculateArea/CalculateArea';
import ServicesOneABout from './ServicesOneAbout/ServicesOneABout';
import ServicesOneHiringArea from './ServicesOneHiringArea/ServicesOneHiringArea';
import CustomFooter from '../../Home/Home/HomeFooter/Footer';

const ServicesOne = () => {
   return (
      <>
         <HomeHeader/>
         <CommonPageHeader title="Our Services" subtitle="Services" />
         <ServicesOneABout/>
         <CalculateArea/>
         <ServicesOneHiringArea/>
         <CustomFooter/>
      </>
   );
};

export default ServicesOne;