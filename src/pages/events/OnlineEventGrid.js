import React, { useState } from 'react'
import SingleShop from '../../components/SingleShop/SingleShop'
import { useEffect } from 'react';

function OnlineEventGrid() {

   const [onlineClasses,setOnlineClasses] = useState([]);

   const settingOnlineClassesData=(data)=>{
     const updated= data.filter(el=>el.delivery_method=="online");
     setOnlineClasses(updated)
   }

   const getData =async()=>{
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
      const res= await fetch(`https://projectsites.in/silvamethod/api/latestClassListbyStartDate`,options)
      const data= await res.json();
      settingOnlineClassesData(data.data)
   }

   useEffect(()=>{
      getData();
   },[]);

   console.log(onlineClasses);

  return (
    <>
        <section className="shop-banner-area pt-120 pb-120">
            <div className="container">
               <div className="row mt-20">
                  <div className="col-xl-4 col-lg-5 col-md-6">
                     <div className="product-showing mb-40">
                        <p>Find Out Your Classes Below</p>
                     </div>
                  </div>
                  {/* <div className="col-xl-8 col-lg-7 col-md-6">
                     <div className="shop-tab f-right">
                        <ul className="nav text-center" id="myTab" role="tablist">
                           <li className="nav-item">
                              <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab"
                                 aria-controls="home" aria-selected="true"><i className="fas fa-th-large"></i> </a>
                           </li>
                           <li className="nav-item">
                              <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab"
                                 aria-controls="profile" aria-selected="false"><i className="fas fa-list-ul"></i></a>
                           </li>
                        </ul>
                     </div>
                     <div className="pro-filter mb-40 f-right">
                        <form action="#">
                           <select name="pro-filter" id="pro-filter">
                              <option defaultValue="1">Shop By </option>
                              <option defaultValue="2">Top Sales </option>
                              <option defaultValue="3">New Product </option>
                              <option defaultValue="4">A to Z Product </option>
                           </select>
                        </form>
                     </div>
                  </div> */}
               </div>
               <div className="row">
                  <div className="col-12">
                     <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                           <div className="row">

                           {onlineClasses && onlineClasses.map((classes)=>
                              
                              <SingleShop data={classes} key={classes.course_id}/>)}
                              </div>
                        </div>
                        {/* <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                           <div className="row">
                              <SingleSecondShop image="2" />
                           </div>
                           <div className="row">
                              <SingleSecondShop image="3" />
                           </div>
                           <div className="row">
                              <SingleSecondShop image="4" />
                           </div>
                           <div className="row">
                              <SingleSecondShop image="5" />
                           </div>
                           <div className="row">
                              <SingleSecondShop image="6" />
                           </div>
                        </div> */}
                     </div>
                  </div>
               </div>
               {/* <div className="row">
                  <div className="col-12">
                     <div className="basic-pagination basic-pagination-2 text-center mt-20">
                        <ul>
                           <li><a href="#"><i className="fas fa-angle-double-left"></i></a></li>
                           <li><a href="#">01</a></li>
                           <li><a href="#">02</a></li>
                           <li><a href="#">03</a></li>
                           <li><a href="#"><i className="fas fa-ellipsis-h"></i></a></li>
                           <li><a href="#"><i className="fas fa-angle-double-right"></i></a></li>
                        </ul>
                     </div>
                  </div>
               </div> */}
            </div>
         </section>
    </>
  )
}

export default OnlineEventGrid