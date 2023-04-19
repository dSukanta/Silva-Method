import React from 'react';
import { Link } from 'react-router-dom';

const HomeFooter = () => {
    return (
        <>
            <footer>
                <div className="footer-top primary-bg pt-115 pb-90">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col-xl-5 col-lg-6 col-md-8">
                                <div className="footer-contact-info mb-30">
                                    <div className="emmergency-call fix">
                                        <div className="emmergency-call-icon f-left">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="emmergency-call-text f-left">
                                            <h6>Emergency number</h6>
                                            <span>202-555-0104</span>
                                        </div>
                                    </div>
                                    <div className="footer-logo mb-35">
                                        <Link to="/"><img src="img/logo/footer-logo.png" alt=""/></Link>
                                    </div>
                                    <div className="footer-contact-content mb-25">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                                    </div>
                                    <div className="footer-emailing">
                                        <ul>
                                            <li><i className="far fa-envelope"></i>info@examplemedical.com</li>
                                            <li><i className="far fa-clone"></i>examplemedical.com</li>
                                            <li><i className="far fa-flag"></i>227 Marion Street, Columbia</li>
                                        </ul>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                
                                <div className="footer-widget mb-30">
                                    <div className="footer-title">
                                        <h3>Courses</h3>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/servicesDetails">Silva Life System</Link></li>
                                            <li><Link to="/servicesDetails"> Silva Intuition System </Link></li>
                                            <li><Link to="/servicesDetails"> Silva Mastery System </Link></li>
                                            <li><Link to="/servicesDetails">Basic Lecture Series(BLS)</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                
                                <div className="footer-widget mb-30">
                                    <div className="footer-title">
                                        <h3>Latest Blogs</h3>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/servicesDetails">What is Silva Method?</Link></li>
                                            <li><Link to="/servicesDetails">Silva Life System: The Core of Silva Method Program</Link></li>
                                            <li><Link to="/servicesDetails">What is Manifesting & how it can Transform your life</Link></li>
                                            <li><Link to="/servicesDetails">A biography on Jose Silva’s Penmanship</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-3 d-md-none d-lg-block">
                                <div className="footer-widget mb-30">
                                    <div className="footer-title">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <div className="footer-menu">
                                        <ul>
                                            <li><Link to="/servicesDetails">Books</Link></li>
                                            <li><Link to="/doctors">FAQs</Link></li>
                                            <li><Link to="/blogs">Silva Cases</Link></li>
                                            <li><Link to="/shop">Login as Admin</Link></li>
                                            <li><Link to="/contact">Login as Instructor</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                
                                <div className="footer-widget mb-30">
                                    <div className="footer-title">
                                        <h3>About</h3>
                                    </div>
                                    <div className="footer-menu">
                                       <p>We are a global organization dedicated to changing lives by empowering minds.</p>
                                       <p>Phone : +1-800-545-6463 (Toll Free for USA) | + 1  956-286-3004</p>
                                       <p>WhatsApp : +1  956-722-6391</p>
                                       <img src='https://seal-austin.bbb.org/seals/blue-seal-293-61-whitetxt-bbb-19971.png'/>
                                        <div style={{display:'flex'}}>
                                            <button className='footer-contact-btn'>Contact Us</button>
                                            <button className='footer-join-btn'>Join Us</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom pt-25 pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="footer-copyright text-center">
                                    <p className="white-color">Copyright by@ BasicTheme - 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default HomeFooter;