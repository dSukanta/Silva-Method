import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeSingleBlogLeftSide = ({data}) => {
   const {blog_id,title,web_image,seo_title,category,created_at} = data;
   return (
      <>
         <div className="col-lg-3 col-md-4">
            <div className="latest-news-box mb-30">
               <div>
                  <img src={web_image} alt="" height='300px'width='400px'/>
               </div>
               <div style={{width:'30%', padding:'5px 15px',backgroundColor:'black', color:'white', textAlign:'center', margin:'20px 0px'}}>
                  <b style={{textTransform:'capitalize',}}>{category}</b>
               </div>
               <div className="latest-news-content">
                  {/* <div className="news-meta mb-10">
                     <span><Link to="/blogDetails" className="news-tag">Medical,</Link></span>
                     <span><Link to="/blogDetails" className="news-tag">Medicine</Link></span>
                  </div> */}
                  <h3 style={{textTransform:'capitalize'}}><Link to={`/blogDetails/${blog_id}`}>{title}</Link></h3>
                  <b>{moment(created_at).format("LL")}</b>
               </div>
            </div>
         </div>
      </>
   );
};

export default HomeSingleBlogLeftSide;