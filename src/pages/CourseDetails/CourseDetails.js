import React from 'react'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import CustomFooter from '../Home/Home/HomeFooter/Footer'
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import TabsComp from './TabsComp'

function CourseDetails() {
    return (
        <div className="container mt-5 mb-5" style={{width:"50%"}}>
            <div>
                <h2>FDIS - Four Day Immersion Seminar</h2>
                <div className='d-flex justify-content-between'>
                    <p>
                        By <span style={{ color: "#9b37f2", fontWeight: "500" }}>Keith Harmeyer</span>
                    </p>
                    <button type="button" class="btn" style={{backgroundColor:"#9b37f2",color:"white"}}>
                       UNITED STATES
                    </button>

                </div>
            </div>
            <div className="row mt-3">
               <TabsComp />
            </div>
        </div>
    )
}

export default CourseDetails