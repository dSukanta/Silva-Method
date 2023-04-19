import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import BlogsArea from './BlogsArea/BlogsArea';
import CustomFooter from '../Home/Home/HomeFooter/Footer';

const Blogs = () => {
   return (
      <>
         <HomeHeader/>
         <CommonPageHeader title="Blog Standard" subtitle="Blog" />
         <BlogsArea/>
         <CustomFooter/>
      </>
   );
};

export default Blogs;