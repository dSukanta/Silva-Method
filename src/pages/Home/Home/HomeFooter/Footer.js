import React from 'react';
import { BsFacebook, BsTwitter } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { TfiPinterest } from 'react-icons/tfi';
import { useMediaQuery } from 'react-responsive'
import { Link, NavLink } from 'react-router-dom';

function CustomFooter() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1280px)'})
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({minWidth: 320, maxWidth:480  })

    return (
        <div className="custom-footer-container">
            <div className="row">
                <div className="col-md-12">
                    <footer className="custom-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 m-b-30">
                                    <div className="custom-footer-title m-t-5 m-b-20 p-b-8">
                                        Courses
                                    </div>
                                    <div className="custom-footer-links">
                                        <a href="#">
                                        Silva Life System
                                        </a>
                                        <a href="#">
                                        Silva Intuition System
                                        </a>
                                        <a href="#">
                                        Silva Mastery System
                                        </a>
                                        <a href="#">
                                        Basic Lecture Series(BLS)
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 m-b-30">
                                    <div className="custom-footer-title m-t-5 m-b-20 p-b-8">
                                        Quick Links
                                    </div>
                                    <div className="custom-footer-links">
                                        <a href="#">
                                            Books
                                        </a>
                                        <a href="#">
                                            FAQs
                                        </a>
                                        <a href="#">
                                            Silva Cases
                                        </a>
                                        <a href="#">
                                           Login as Admin
                                        </a>
                                        <a href="#">
                                            Login as Instructor
                                        </a>
                                        <Link to="/silva_membership">
                                           Become a Member
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-3 m-b-30">
                                    <div className="custom-footer-title m-t-5 m-b-20 p-b-8">
                                        Latest Blogs
                                    </div>
                                    <div className="custom-footer-links">
                                        <a href="#">
                                        What is Silva Method?
                                        </a>
                                        <a href="#">
                                        Silva Life System: The Core of Silva Method Program
                                        </a>
                                        <a href="#">
                                        What is Manifesting & how it can Transform your life
                                        </a>
                                        <a href="#">
                                        A biography on Jose Silva’s Penmanship
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-3 m-b-30">
                                    <div className="custom-footer-title m-t-5 m-b-20 p-b-8">
                                        About us
                                    </div>
                                    <div>
                                        <p className='text-light'>We are a global organization dedicated to changing lives by empowering minds.</p>
                                        <p className='text-light'>Phone : +1-800-545-6463 (Toll Free for USA) | + 1  956-286-3004</p>
                                        <p className='text-light'>WhatsApp : +1  956-722-6391</p>
                                        <img src='https://seal-austin.bbb.org/seals/blue-seal-293-61-whitetxt-bbb-19971.png' />
                                        <div style={{ display: 'flex' }}>
                                            <NavLink to="/contact">
                                            <button className='footer-contact-btn'>Contact Us</button>
                                            </NavLink>
                                            <NavLink to="/register">
                                            <button className='footer-join-btn'>Join Us</button>
                                            </NavLink>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <div className="custom-footer-bottom">
                        <div>
                            <p className='text-light'>Copyright © 2023, All Rights Reserved</p>
                        </div>
                        <div className="custom-footer-social-links m-t-30">
                            <li>
                                <a href="#">
                                    <BsFacebook />
                                </a>
                                <a href="#">
                                    <BsTwitter />
                                </a>
                                <a href="#">
                                    <AiOutlineInstagram />
                                </a>
                                <a href="#">
                                    <TfiPinterest />
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomFooter