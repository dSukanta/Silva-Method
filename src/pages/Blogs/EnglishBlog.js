import React from 'react'
import BlogNoSideBarArea from '../BlogNoSideBar/BlogNoSideBarArea/BlogNoSideBarArea'
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import BlogPageHrader from './BlogPageHrader'
import CustomFooter from '../Home/Home/HomeFooter/Footer'
import BlogHeadings from '../BlogHeading/BlogHeading'
import BlogArticlesContainer from '../BlogHeading/BlogArticlesContainer'

function EnglishBlog() {

  // document.title="Silva Method Blogs | Latest Updates from Silva Method";

  return (
    <div>
         <HomeHeader />
         <BlogHeadings />
         {/* <BlogPageHrader title="Blogs" subtitle="Blog" /> */}
         <BlogArticlesContainer />
         {/* <BlogNoSideBarArea /> */}
         <CustomFooter/>
    </div>
  )
}

export default EnglishBlog