import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import Lessons from './Lessons'
import Resources from './Resources'
import Stories from './Stories'
import CourseOverview from './CourseOverview'
import MemberShipFooter from '../silvamembership/MemberShipFooter'
import SingleProductFooter from './SingleProductFooter'
// ,borderBottom:"5px solid #9b37f2", marginBottom: "-1px"
function MainTabs({data}) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    const [activeTab, setActiveTab] = useState("Overview")
    const tabs = ["Overview", "Lessons", "Resources", "Stories"]
    return (
        <>
         <div className={`w-100 d-flex justify-content-start tabsmainview ${isDesktopOrLaptop?"gap-5":"gap-3"}`} style={{ marginTop: isDesktopOrLaptop?"40px":"0", borderBottom: "1px solid gray" }}>
            {
                tabs.map((t, i) => (
                    <h5 style={{ color: "whitesmoke",fontSize:isDesktopOrLaptop?"1.4rem":"1rem" }} className={activeTab === t ? 'activenavtab' : ""} onClick={() => {
                        setActiveTab(t)
                    }} key={i + 1}>{t}</h5>
                ))
            }
        </div>
         <div>
         {
            activeTab ==="Lessons" && (
                <Lessons data={data && data}/>
            )
         }

         {
            activeTab==="Resources" && (
                <Resources />
            )
         }
         {
            activeTab==="Stories" && (
                <Stories />
            )
         }

         {
            activeTab==="Overview" && (
                <CourseOverview data={data && data}/>
            )
         }
         </div>
          {/* <MemberShipFooter /> */}
        </>
    )
}

export default MainTabs