import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import BlogLeftSideBarArea from './BlogLeftSideBarArea/BlogLeftSideBarArea';
import CustomFooter from '../Home/Home/HomeFooter/Footer';

const BlogLeftSideBar = () => {
    return (
        <>
            <HomeHeader/>
            <CommonPageHeader title="Blog Left Sidebar" subtitle="Blog" />
            <BlogLeftSideBarArea/>
           <CustomFooter/>
        </>
    );
};

export default BlogLeftSideBar;