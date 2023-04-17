import React from 'react';
import HomeAboutArea from './HomeAboutArea/HomeAboutArea';
import HomeBlogs from './HomeBlogs/HomeBlogs';
import HomeCta from './HomeCta/HomeCta';
import HomeFact from './HomeFact/HomeFact';
import HomeFooter from './HomeFooter/HomeFooter';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeHeroSection from './HomeHeroSection/HomeHeroSection';
import HomeOurTeam from './HomeOurTeam/HomeOurTeam';
import HomePricing from './HomePricing/HomePricing';
import HomeServices from './HomeServices/HomeServices';
import Slide from '../../../components/HomeHeroSingleSlide/Slide';
import AboutSilva from '../../../components/AboutSilva/AboutSilva';
import MultiCarousel from '../../../components/HomeHeroSingleSlide/Multi-carousel';
import Homeherodiv from './HomeHeroSection/Homeherodiv';
import Featured from '../../../components/featured/Featured';
import FirstSlide from '../../../components/HomeHeroSingleSlide/FirstSlide';
import Reviews from '../../../components/featured/Reviews';
import LastSlide from '../../../components/HomeHeroSingleSlide/LastSlide';
const Home = () => {
    return (
        <>
            <HomeHeader/>
            <Homeherodiv/>
            <Featured/>
            {/* <Slide/> */}
            {/* <HomeHeroSection/> */}
            <HomeAboutArea/>
            <FirstSlide/>
            <HomeServices/>
            <Reviews/>
            <AboutSilva/>
            <HomeOurTeam/>
            <LastSlide/>
            {/* <MultiCarousel/> */}
            {/* <HomeFact/>
            <HomePricing/> */}
            {/* <HomeCta/> */}
            <HomeBlogs/>
            <HomeFooter/>
        </>
    );
};

export default Home;