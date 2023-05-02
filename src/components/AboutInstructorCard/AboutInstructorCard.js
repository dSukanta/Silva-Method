import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineGooglePlus, AiFillLinkedin } from "react-icons/ai";
import ins1 from "../../images/instructors/ins1.png"
import ins2 from "../../images/instructors/ins2.jpg";
import ins3 from "../../images/instructors/ins3.jpg"
import ins4 from "../../images/instructors/ins4.jpg"

function AboutInstructorCard() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <div className="our-team">
                        <div className="picture">
                            <img className="img-fluid" src={ins1} />
                        </div>
                        <div className="team-content">
                            <h3 className="name">Ken Coscia</h3>
                            <h6 className="title">CERTIFIED SILVA METHOD INSTRUCTOR</h6>
                        </div>
                        <ul className="social">
                            <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                                <FaFacebookSquare />
                            </a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                                <AiOutlineTwitter />
                            </a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                                <AiOutlineGooglePlus />
                            </a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                                <AiFillLinkedin />
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <div className="our-team">
                        <div className="picture">
                            <img className="img-fluid" src={ins2} />
                        </div>
                        <div className="team-content">
                            <h3 className="name">Allen Goldman N.D.</h3>
                            <h6 className="title">CERTIFIED SILVA METHOD INSTRUCTOR</h6>
                        </div>
                        <ul className="social">
                            <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                                <FaFacebookSquare />
                            </a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                                <AiOutlineTwitter />
                            </a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                                <AiOutlineGooglePlus />
                            </a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                                <AiFillLinkedin />
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <div className="our-team">
                        <div className="picture">
                            <img className="img-fluid" src={ins3} />
                        </div>
                        <div className="team-content">
                            <h3 className="name">Claudia Ruiz</h3>
                            <h6 className="title">CERTIFIED SILVA METHOD INSTRUCTOR</h6>
                        </div>
                        <ul className="social">
                            <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                                <FaFacebookSquare />
                            </a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                                <AiOutlineTwitter />
                            </a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                                <AiOutlineGooglePlus />
                            </a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                                <AiFillLinkedin />
                            </a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-3">
                    <div className="our-team">
                        <div className="picture">
                            <img className="img-fluid" src={ins4} />
                        </div>
                        <div className="team-content">
                            <h3 className="name">Jeanine Sciacca</h3>
                            <h6 className="title">CERTIFIED SILVA METHOD INSTRUCTOR</h6>
                        </div>
                        <ul className="social">
                            <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                                <FaFacebookSquare />
                            </a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                                <AiOutlineTwitter />
                            </a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                                <AiOutlineGooglePlus />
                            </a></li>
                            <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                                <AiFillLinkedin />
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutInstructorCard