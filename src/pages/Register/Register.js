import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import RegisteArea from './RegisteArea/RegisteArea';
import CustomFooter from '../Home/Home/HomeFooter/Footer';

const Register = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Register Page" subtitle="Register" />
            <RegisteArea/>
            <CustomFooter/>
        </>
    );
};

export default Register;