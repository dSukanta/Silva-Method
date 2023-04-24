import React, { useEffect } from 'react'
// import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
// import CustomFooter from '../Home/Home/HomeFooter/Footer'
// import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import TabsComp from './TabsComp'
import { useMediaQuery } from 'react-responsive'
import { useParams } from 'react-router-dom'
import { useState } from 'react';

function CourseDetails() {

    const {id}= useParams();
    //console.log(id);
    const [singleClass,setSingleClass] = useState([]);

   const getSingleClass =async(id)=>{
        const myHeaders = new Headers();
        myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
        myHeaders.append("Device", "Android");
        myHeaders.append("Language", "english");

        const formData= new FormData();
        formData.append("class_id", id);
      const options={
         method:'POST',
         headers:myHeaders,
         body: formData
      }
      const res= await fetch(`https://projectsites.in/silvamethod/api/classDetail`,options)
      const data= await res.json();
     console.log(data);
     setSingleClass(data.data)
   }

   useEffect(()=>{
        getSingleClass(id)
   },[id]);

  //console.log(liveClasses);


    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })

    return (
        <div className="container mt-5 mb-5" style={{width:isDesktopOrLaptop?"50%":"100%"}}>
            <div>
                <h2>{singleClass.length>0 && singleClass[0].course_title }</h2>
                <div className='d-flex justify-content-between'>
                    <p>
                        By <span style={{ color: "#9b37f2", fontWeight: "500" }}>{singleClass.length>0 && singleClass[0].instructor_name }</span>
                    </p>
                    <button type="button" className="btn" style={{backgroundColor:"#9b37f2",color:"white"}}>
                       UNITED STATES
                    </button>

                </div>
            </div>
            <div className="row mt-3">
               <TabsComp data={singleClass.length>0 &&  singleClass[0]}/>
            </div>
        </div>
    )
}

export default CourseDetails