import React from 'react';
import { Link } from 'react-router-dom';

const SingleAudioBlog = ({image}) => {
   return (
      <>
         <div className="col-xl-4 col-lg-6 col-md-6">
            <div className="latest-news-box mb-30">
               <div>
                  <img src={image} alt="" width='100%' height='300px'/>
               </div>
               <div className="latest-news-content">
                  {/* <div className="news-meta mb-10">
                     <span><Link to="/blogDetails" className="news-tag">Medical,</Link></span>
                     <span><Link to="/blogDetails" className="news-tag">Medicine</Link></span>
                  </div> */}
                  {/* <h3><Link to="/blogDetails">View on Youtube</Link></h3> */}
                  {/* <a href='https://www.youtube.com' style={{display:'flex', justifyContent:'center', alignItems:'center', padding:'15px', backgroundColor:'#7a12d4',color:'white', width:'50%', margin:'auto', marginTop:'10px',borderRadius:'20px'}}>View on Youtube</a> */}
                  {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                     magna
                     aliqua. Ut enim ad minim veniam.</p> */}
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleAudioBlog;