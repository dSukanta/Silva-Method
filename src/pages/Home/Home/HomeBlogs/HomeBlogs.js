import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeSingleBlogLeftSide from '../../../../components/HomeSingleBlogLeftSide/HomeSingleBlogLeftSide';
import HomeSingleBlogRightSide from '../../../../components/HomeSingleBlogRightSide/HomeSingleBlogRightSide';
import { useEffect } from 'react';

const HomeBlogs = () => {

   const [blogs,setBlogs] =useState([]);

   const getBlogs=async()=>{
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
    const res= await fetch(`https://projectsites.in/silvamethod/api/home`,options)
    const data= await res.json();
    //console.log(data.data.blog);
    setBlogs(data.data.blog);
   }

   useEffect(()=>{
      getBlogs();
   },[])
   return (
      <>
         <section className="latest-news-area pt-10">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-7">
                     <div className="section-title pos-rel mb-25">
                        {/* <div className="section-icon">
                           <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt="" />
                        </div> */}
                        <div>
                           <h3>Read our Daily Blogs</h3>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt="" />
                        </div>
                     </div>
                  </div>

                  {/* <div className="col-xl-6 col-lg-5 d-none d-lg-block">
                     <div className="section-button home_blog_btn text-end pt-80">
                        <Link to="/blogs" className="primary_btn btn-icon ml-0">
                           <span>+</span>our blog</Link>
                     </div>
                  </div> */}
               </div>

               <div className="row">
                  
                  {blogs && blogs.map((blog) =>
                  <HomeSingleBlogLeftSide key={blog.blog_id} data={blog}/>
                  )}

                  {/* <HomeSingleBlogLeftSide image="https://storage.googleapis.com/mv-prod-blog-en-assets/2018/08/026b52fb-biohacking-weight-loss-featured-221210-mindvalley-daveasprey-34-%C2%A9andrewburns-344x344.webp" /> */}

                  {/* <div className="col-xl-4 col-lg-12 col-md-12">
                     <div className="recent-news-list mb-120">

                        <HomeSingleBlogRightSide />
                        <HomeSingleBlogRightSide />
                        <HomeSingleBlogRightSide border="border-0" />

                     </div>
                     {/* <div className="mk-call-btn f-right mb-30">
                        <Link to="/contact" className="primary_btn btn-icon btn-icon-green ml-0">
                           <span><i className="fas fa-phone"></i></span>make call</Link>
                     </div> */}
                  {/* </div> */}
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeBlogs;