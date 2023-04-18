import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import ContactArea from './ContactArea/ContactArea';
import ContactFormArea from './ContactFormArea/ContactFormArea';
import ContactMap from './ContactMap/ContactMap';
import CustomFooter from '../Home/Home/HomeFooter/Footer';

const Contact = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Contact Us" subtitle="Contact" />
            <ContactArea/>
            <ContactFormArea/>
            <ContactMap/>
            <CustomFooter/>
        </>
    );
};

export default Contact;