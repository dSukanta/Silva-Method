import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaGoogle, FaPinterestP } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import OverlayCard from "./OverlayCard";

const ProductDetailsLeftSide = ({ details_topBar, product }) => {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 999 });
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 });

  //console.log(product);
  const {
    product_id,
    product_name,
    product_category,
    product_type,
    price,
    author,
    description,
  } = product;
  return (
    <>
      <div className="col-lg-8">
        <article className="postbox post format-image mb-40 p-4">
          <div
            style={{
              display: "flex",
              flexDirection: isDesktopOrLaptop ? "row" : "column",
              gap: "1rem",
              width: "100%",
            }}
          >
            {details_topBar}
            <div style={{ width: "100%" }}>
              <h3 className="blog-title">{product && product_name}</h3>
              <div
                className="post-text mb-20"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </div>

          <div className="row mt-50">
            <div className="col-xl-8 col-lg-8 col-md-8 mb-15">
              <div className="blog-post-tag">
                <span>Category</span>
                <a>{product_category}</a>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 mb-15">
              <div className="blog-share-icon text-left text-md-right">
                <span>Share: </span>
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaGoogle />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaPinterestP />
                </a>
              </div>
            </div>
          </div>

          <div className="postbox__text bg-none">
            {/* <div className="post-meta mb-15">
                            <span><i className="far fa-calendar-check"></i> September 15, 2021 </span>
                            <span><Link to="/blogDetails"><i className="far fa-user"></i> Diboli B. Joly</Link></span>
                            <span><Link to="/blogDetails"><i className="far fa-comments"></i> 23 Comments</Link></span>
                        </div> */}

            <div className="row">
              <div className="col-12">
                <div className="navigation-border pt-50 mt-40"></div>
              </div>
              {/* <div className="col-xl-5 col-lg-5 col-md-5">
                                <div className="bakix-navigation b-next-post text-left mb-30">
                                    <span><Link to="/blogDetails">Prev Post</Link></span>
                                    <h4><Link to="/blogDetails">Tips on Minimalist</Link></h4>
                                </div>
                            </div> */}
              {/* <div className="col-xl-2 col-lg-2 col-md-2 ">
                                <div className="bakix-filter text-left text-md-center mb-30">
                                    <Link to="/blogDetails"><img src="img/icon/filter.png" alt=""/></Link>
                                </div>
                            </div> */}
              {/* <div className="col-xl-5 col-lg-5 col-md-5">
                                <div className="bakix-navigation b-next-post text-left text-md-right  mb-30">
                                    <span><Link to="/blogDetails">Next Post</Link></span>
                                    <h4><Link to="/blogDetails">Tips on Minimalist</Link></h4>
                                </div>
                            </div> */}
            </div>
          </div>
          {/* <div className="author mt-80 mb-40">
                        <div className="author-img text-center">
                            <img src="img/blog/details/author.png" alt=""/>
                        </div>
                        <div className="author-text text-center">
                            <h3>MD. Salim Rana</h3>
                            <div className="author-icon">
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-behance-square"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                                <a href="#"><i className="fab fa-vimeo-v"></i></a>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex
                                ea commodo consequa aute irure dolor. </p>
                        </div>
                    </div> */}
          {/* <div className="post-comments">
                        <div className="blog-coment-title mb-30">
                            <h2>03 Comments</h2>
                        </div>
                        <div className="latest-comments">
                            <ul>
                                <li>
                                    <div className="comments-box">
                                        <div className="comments-avatar">
                                            <img src="img/blog/details/comments1.png" alt=""/>
                                        </div>
                                        <div className="comments-text">
                                            <div className="avatar-name">
                                                <h5>Karon Balina</h5>
                                                <span>19th May 2021</span>
                                                <Link to="/blogDetails" className="reply"><i className="fas fa-reply"></i>Reply</Link>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt
                                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="children">
                                    <div className="comments-box">
                                        <div className="comments-avatar">
                                            <img src="img/blog/details/comments1.png" alt=""/>
                                        </div>
                                        <div className="comments-text">
                                            <div className="avatar-name">
                                                <h5>Julias Roy</h5>
                                                <span>19th May 2021</span>
                                                <Link to="/blogDetails" className="reply"><i className="fas fa-reply"></i>Reply</Link>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt
                                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation
                                                ullamco laboris nisi ut aliquip.</p>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div className="comments-box">
                                        <div className="comments-avatar">
                                            <img src="img/blog/details/comments2.png" alt=""/>

                                        </div>
                                        <div className="comments-text">
                                            <div className="avatar-name">
                                                <h5>Arista Williamson</h5>
                                                <span>19th May 2021</span>
                                                <Link to="/blogDetails" className="reply"><i className="fas fa-reply"></i>Reply</Link>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                                tempor incididunt
                                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                                exercitation
                                                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div> */}
          <div className="post-comments-form">
            <div className="post-comments-title">
              <h2>{`BE THE FIRST TO REVIEW “${product_name}”`}</h2>
            </div>
            <form id="contacts-form" className="conatct-post-form" action="#">
              <div className="row">
                <div className="col-xl-12">
                  <div className="contact-icon contacts-message">
                    <textarea
                      name="comments"
                      id="comments"
                      cols="30"
                      rows="10"
                      placeholder="Your Comments...."
                    ></textarea>
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="contact-icon contacts-name">
                    <input type="text" placeholder="Your Name.... " />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="contact-icon contacts-email">
                    <input type="email" placeholder="Your Email...." />
                  </div>
                </div>
                <div className="col-xl-12">
                  <div className="contact-icon contacts-website">
                    <input type="text" placeholder="Your Website...." />
                  </div>
                </div>
                <div className="col-xl-12">
                  <button className="primary_btn theme-btn" type="submit">
                    Post comment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </article>
         <div className="p-5">
            <h3 style={{padding:'20px 5px'}}> <span style={{borderBottom:'2px solid black'}}>Re</span>lated products</h3>
         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
            {[1, 2, 3].map((el) => (
              <OverlayCard />
            ))}
          </div>
         </div>
          
       
      </div>
    </>
  );
};

export default ProductDetailsLeftSide;
