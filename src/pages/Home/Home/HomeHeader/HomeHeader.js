import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../../components/Shared/Sidebar/Sidebar';
import useGlobalContext from '../../../../hooks/useGlobalContext';

const HomeHeader = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   return (
      <>
         <header>
            <div className="top-bar d-none d-md-block">
               <div className="container">
                  <div className="row d-flex align-items-center">
                     <div className="col-xl-7 offset-xl-0 col-lg-6 offset-lg-1 col-md-7 offset-md-1">
                        <div className="header-info">
                           <span> +1-800-545-6463 (Toll Free for USA)  |  + 1- 956-286-3004</span>
                           <span>digital@silvamethod.com</span>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-5 col-md-4">
                        <div className="header-top-right-btn f-right">
                           <Link to="/contact" className="primary_btn">Explore Courses</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className={stickyMenu ? "header-menu-area sticky_menu" : "header-menu-area"}>
               <div className="container menu_wrapper">
                  <div className="row align-items-center">
                     <div className="col-xl-3 col-lg-3 col-md-6 col-6 d-flex align-items-center">
                        <div>
                           <Link to="/"><img src="img/logo/silvamethod-logo.png" alt="" /></Link>
                        </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-6 col-6">
                        <div className="header-right f-right">
                           {/* <div className="header-lang f-right pos-rel d-none d-lg-block">
                              <div className="lang-icon">
                                 <img src="img/icon/lang.png" alt=""/>
                                    <span>EN<i className="fas fa-angle-down"></i></span>
                              </div>
                              <ul className="header-lang-list">
                                 <li><a href="#">USA</a></li>
                                 <li><a href="#">UK</a></li>
                                 <li><a href="#">CA</a></li>
                                 <li><a href="#">AU</a></li>
                              </ul>
                           </div> */}
                           {/* <div className="header-social-icons f-right d-none d-xl-block">
                              <ul>
                                 <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                 <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                 <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                 <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                                 <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                              </ul>
                           </div> */}
                        </div>
                        <div className="header__menu f-right">
                           <nav id="mobile-menu">
                              <ul>
                                 <li><Link to="/">Home</Link>                            
                                 </li>
                                 {/* <li><Link to="/">Enroll Online Classes</Link></li> */}
                                 <li><Link to="/about">About</Link>
                                    <ul className="submenu">
                                       <li><Link to="/about">About us</Link></li>
                                       <li><Link to="/contact">Contact Us</Link></li>
                                       <li><Link to="/research">Research</Link></li>
                                    </ul>
                                 </li>
                                 <li><Link to="/courses/basic_lecture_series">Seminars</Link>
                                    <ul className="submenu">
                                       <li><Link to="/courses/basic_lecture_series">Basic Lecture Series(BLS-4)</Link></li>
                                       <li><Link to="/courses/seminar">Seminars</Link></li>
                                       <li><Link to="/courses/silva_life_system">Silva Life System</Link></li>
                                       <li><Link to="/doctorDetails">Silva Intuition System</Link></li>
                                       <li><Link to="/doctorDetails">Silva Mastery System</Link></li>
                                    </ul>
                                 </li>
                                 <li><Link to="/events/live">Events</Link>
                                    <ul className="submenu">
                                       <li><Link to="/events/live">Live</Link></li>
                                       <li><Link to="/events/online">Online</Link></li>                     
                                    </ul>
                                 </li>
                                 <li><Link to="/instructor">Instructors</Link>
                                    <ul className="submenu">
                                       <li><Link to="/instructor">Instructors</Link></li>
                                       <li><Link to="/instructor/find_instructor">Find Instructor</Link></li>
                                       <li><Link to="/instructor/become_silva_instructor">Become an Instructor</Link></li>
                                    </ul>
                                 </li>
                                 <li><Link to="/store">Products</Link>
                                    <ul className="submenu">
                                       <li><Link to="/about">Silva Life System & Silva Intuition System (The Complete Silva Method Course)</Link></li>
                                       <li><Link to="/appoinment">Silva Life System</Link></li>
                                       <li><Link to="/portfolioTwoColumn">Silva Intuition System</Link></li>
                                       <li><Link to="/portfolioThreeColumn">Silva Method Complete Manifesting Program</Link></li>
                                       <li><Link to="/portfolioSlider">Manifesting course</Link></li>
                                       <li><Link to="/contact">Activating Intuition</Link></li>
                                       <li><Link to="/notMatch">Healing & Problem Solving</Link></li>
                                       <li><Link to="/about">Manage Body & Mind Simultaneously</Link></li>
                                       <li><Link to="/appoinment">4 Steps to the Silva Life System</Link></li>
                                       <li><Link to="/portfolioTwoColumn">Silva Long Relax Exercise by Jose Silva</Link></li>
                                       <li><Link to="/portfolioThreeColumn">Silva Alpha Sound</Link></li>
                                       <li><Link to="/portfolioSlider">Silva Theta Sound</Link></li>
                                       <li><Link to="/contact">Home Study Programs</Link></li>
                                       <li><Link to="/notMatch">Books</Link></li>
                                       <li><Link to="/portfolioSlider">Dynamic Meditation</Link></li>
                                       <li><Link to="/contact">Silva Master Classes</Link></li>
                                       <li><Link to="/notMatch">Long Relax Exercise by Jose Silva</Link></li>
                                    </ul>
                                 </li>
                                 <li><Link to="/store/blogs/">Blogs</Link>
                                    <ul className="submenu">
                                       <li><Link to="/store/blogs/">English Blogs</Link></li>
                                       <li><Link to="/store/spanish-blogs/">Spanish Blogs</Link></li>                     
                                    </ul>
                                 </li>
                                 <li><Link to="/login">Course Login</Link></li>
                                 <li><Link to="/">Silva Cases</Link></li>
                              </ul>
                           </nav>
                        </div>

                        <div className="side-menu-icon d-lg-none text-end">
                           <button onClick={handleShow} className="side-toggle border-0 bg-transparent">
                              <i className="fas fa-bars"></i> </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default HomeHeader;