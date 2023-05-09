import React from 'react'
import { Link } from 'react-router-dom';

function ProductOverlayCard({data}) {
  //console.log(data);
  return (
    <div style={{width:'90%'}}>
      <div className="blogproduct-column">
        <div className="blogproduct-column">
            <div className= "blogproductcontainer-card" >
                <div className= "blogproductcard">
                    <img src={data && data.product_image}/>
                    <div className= 'blogproductcard__overlay'>
                      <div className= "blogproductcard__overlay-content">
                        <p className= "blogproductcard__overlay-title"> {data && data.product_name}</p>  
                        {/* <div className= "blogproductcard__overlay-line"></div>       */}
                        {/* <p className= "blogproductcard__overlay-paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
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