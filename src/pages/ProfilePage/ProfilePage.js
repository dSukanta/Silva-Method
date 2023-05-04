import React from 'react'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import CustomFooter from '../Home/Home/HomeFooter/Footer'
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import { Outlet } from 'react-router-dom'
import SidebarComp from './SidebarComp'

function ProfilePage() {
  return (
    <>
        <HomeHeader />
        <CommonPageHeader title="My Profile" subtitle="Profile" />
        <div className="container">
          <div className="row justify-content-center align-items-start">
            <div className="col-sm-12 col-md-4">
            <SidebarComp />
            </div>
            <div className="col-sm-12 col-md-8">
              <Outlet />
            </div>
          </div>
        </div>
        <CustomFooter />
    </>
  )
}

export default ProfilePage