import React from 'react';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import AboutTopSection from '../../components/AboutTopSection/AboutTopSection';
import ImageGallerySection from '../../components/ImageGallerySection/ImageGallerySection';
import ServicesOneABout from '../Services/ServicesOne/ServicesOneAbout/ServicesOneABout';
import ImageTextSection from '../../components/ImageTextSection/ImageTextSection';
import AboutCounter2 from './AboutCounter/AboutCounter2';
import DifferenceSection from '../../components/DifferenceSection/DifferenceSection';
import ReviewsContainer from '../../components/DifferenceSection/ReviewsContainer';
import BookContent from '../../components/Bookcontent/BookContent';
import CustomFooter from '../Home/Home/HomeFooter/Footer';

const AboutUs = () => {

   // document.title="About Silva Method";
   
   
   return (
      <>
         <HomeHeader/>
         <AboutTopSection/>
         <ImageGallerySection/>
         <ServicesOneABout/>
         {/* <CalculateArea/> */}
         {/* <ServicesOneHiringArea/> */}
         <ImageTextSection />
         <AboutCounter2/>
         <DifferenceSection />
         <ReviewsContainer />
         <BookContent />
         {/* <Footer/> */}
         {/* <CalculateArea/> */}
         {/* <ServicesOneHiringArea/> */}
         {/* <CommonPageHeader title="About Us" subtitle="About" />
         <AboutArea/>
         <AboutCounter/>
         <AboutAppoinment/>
         <HomeOurTeam/>
         <HomeFact/>
         <AboutTestimonial/>
         <AboutAnalysis/> */}
         <CustomFooter/>
      </>
   );
};

export default AboutUs;