import moment from "moment/moment";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { GrMail, GrLinkedinOption } from "react-icons/gr";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  MailruShareButton,
  TwitterShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";
import ProductSlide from "../../pages/Store/products/ProductSlide";

const BlogDetailsLeftSide = ({ data }) => {
  console.log(data);

  const url = document.location.href;

  // console.log(url);

  return (
    <>
      <div className="col-lg-12 p-4">
      <div style={{padding:'10px', backgroundColor:'black', color:'white', textAlign:'center', textTransform:'capitalize'}}>
            {data && data.category}
        </div>
        <div className="post-meta mb-15 text-center pt-3">
        <h3 className="blog-title">{data && data.title}</h3>
          <span>
            <i className="far fa-calendar-check"></i>{" "}
            {data && moment(data.created_at).format("LL")}{" "}
          </span>
          <span>
            by <b>Author</b>
          </span>
          {/* <span>
                <Link to="/blogDetails">
                  <i className="far fa-comments"></i> 23 Comments
                </Link>
              </span> */}
        </div>
        <article className="postbox post format-image mb-40">
          {/* {details_topBar} */}
          <div className="postbox__text bg-none">
            <div>
                <img src={data && data.web_image} alt="blog img"/>
            </div>
            
            <div className="post-text mb-20">
              <p>{data && data.seo_description}</p>
              {/* <blockquote>
                                <p>This health blog from NPR takes a fairly broad look at the medical world,.</p>
                                <footer>- Rosalina Pong</footer>
                            </blockquote> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt.
              </p>

              <div className="blog-inner-img mb-30 mt-30">
                <img src={data && data.web_image} />
              </div>

              <div className="inner-content">
                <h4>A cleansing hot shower or bath</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia.
                </p>
              </div>
              <div className="inner-content">
                <h4>Setting the mood with incense</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia.
                </p>
              </div>
            </div>
            {/* <div className="row mt-50">
                            <div className="col-xl-8 col-lg-8 col-md-8 mb-15">
                                <div className="blog-post-tag">
                                    <span>Releted Tags</span>
                                    <Link to="/blogs">organic</Link>
                                    <Link to="/blogs">Foods</Link>
                                    <Link to="/blogs">tasty</Link>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 mb-15">
                                <div className="blog-share-icon text-left text-md-right">
                                    <span>Share: </span>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-google-plus-g"></i></a>
                                    <a href="#"><i className="fab fa-vimeo-v"></i></a>
                                </div>
                            </div>
                        </div> */}
            <div className="row">
              <div className="col-12">
                <div className="navigation-border pt-50 mt-40"></div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5">
                <div className="bakix-navigation b-next-post text-left mb-30">
                  <span>Share</span>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <FacebookShareButton url={url}>
                      <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <TwitterShareButton url={url}>
                      <TwitterIcon size={32} round={true} url={url} />
                    </TwitterShareButton>
                    <EmailShareButton url={url}>
                      <EmailIcon size={32} round={true} url={url} />
                    </EmailShareButton>
                    <LinkedinShareButton url={url}>
                      <LinkedinIcon size={32} round={true} url={url} />
                    </LinkedinShareButton>
                  </div>
                </div>
              </div>
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
          <div className="author mt-50 mb-40 d-flex gap-3 h-100">
            <div className="d-flex w-50 justify-content-center align-items-center text-align-center">
              <img
                src="https://img.freepik.com/free-icon/important-person_318-10744.jpg"
                alt=""
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div className="author-text d-flex flex-column justify-content-center align-items-center">
              <p className="p-3">Written by</p>
              <h3>{"Author Name"}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequa aute irure dolor.{" "}
              </p>
              <div className="author-icon">
                {/* <a href="#"><FaFacebookF color='#3e5b98'/></a>
                                <a href="#"><FaTwitter color='#4da7de'/></a>
                                <a href="#"><GrMail color='#000'/></a>
                                <a href="#"><GrLinkedinOption color='#3371b7'/></a>
                                <a href="#"><i className="fab fa-vimeo-v"></i></a> */}
                {/* <FacebookShareButton url={url}>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={url}>
                  <TwitterIcon size={32} round={true} url={url} />
                </TwitterShareButton>
                <EmailShareButton url={url}>
                  <EmailIcon size={32} round={true} url={url} />
                </EmailShareButton> */}
                <a href={`https://my.linkedin.com/in`} target="_blank"><LinkedinIcon size={32} round={true}/></a>

                {/* <TwitterIcon size={32} round={true}  url={url}/>
                                <EmailIcon size={32} round={true}  url={url}/>
                                <LinkedinIcon size={32} round={true} url={url} /> */}
              </div>
            </div>
          </div>
          <div className="post-comments">
            <div className="blog-coment-title mb-30">
              <h2>03 Comments</h2>
            </div>
            <div className="latest-comments">
              <ul>
                <li>
                  <div className="comments-box">
                    <div className="comments-avatar">
                      <img src="img/blog/details/comments1.png" alt="" />
                    </div>
                    <div className="comments-text">
                      <div className="avatar-name">
                        <h5>Karon Balina</h5>
                        <span>19th May 2021</span>
                        <Link to="/blogDetails" className="reply">
                          <i className="fas fa-reply"></i>Reply
                        </Link>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="children">
                  <div className="comments-box">
                    <div className="comments-avatar">
                      <img src="img/blog/details/comments1.png" alt="" />
                    </div>
                    <div className="comments-text">
                      <div className="avatar-name">
                        <h5>Julias Roy</h5>
                        <span>19th May 2021</span>
                        <Link to="/blogDetails" className="reply">
                          <i className="fas fa-reply"></i>Reply
                        </Link>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="comments-box">
                    <div className="comments-avatar">
                      <img src="img/blog/details/comments2.png" alt="" />
                    </div>
                    <div className="comments-text">
                      <div className="avatar-name">
                        <h5>Arista Williamson</h5>
                        <span>19th May 2021</span>
                        <Link to="/blogDetails" className="reply">
                          <i className="fas fa-reply"></i>Reply
                        </Link>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <ProductSlide/>
          <div className="post-comments-form">
            <div className="post-comments-title">
              <h2>Post Comments</h2>
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
      </div>
    </>
  );
};

export default BlogDetailsLeftSide;
