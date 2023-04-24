import React, { useContext } from 'react'
import { AuthContext } from '../../context/AllContext';

function AboutTopSection() {
    const { isDesktopOrLaptop,
        isBigScreen,
        isTabletOrMobile,
        isPortrait,
        isRetina } = useContext(AuthContext);
    return (
        <div className="jumbotron jumbotron-fluid text-center text-dark" style={{marginTop:"50px"}}>
            <div className="container">
                <div style={{ display: "flex", justifyContent: "center",marginBottom:"40px" }}>
                    <div style={{
                        maxWidth: (isTabletOrMobile ||
                            isPortrait) ? "100%" : "65%",
                            fontWeight:"bolder"
                    }}>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                <p style={{
                        maxWidth: (isTabletOrMobile ||
                            isPortrait) ? "100%" : "75%",
                            fontWeight:"500",
                            fontSize:"1.8rem",
                    }}>Being Human is more than just what our broken education system makes it out to be.
                 We teach the world the art of truly living extraordinary, fulfilling, happy lives.</p>
                </div>
               
            </div>
        </div>
    )
}

export default AboutTopSection