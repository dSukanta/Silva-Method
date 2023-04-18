import React from 'react';
import ShopBanner from '../ShopPage/ShopPage/ShopBanner/ShopBanner';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import CustomFooter from '../Home/Home/HomeFooter/Footer';

function LiveEvents() {
  return (
    <>
            <HomeHeader/>
            <CommonPageHeader title="LIVE CLASSES" subtitle="Shop" />
            <ShopBanner/>
            <CustomFooter/>
    </>
  )
}

export default LiveEvents