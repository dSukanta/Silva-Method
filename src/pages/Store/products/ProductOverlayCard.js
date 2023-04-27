import React from 'react'
import { Link } from 'react-router-dom';

function ProductOverlayCard({data}) {
  console.log(data);
  return (
    <div className='w-100'>
      <div class="blogproduct-column">
        <div class="blogproduct-column">
            <div class = "blogproductcontainer-card" >
                <div class = "blogproductcard">
                    <img src={data && data.product_image}/>
                    <div class = 'blogproductcard__overlay'>
                      <div class = "blogproductcard__overlay-content">
                        <p class = "blogproductcard__overlay-title"> {data && data.product_name}</p>  
                        {/* <div class = "blogproductcard__overlay-line"></div>       */}
                        {/* <p class = "blogproductcard__overlay-paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                        <Link to={`/store/product/${data && data.product_id}`}><p className='blog-products-viewmore-btn'><span>View in Details...</span></p></Link>
                      </div>                     
                    </div>
                </div>
            </div>
        </div>        
      </div> 
    </div>
  )
}

export default ProductOverlayCard