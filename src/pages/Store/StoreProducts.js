import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
// import BlogsArea from './BlogsArea/BlogsArea';
import CustomFooter from '../Home/Home/HomeFooter/Footer';
import productbannerimg from "../../images/newimgs/productpagebanner.webp";
import StoreBanner from './StoreBanner';
import HomeFact from '../Home/Home/HomeFact/HomeFact';
import TrainingPrograms from './TrainingPrograms';
import ProductBanners from './ProductBanners';

const StoreProducts = () => {
    return (
        <>
            <HomeHeader />
            <CommonPageHeader title="Silva Method Online Courses" subtitle="Store" />
            {/* <BlogsArea/> */}
            <StoreBanner src={productbannerimg} />
            <TrainingPrograms />
            <ProductBanners />
            <CustomFooter />
        </>
    );
};

export default StoreProducts;