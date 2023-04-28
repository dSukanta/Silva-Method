import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import ContactArea from './ContactArea/ContactArea';
import ContactFormArea from './ContactFormArea/ContactFormArea';
import ContactMap from './ContactMap/ContactMap';
import CustomFooter from '../Home/Home/HomeFooter/Footer';
import HomeFact from '../Home/Home/HomeFact/HomeFact';
import HomeFact2 from '../Home/Home/HomeFact/HomeFact2';
import TeamArea from '../../components/Contact/TeamArea';
import MobileAppBanner from './ContactArea/MobileAppBanner';

const Contact = () => {

    // document.title="Contact Silva Method International";
    
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Contact Us" subtitle="Contact" />
            <HomeFact2 />
            <HomeFact />
            <TeamArea />
            <ContactArea/>
            <MobileAppBanner />
            <ContactFormArea/>
            <ContactMap/>
            <CustomFooter/>
        </>
    );
};

export default Contact;