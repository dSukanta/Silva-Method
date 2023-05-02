import React from 'react'
import BlogNoSideBarArea from '../BlogNoSideBar/BlogNoSideBarArea/BlogNoSideBarArea'
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import BlogPageHrader from './BlogPageHrader'
import CustomFooter from '../Home/Home/HomeFooter/Footer'

function SpanishBlog() {

  // document.title="Spanish Blogs - Silva International Inc.";

  return (
    <div>
         <HomeHeader />
         <BlogPageHrader title="Spanish Blogs" subtitle="Blog" />
         <BlogNoSideBarArea />
         <CustomFooter/>
    </div>
  )
}

export default SpanishBlog