import React from 'react';
import ShopBanner from '../ShopPage/ShopPage/ShopBanner/ShopBanner';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import CustomFooter from '../Home/Home/HomeFooter/Footer';

function OnlineEvents() {
  return (
    <>
        <HomeHeader/>
        <CommonPageHeader title="ONLINE CLASSES" subtitle="Shop" />
        <ShopBanner/>
        <CustomFooter/>
    </>
  )
}

export default OnlineEvents