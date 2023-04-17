import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import CalculateArea from './CalculateArea/CalculateArea';
import ServicesOneABout from './ServicesOneAbout/ServicesOneABout';
import ServicesOneHiringArea from './ServicesOneHiringArea/ServicesOneHiringArea';
import AboutTopSection from '../../../components/AboutTopSection/AboutTopSection';
import ImageGallerySection from '../../../components/ImageGallerySection/ImageGallerySection';

const ServicesOne = () => {
   return (
      <>
         <HomeHeader/>
         {/* <CommonPageHeader title="About Us" subtitle="Services" /> */}
         <AboutTopSection />
         <ImageGallerySection />
         <ServicesOneABout/>
         <CalculateArea/>
         <ServicesOneHiringArea/>
         <Footer/>
      </>
   );
};

export default ServicesOne;