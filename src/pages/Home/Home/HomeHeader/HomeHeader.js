import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../../../components/Shared/Sidebar/Sidebar';
import useGlobalContext from '../../../../hooks/useGlobalContext';
import { AuthContext } from '../../../../context/AllContext';
import {BiLogOut} from "react-icons/bi";
import Swal from 'sweetalert2';

const HomeHeader = () => {
   const navigate = useNavigate()
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   const { isUserLoggedIn, userData, logout } = useContext(AuthContext)

   const handleLogout = async()=>{
      Swal.fire({
         title: 'Are you sure, you want to logout?',
         showCancelButton: true,
         confirmButtonText: 'Logout',
       }).then((result) => {
         /* Read more about isConfirmed, isDenied below */
         if (result.isConfirmed) {
           logout()
           navigate("/")
         }
       })
   }
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
                                 <li><Link to="/services">About</Link>
                                    <ul className="submenu">
                                       <li><Link to="/services">About us</Link></li>
                                       <li><Link to="/servicesTwo">Contact Us</Link></li>
                                       <li><Link to="/servicesDetails">Research</Link></li>
                                    </ul>
                                 </li>
                                 <li><Link to="/doctors">Seminars</Link>
                                    <ul className="submenu">
                                       <li><Link to="/doctors">Basic Lecture Series(BLS-4)</Link></li>
                                       <li><Link to="/doctorsTwo">Seminars</Link></li>
                                       <li><Link to="/doctorDetails">Silva Life System</Link></li>
                                       <li><Link to="/doctorDetails">Silva Intuition System</Link></li>
                                       <li><Link to="/doctorDetails">Silva Mastery System</Link></li>
                                    </ul>
                                 </li>
                                 <li><Link to="/shop">Events</Link>
                                    <ul className="submenu">
                                       <li><Link to="/shop">Live</Link></li>
                                       <li><Link to="/shopDetails">Online</Link></li>
                                    </ul>
                                 </li>
                                 <li><Link to="/blogs">Instructors</Link>
                                    <ul className="submenu">
                                       <li><Link to="/blogs">Instructors</Link></li>
                                       <li><Link to="/blogLeftSideBar">Find Instructor</Link></li>
                                       <li><Link to="/blogNoSideBar">Become an Instructor</Link></li>
                                    </ul>
                                 </li>
                                 <li><a href="#">Products</a>
                                    <ul className="submenu">
                                       <li><Link to="/about">About</Link></li>
                                       <li><Link to="/appoinment">Appoinment</Link></li>
                                       <li><Link to="/portfolioTwoColumn">Portfolio 2 column</Link></li>
                                       <li><Link to="/portfolioThreeColumn">Portfolio 3 column</Link></li>
                                       <li><Link to="/portfolioSlider">Portfolio Slider</Link></li>
                                       <li><Link to="/contact">Contact</Link></li>
                                       <li><Link to="/notMatch">404 page</Link></li>
                                    </ul>
                                 </li>
                                 <li><Link to="/shop">Blogs</Link>
                                    <ul className="submenu">
                                       <li><Link to="/shop">English Blogs</Link></li>
                                       <li><Link to="/shopDetails">Spanish Blogs</Link></li>
                                    </ul>
                                 </li>

                                 {
                                    isUserLoggedIn && (
                                       <li>
                                          <button className='btn btn-danger btn-sm' onClick={handleLogout}>
                                             <BiLogOut size={20} />
                                             <span className='mx-2'>
                                             Logout
                                             </span>
                                          </button>
                                       </li>
                                    )
                                 }

                                 {
                                    !isUserLoggedIn && (
                                          <li><Link to="/login">Login/Register</Link>
                                             <ul className="submenu">
                                                <li><Link to="/login">Course Login</Link></li>
                                                <li><Link to="/register">Course Register</Link></li>
                                             </ul>
                                          </li>
                                    )
                                 }
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
               </div >
            </div >
         </header >

         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default HomeHeader;