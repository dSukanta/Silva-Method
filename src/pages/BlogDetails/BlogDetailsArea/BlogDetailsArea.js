import React from 'react';
import BlogDetailsLeftSide from '../../../components/BlogDetailsLeftSide/BlogDetailsLeftSide';
import BlogDetailsRightSide from '../../../components/BlogDetailsRightSide/BlogDetailsRightSide';
import { useState } from 'react';
import { useEffect } from 'react';

const BlogDetailsArea = ({id}) => {
   const [blog,setBlog] =useState([]);

   const getBlogDetails=async(id)=>{
      const myHeaders = new Headers();
      myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
      myHeaders.append("Device", "Android");
      myHeaders.append("Language", "english");

      const formData= new FormData();
      formData.append("blog_id", id);

    const options={
       method:'POST',
       headers:myHeaders,
       body: formData
    }
    const res= await fetch(`https://projectsites.in/silvamethod/api/blogDetail`,options)
    const data= await res.json();
     //console.log(data.data);
      setBlog(data.data);
   }

   useEffect(()=>{
      getBlogDetails(id);
   },[id])

   console.log(blog);

   return (
      <>
         <section className="blog-area pt-120 pb-80">
            <div className="container">
               <div className="row">

                 {blog.length>0 && <BlogDetailsLeftSide details_topBar={<div className="postbox__thumb mb-35">
                     <img src={blog && blog[0].web_image} alt="blog img"/>
                  </div>} data={blog.length>0 && blog[0]} />}

                  <BlogDetailsRightSide/>

               </div>
            </div>
         </section>
      </>
   );
};

export default BlogDetailsArea;