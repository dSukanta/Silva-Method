import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import LoginArea from './LoginArea/LoginArea';
import CustomFooter from '../Home/Home/HomeFooter/Footer';

const Login = () => {
    return (
        <>
           <HomeHeader/>
           <CommonPageHeader title="Login Page" subtitle="Login" />
           <LoginArea/>
           <CustomFooter/>
        </>
    );
};

export default Login;