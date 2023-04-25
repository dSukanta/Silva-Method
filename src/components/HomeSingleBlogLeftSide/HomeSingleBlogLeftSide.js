import React from 'react';
import { Link } from 'react-router-dom';

const HomeSingleBlogLeftSide = ({data}) => {
   const {blog_id,title,web_image,seo_title,category} = data;
   return (
      <>
         <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="latest-news-box mb-30">
               <div>
                  <img src={web_image} alt="" height='300px'/>
               </div>
               <div style={{width:'25%', padding:'5px',backgroundColor:'black', color:'white', textAlign:'center', margin:'20px 0px'}}>
                  <b>{category}</b>
               </div>
               <div className="latest-news-content">
                  {/* <div className="news-meta mb-10">
                     <span><Link to="/blogDetails" className="news-tag">Medical,</Link></span>
                     <span><Link to="/blogDetails" className="news-tag">Medicine</Link></span>
                  </div> */}
                  <h3><Link to={`/blogDetails/${blog_id}`}>{title}</Link></h3>
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                     magna
                     aliqua. Ut enim ad minim veniam.</p> */}
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSingleBlogLeftSide;