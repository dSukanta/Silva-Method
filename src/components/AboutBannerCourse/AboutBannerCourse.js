import React, { useContext } from 'react'
import "./Aboutbanner.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AllContext';
import aboutbanner from "../../images/instructors/aboutbanner.png"
import { FiPlay } from "react-icons/fi"
function AboutBannerCourse() {
    const { isDesktopOrLaptop,
        isBigScreen,
        isTabletOrMobile,
        isPortrait,
        isRetina } = useContext(AuthContext);
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }} >
                    <div style={{ textAlign: "start", maxWidth: ( isTabletOrMobile ||  isPortrait|| isRetina)?"100%":"70%", fontSize: "1.5rem", color: "black" }}>
                        <h5>
                            We spend the prime years of our lives preparing for our careers. But we spend hardly any time preparing for things
                            that will determine the quality of our life experience and the quality of our relationships,
                            health, mindset and wellbeing. Mindvalley teaches you the things that actually matter most in life.
                            And we do it by bringing in the latest cutting edge techniques, the world’s best teachers, and a powerful learning platform that is the best of its kind in the world.
                        </h5>
                        <div>
                            <iframe style={{ width: "100%", height: "500px", marginTop: "30px" }} src="https://www.youtube.com/embed/tgbNymZ7vqY">
                            </iframe>
                        </div>
                        <div className="jumbotron mt-5" style={{background:"#f3f4f6",padding:"40px",borderRadius:"20px"}}>
                            <h3 style={{color:"black"}}>
                                “We’re constantly exploring, inventing, and optimizing personal transformation to ultimately unite our species, save our planet, and usher in a new golden age for humanity.”
                            </h3>
                            <p className="lead" style={{color:"black"}}>
                            - Random Name, Founder of Random
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBannerCourse