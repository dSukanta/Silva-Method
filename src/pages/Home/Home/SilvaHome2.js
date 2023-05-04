import React, { useContext, useEffect } from 'react';
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
import LoggedInHeroSection from './Hero/LoggedInHeroSection';
import WelcomeToSilvaBanner from './Hero/WelcomeToSilvaBanner';
import SilvaCourseCards from './Hero/SilvaCourseCards';
import PopularNowCourses from './Hero/PopularNowCourses';
import MeditationSection from './Hero/MeditationSection';
import LiveEventsCard from './Hero/LiveEventsCard';
import CompleteProfileCard from './Hero/CompleteProfileCard';
import SilvaMemberShip from '../../silvamembership/SilvaMemberShip';
import MemberShipPricingPlan from '../../silvamembership/MemberShipPricingPlan';
import { AuthContext } from '../../../context/AllContext';
import { requestData2 } from '../../../utils/baseUrl';

const SilvaHome2 = () => {
    const { userData } = useContext(AuthContext);

    return (
        <>
            <HomeHeader />
            <LoggedInHeroSection text={"Hi, Avijit"} />
            {/* <Homeherodiv/> */}
            {/* <Featured/> */}
            {/* <AboutSilvaMethod/> */}
            <CourseSlide />
            <WelcomeToSilvaBanner />
            {/* <HomeEvents/> */}
            {/* <Testimonials/> */}
            {/* <AboutSilva/> */}
            {/* <HomeProducts/> */}
            {/* <InstructorsSlide/> */}
            {/* <HomeBlogs/> */}
            {/* <HomeCountrySection/> */}
            {/* <AudioBlogs/> */}
            {/* <Newsletter/> */}
            <SilvaCourseCards />
            <LoggedInHeroSection text={"What's Popular Now"} />
            <PopularNowCourses />

            <LoggedInHeroSection text={"Your Meditation For Today"} />
            <MeditationSection />

            <LiveEventsCard />

            <CompleteProfileCard />

            {(!userData) || (userData && userData.strip_payment_status !== "paid") && (
                <MemberShipPricingPlan />
            )}

            <CustomFooter />
        </>
    );
};

export default SilvaHome2;