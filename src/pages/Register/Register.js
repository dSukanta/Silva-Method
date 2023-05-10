import React, { useEffect, useState } from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import RegisteArea from './RegisteArea/RegisteArea';
import CustomFooter from '../Home/Home/HomeFooter/Footer';
import { useLocation } from 'react-router-dom';

const Register = () => {
    const {state}=useLocation();
    const [subscribePlanId,setSubscribePlanId] =useState(null);

    useEffect(()=>{
        setSubscribePlanId(state?.id);
    },[])
   
    //console.log(subscribePlanId)
  
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Register Page" subtitle="Register" />
            <RegisteArea RegPageState={subscribePlanId}/>
            <CustomFooter/>
        </>
    );
};

export default Register;