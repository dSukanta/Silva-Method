import React from 'react';
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import ShopDetailsBanner from './ShopDetailsBanner/ShopDetailsBanner';
import ShopDetailsDesc from './ShopDetailsDesc/ShopDetailsDesc';
import CustomFooter from '../../Home/Home/HomeFooter/Footer';

const ShopDetails = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Product Details" subtitle="Details" />
            <ShopDetailsBanner/>
            <ShopDetailsDesc/>
            <CustomFooter/>
        </>
    );
};

export default ShopDetails;