import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { useEffect } from 'react';
import HomeSingleProduct from './HomeSingleProduct';


const HomeProducts = () => {
   const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1280px)'})
   const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
   const isMobile = useMediaQuery({minWidth: 320, maxWidth:480  })

   const [products,setProducts]= useState([]);

   const getProducts=async()=>{
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
    const res= await fetch(`https://projectsites.in/silvamethod/api/productList`,options)
    const data= await res.json();
    //console.log(data.data);
    setProducts(data.data);
   }

   useEffect(()=>{
      getProducts();
   },[])

   //console.log(products);

   return (
      <>
         <section className="team-area pb-5">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-10">
                     <div className="section-title pos-rel mb-25">
                        {/* <div className="section-icon">
                           <img className="section-back-icon back-icon-left" src="img/section/section-back-icon.png" alt=""/>
                        </div> */}
                        <div className="section-text">
                           {/* <h5>Our Team</h5> */}
                           {/* <h2><span style={{borderBottom:'4px solid #7a12d4'}}>Ch</span>e<span style={{borderBottom:'4px solid #7a12d4'}}>ck</span> our Unique Products</h2> */}
                           <h2>Check our Unique Products</h2>
                        </div>
                        <div className="section-line pos-rel">
                           <img src="img/shape/section-title-line.png" alt=""/>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-5">
                     {/* <div className="section-button text-end d-none d-lg-block pt-80 team_btn">
                        <Link to="/contact" className="primary_btn btn-icon ml-0"><span>+</span>Make Appointment</Link>
                     </div> */}
                  </div>
               </div>
               <div style={{display:'grid', gridTemplateColumns: isMobile? '1fr 1fr':'1fr 1fr 1fr 1fr', gap:"1rem"}}>

               {products && products.map((product)=>
                  <HomeSingleProduct data={products.length>0 && product}/>
                              
               )}
               </div>
            </div>
         </section>
      </>
   );
};

export default HomeProducts;