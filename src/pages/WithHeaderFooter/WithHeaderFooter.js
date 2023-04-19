import React from 'react'
import { Outlet } from 'react-router'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import CustomFooter from '../Home/Home/HomeFooter/Footer'

function WithHeaderFooter() {
  return (
    <>
    <HomeHeader />
    <CommonPageHeader />
     {
        <Outlet />
     }
    <CustomFooter />
    </>
  )
}

export default WithHeaderFooter