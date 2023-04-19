import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import CalculateArea from './CalculateArea/CalculateArea';
import ServicesOneABout from './ServicesOneAbout/ServicesOneABout';
import ServicesOneHiringArea from './ServicesOneHiringArea/ServicesOneHiringArea';
import AboutTopSection from '../../../components/AboutTopSection/AboutTopSection';
import ImageGallerySection from '../../../components/ImageGallerySection/ImageGallerySection';
import AboutCounter from '../../AboutUs/AboutCounter/AboutCounter';
import AboutCounter2 from '../../AboutUs/AboutCounter/AboutCounter2';
import ImageTextSection from '../../../components/ImageTextSection/ImageTextSection';
import DifferenceSection from '../../../components/DifferenceSection/DifferenceSection';
import ReviewsContainer from '../../../components/DifferenceSection/ReviewsContainer';
import BookContent from '../../../components/Bookcontent/BookContent';

const ServicesOne = () => {
   
   return (
      <>
         <HomeHeader/>
         {/* <CommonPageHeader title="About Us" subtitle="Services" /> */}
         <AboutTopSection />
         <ImageGallerySection />
         <ServicesOneABout/>
         {/* <CalculateArea/> */}
         {/* <ServicesOneHiringArea/> */}
         <ImageTextSection />
         <AboutCounter2 />
         <DifferenceSection />
         <ReviewsContainer />
         <BookContent />
         <Footer/>
      </>
   );
};

export default ServicesOne;