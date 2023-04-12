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

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <Slide/>
            <HomeHeroSection/>
            <HomeAboutArea/>
            <HomeServices/>
            <HomeOurTeam/>
            <HomeFact/>
            <HomePricing/>
            <HomeCta/>
            <HomeBlogs/>
            <HomeFooter/>
        </>
    );
};

export default Home;