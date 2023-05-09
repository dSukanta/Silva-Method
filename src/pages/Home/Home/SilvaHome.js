import React, { useContext } from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import Homeherodiv from "./HomeHeroSection/Homeherodiv";
import Featured from "../../../components/featured/Featured";
import AboutSilvaMethod from "../../AboutUs/AboutSilvaMethod";
import CourseSlide from "../../../components/HomeHeroSingleSlide/FirstSlide";
import HomeEvents from "../../events/HomeEvents";
import Testimonials from "../../../components/featured/Reviews";
import HomeProducts from "../../Store/HomeProducts";
import InstructorsSlide from "../../../components/HomeHeroSingleSlide/LastSlide";
import HomeBlogs from "./HomeBlogs/HomeBlogs";
import CountrySection from "../../../components/CountrySection/CountrySection";
import AudioBlogs from "../../Blogs/AudioBlog";
import Newsletter from "../../../components/Newsletter/Newsletter";
import CustomFooter from "./HomeFooter/Footer";
import AboutSilva from "../../../components/AboutSilva/AboutSilva";
import HomeCountrySection from "../../../components/CountrySection/HomeCountrySection";
import HomeClasses from "./HomeClasses";
import ProductSlide from "../../Store/products/ProductSlide";
import AllContext, { AuthContext } from "../../../context/AllContext";
import { requestData2 } from "../../../utils/baseUrl";
import { Navigate } from "react-router-dom";
import NewHomeSlider from "../NewHomeSlider";
import SilvaBenefits from "./SilvaBenefits";

const SilvaHome = () => {
    const { isDesktopOrLaptop,isTabletOrMobile,setUserData,isUserLoggedIn}= useContext(AuthContext);
    
    if(isUserLoggedIn){
      return <Navigate to="/today" />
    }
  return (
    <>
      <HomeHeader />
      <Homeherodiv />
      <Featured />
      <AboutSilvaMethod />
      <CourseSlide />
      <SilvaBenefits/>
      <HomeClasses />
      <Testimonials />
      {/* <AboutSilva /> */}
      <div className={isDesktopOrLaptop?"":"col-12 m-auto pt-2 pb-5"}>
        <ProductSlide/>
      </div>

      {/* <HomeProducts /> */}
      {/* <InstructorsSlide/> */}
      {/* <HomeEvents/> */}
      <HomeBlogs />
      <HomeCountrySection />
      <AudioBlogs />
      <Newsletter />
      <CustomFooter />
    </>
  );
};

export default SilvaHome;
