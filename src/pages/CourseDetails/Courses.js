import React, { useEffect, useState } from 'react';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import CustomFooter from '../Home/Home/HomeFooter/Footer';
import SingleCourse from './SingleCourse';
import { Link } from 'react-router-dom';

const AllCourses = () => {
   
      const[courses,setCourses]=useState([]);

      const getCourses = async() =>{
         const myHeaders = new Headers();
         myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
         myHeaders.append("Device", "Android");
         myHeaders.append("Language", "english");
 
         const formData= new FormData();
         formData.append("start_index", "0");
         formData.append("no_of_records", "100");
 
       const options={
          method:'POST',
          headers:myHeaders,
          body: formData
       }
       const res= await fetch(`https://projectsites.in/silvamethod/api/courseListWithChild`,options)
       const data= await res.json();
       //console.log(data.data.classes);
       setCourses(data.data);
      }

      useEffect(()=>{
        getCourses();
      },[]);

      //console.log(courses);

   return (
      <>
      <HomeHeader/>
         <section className="servcies-area gray-bg pt-50 pb-20">
            <div className="container">
               <div className="row">
                  <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                     <div className="section-title text-center pos-rel mb-15">
                        {/* <div className="section-icon">
                           <img className="section-back-icon" src="img/section/section-back-icon.png" alt=""/>
                        </div> */}
                        <div className="section-text pos-rel home_ser_title">
                           {/* <h5>Upcoming Live & Online Classes</h5> */}
                           <h2></h2>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="row row-cols-2 row-cols-lg-3">

               {courses && courses.map((course)=>
               <div className='text-center p-2'>
                  <SingleCourse key={course.course_id} data={course}/>
                  {/* <div style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center' }}>
                  <p>{course.teacher_name}</p>
                  <Link to={`/blogLeftSideBar`}><h6>{course.course_title}</h6></Link>
               </div> */}
               </div>
               )}
              </div>
            </div>
         </section>
         <CustomFooter/>
      </>
   );
};

export default AllCourses;