import React from 'react'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import CustomFooter from '../Home/Home/HomeFooter/Footer'
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import SidebarComp from './SidebarComp'
import { Outlet } from 'react-router-dom'
import MyCoursesTabs from './MyCoursesTabs'

function MyCoursesPage() {
  return (
    <div className='mt-5'>
      <div className="row me-2 justify-content-center align-items-center gap-2">
        <div className="col-sm-6 col-md-3">
          <div className='text-center py-2 px-4' style={{backgroundColor:"#9b37f2",color:"white",height:"100px"}}>
            <h3 className='white-color'>0</h3>
            <h5 className='white-color'>Enrolled Courses</h5>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className='text-center py-2 px-4' style={{backgroundColor:"#9b37f2",color:"white",height:"100px"}}>
            <h3 className='white-color'>0</h3>
            <h5 className='white-color'>Active Courses</h5>
          </div>
        </div>
        <div className="col-sm-6 col-md-3 mb-2">
          <div className='text-center py-2 px-4' style={{backgroundColor:"#9b37f2",color:"white",height:"100px"}}>
            <h3 className='white-color'>0</h3>
            <h5 className='white-color'>Completed Courses</h5>
          </div>
        </div>

        <div className="col-12">
          <MyCoursesTabs />
        </div>
      </div>
    </div>
  )
}

export default MyCoursesPage