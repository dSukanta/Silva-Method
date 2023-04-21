import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import BlogDetailsArea from './BlogDetailsArea/BlogDetailsArea';
import { useParams } from 'react-router-dom';
import CustomFooter from '../Home/Home/HomeFooter/Footer';

const BlogDetails = () => {
   const {id}= useParams();
   //console.log(id);
   return (
      <>
         <HomeHeader/>
         <CommonPageHeader title={id && id.split('-').map((el)=>el.toUpperCase()).join(' ')}/>
         <BlogDetailsArea id={id}/>
         <CustomFooter/>
      </>
   );
};

export default BlogDetails;