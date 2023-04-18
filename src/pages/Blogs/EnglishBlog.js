import React from 'react'
import BlogNoSideBarArea from '../BlogNoSideBar/BlogNoSideBarArea/BlogNoSideBarArea'
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import BlogPageHrader from './BlogPageHrader'
import CustomFooter from '../Home/Home/HomeFooter/Footer'

function EnglishBlog() {
  return (
    <div>
         <HomeHeader />
         <BlogPageHrader title="Blogs" subtitle="Blog" />
         <BlogNoSideBarArea />
         <CustomFooter/>
    </div>
  )
}

export default EnglishBlog