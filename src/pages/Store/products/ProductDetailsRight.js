import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import OverlayCard from "./OverlayCard";

const ProductDetailsRightSide = ({productId,products,setProducts}) => {

  const getProducts = async () => {
    const myHeaders = new Headers();
    myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
    myHeaders.append("Device", "Android");
    myHeaders.append("Language", "english");

    const formData = new FormData();
    formData.append("start_index", "0");
    formData.append("no_of_records", "15");

    const options = {
      method: "POST",
      headers: myHeaders,
      body: formData,
    };
    const res = await fetch(
      `https://projectsites.in/silvamethod/api/productList`,
      options
    );
    const data = await res.json();
    //console.log(data.data);
    setProducts(data.data.filter(product =>product.product_id!==productId));
  };

  useEffect(() => {
    getProducts();
  }, [productId]);

  //console.log(products);

  return (
    <>
      <div className="col-lg-4">
        {/* <div className="widget mb-40">
          <div className="widget-title-box mb-30">
            <span className="animate-border"></span>
            <h3 className="widget-title">Search Products</h3>
          </div>
          <form className="search-form">
            <input type="text" placeholder="Search your keyword..." />
            <button type="submit">
              <AiOutlineSearch size={20} />
            </button>
          </form>
        </div> */}
        {/* <div className="widget mb-40">
                    <div className="widget-title-box mb-30">
                        <span className="animate-border"></span>
                        <h3 className="widget-title">About Me</h3>
                    </div>
                    <div className="about-me text-center">
                        <img src="img/blog/details/me.jpg" alt=""/>
                            <h4>Zulia Maron Duo</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                                ut labore.</p>
                            <div className="widget-social-icon">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-behance"></i></a>
                                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </div>
                    </div>
                </div> */}
        {/* <div className="widget mb-40">
          <div className="widget-title-box mb-30">
            <span className="animate-border"></span>
            <h3 className="widget-title">PRODUCT CATEGORIES</h3>
          </div>
          <ul className="cat">
            <li>
              <Link to="/blogDetails">
              Books <span className="f-right">(21)</span>
              </Link>
            </li>
            <li>
              <Link to="/blogDetails">
              Dynamic Meditation <span className="f-right">(9)</span>
              </Link>
            </li>
            <li>
              <Link to="/blogDetails">
              Home Study Programs <span className="f-right">(0)</span>
              </Link>
            </li>
            <li>
              <Link to="/blogDetails">
              Silva Master Classes<span className="f-right">(3)</span>
              </Link>
            </li>
            <li>
              <Link to="/blogDetails">
              Uncategorized <span className="f-right">(0)</span>
              </Link>
            </li>
          </ul>
        </div> */}
        <div className="widget mb-40">
          <div className="widget-title-box mb-30">
            <span className="animate-border"></span>
            <h3 className="widget-title">Products</h3>
          </div>
          <ul className="recent-posts">
            {products &&
              products.map((product) => (
                <li>
                  <div className="widget-posts-image">
                    <Link to="/blogDetails">
                      <img src={product && product.product_image} alt="" />
                    </Link>
                  </div>
                  <div className="widget-posts-body">
                    <h6 className="widget-posts-title">
                      <Link to={`/store/product/${product && product.product_id}`}>
                        {product && product.product_name}
                      </Link>
                    </h6>
                    <div className="widget-posts-meta"><h6>${product && product.price}.00</h6></div>
                  </div>
                </li>
              ))}
            {/* <li>
              <div className="widget-posts-image">
                <Link to="/blogDetails">
                  <img src="img/blog/details/img2.jpg" alt="" />
                </Link>
              </div>
              <div className="widget-posts-body">
                <h6 className="widget-posts-title">
                  <Link to="/blogDetails">
                    Lorem ipsum dolor sit cing elit, sed do.
                  </Link>
                </h6>
                <div className="widget-posts-meta">October 24, 2021 </div>
              </div>
            </li>
            <li>
              <div className="widget-posts-image">
                <Link to="/blogDetails">
                  <img src="img/blog/details/img3.jpg" alt="" />
                </Link>
              </div>
              <div className="widget-posts-body">
                <h6 className="widget-posts-title">
                  <Link to="/blogDetails">
                    Lorem ipsum dolor sit cing elit, sed do.
                  </Link>
                </h6>
                <div className="widget-posts-meta">October 28, 2021 </div>
              </div>
            </li> */}
          </ul>
        </div>
        {/* <div className="widget mb-40">
                    <div className="widget-title-box mb-30">
                        <span className="animate-border"></span>
                        <h3 className="widget-title">Social Profile</h3>
                    </div>
                    <div className="social-profile">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-behance"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div> */}
        {/* <div className="widget mb-40">
                    <div className="widget-title-box mb-30">
                        <span className="animate-border"></span>
                        <h3 className="widget-title">Instagram Feeds</h3>
                    </div>
                    <ul id="Instafeed">
                        <li><a href="#"><img src="img/instagram/ins1.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="img/instagram/ins2.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="img/instagram/ins3.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="img/instagram/ins4.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="img/instagram/ins5.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="img/instagram/ins6.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="img/instagram/ins7.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="img/instagram/ins8.jpg" alt=""/></a></li>
                        <li><a href="#"><img src="img/instagram/ins9.jpg" alt=""/></a></li>
                    </ul>
                </div> */}
        {/* <div className="widget mb-40">
                    <div className="widget-title-box mb-30">
                        <span className="animate-border"></span>
                        <h3 className="widget-title">Instagram Feeds</h3>
                    </div>
                    <div className="tag">
                        <Link to="/blogs">Popular</Link>
                        <Link to="/blogs">desgin</Link>
                        <Link to="/blogs">usability</Link>
                        <Link to="/blogs">develop</Link>
                        <Link to="/blogs">consult</Link>
                        <Link to="/blogs">icon</Link>
                        <Link to="/blogs">HTML</Link>
                        <Link to="/blogs">ux</Link>
                        <Link to="/blogs">business</Link>
                        <Link to="/blogs">kit</Link>
                        <Link to="/blogs">keyboard</Link>
                        <Link to="/blogs">tech</Link>
                    </div>
                </div> */}
        {/* <div className="widget mb-40 p-0 b-0">
                    <div className="banner-widget">
                   <Link to="/contact"><img src="img/blog/details/banner.png" alt=""/></Link>
                    </div>
                </div> */}
      </div>
    </>
  );
};

export default ProductDetailsRightSide;
