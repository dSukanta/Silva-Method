import React from 'react'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import BlogPageHrader from '../Blogs/BlogPageHrader'
import HomeProducts from './HomeProducts'
import CustomFooter from '../Home/Home/HomeFooter/Footer'

function Books() {
  return (
    <div>
        <HomeHeader/>
        <BlogPageHrader title="Books"/>
        <HomeProducts/>
        <CustomFooter/>
    </div>
  )
}

export default Books