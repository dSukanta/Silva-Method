import React from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import Homeherodiv from './HomeHeroSection/Homeherodiv';
import Featured from '../../../components/featured/Featured';
import AboutSilvaMethod from '../../AboutUs/AboutSilvaMethod';
import CourseSlide from '../../../components/HomeHeroSingleSlide/FirstSlide';
import HomeEvents from '../../events/HomeEvents';
import Testimonials from '../../../components/featured/Reviews';
import HomeProducts from '../../Store/HomeProducts';
import InstructorsSlide from '../../../components/HomeHeroSingleSlide/LastSlide';
import HomeBlogs from './HomeBlogs/HomeBlogs';
import CountrySection from '../../../components/CountrySection/CountrySection';
import AudioBlogs from '../../Blogs/AudioBlog';
import Newsletter from '../../../components/Newsletter/Newsletter';
import CustomFooter from './HomeFooter/Footer';
import AboutSilva from '../../../components/AboutSilva/AboutSilva';
import HomeCountrySection from '../../../components/CountrySection/HomeCountrySection';

const SilvaHome = () => {
    return (
        <>
            <HomeHeader/>
            <Homeherodiv/>
            <Featured/>
            <AboutSilvaMethod/>
            <CourseSlide/>
            <HomeEvents/>
            <Testimonials/>
            <AboutSilva/>
            <HomeProducts/>
            <InstructorsSlide/>
            <HomeBlogs/>
            <HomeCountrySection/>
            <AudioBlogs/>
            <Newsletter/>
            <CustomFooter/>
        </>
    );
};

export default SilvaHome;