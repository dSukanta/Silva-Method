import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import ShopBanner from './ShopBanner/ShopBanner';
import CustomFooter from '../../Home/Home/HomeFooter/Footer';

const ShopPage = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="LIVE CLASSES" subtitle="Shop" />
            <ShopBanner/>
            <CustomFooter/>
        </>
    );
};

export default ShopPage;