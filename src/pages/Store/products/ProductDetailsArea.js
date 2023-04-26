import React from 'react';
import BlogDetailsLeftSide from '../../../components/BlogDetailsLeftSide/BlogDetailsLeftSide';
import BlogDetailsRightSide from '../../../components/BlogDetailsRightSide/BlogDetailsRightSide';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductDetailsLeftSide from './ProductdetailsLeft';
import ProductDetailsRightSide from './ProductDetailsRight';

const ProductDetailsArea = ({productId}) => {
   const [product,setProduct] =useState([]);

   const getBlogDetails=async(id)=>{
      const myHeaders = new Headers();
      myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
      myHeaders.append("Device", "Android");
      myHeaders.append("Language", "english");

      const formData= new FormData();
      formData.append("product_id", id);

    const options={
       method:'POST',
       headers:myHeaders,
       body: formData
    }
    const res= await fetch(`https://projectsites.in/silvamethod/api/productDetail`,options)
    const data= await res.json();
     //console.log(data.data);
      setProduct(data.data);
   }

   useEffect(()=>{
      getBlogDetails(productId);
   },[productId])

   console.log(product);

   return (
      <>
         <section className="blog-area pt-120 pb-80">
            <div className="container">
               <div className="row">

                 <ProductDetailsLeftSide details_topBar={<div className="postbox__thumb mb-35 w-100">
                        <img src={product.length>0 && product[0].product_image} alt="single product img" width='100%'/>
                  </div>} product={product.length>0 && product[0]}/>

                  <ProductDetailsRightSide/>

               </div>
            </div>
         </section>
      </>
   );
};

export default ProductDetailsArea;