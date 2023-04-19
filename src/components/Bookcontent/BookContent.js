import React, { useContext } from 'react'
import silvabook from "../../images/newimgs/img3.avif"
import { AuthContext } from '../../context/AllContext';
function BookContent() {
    const { isDesktopOrLaptop,
        isTabletOrMobile } = useContext(AuthContext);
    return (
        <>
            <div className="container mt-5">
                <div className='d-flex justify-content-center align-items-center mt-5 mb-5'>
                    <div style={{ maxWidth: isDesktopOrLaptop ? "60%" : "100%" }} >
                        <h2 className='text-center' >The 6 Phase Meditation Method</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-5 mb-4">
                        <img src={silvabook} alt="silva-mind-control-method" style={{ width: "100%", height: "300px",borderRadius:"10px" }} />
                    </div>
                    <div className="col-sm-12 col-md-7 text-start">
                        <p style={{ fontSize: "1.6rem", color: "black", fontWeight: "500" }}>
                            Introducing the USA Today Best-Seller
                            by Jose Silva
                        </p>
                        <p style={{ fontSize: "1.3rem", color: "black", fontWeight: "500"}}>
                            Top 10 Book of Los Angeles Times and Los Angeles Daily News
                        </p>
                        <p style={{ fontSize: "1.2rem", color: "black"}}>
                            The world’s top achievers have a secret advantage: and now it's yours. The 6 Phase Meditation Method is Vishen's latest bestseller, presenting meditation like you've never seen it before.
                            Discover how today’s best athletes, artists, and CEOs use this hyper-optimized practice to perform like superhumans, create the unimaginable, and achieve the impossible in minutes a day.
                        </p>
                        <button className='primary_btn' style={{borderRadius:"40px",marginBottom:"20px"}}>
                           Get the book
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookContent