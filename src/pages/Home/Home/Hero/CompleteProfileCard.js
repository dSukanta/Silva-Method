import React from 'react'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'
import { AiFillCloseCircle } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CompleteProfileCard() {
    const navigate = useNavigate();
    const [showShow, setShouldShow] = useState(true);
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    if (!showShow) {
        return "";
    }
    return (
      <div className="container my-5">
        <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6">
            <Card style={{width:"98%",padding:"20px"}}>
            <Card.Body className='d-flex flex-column gap-3 justify-content-center align-items-center'>
                <div>
                    <span style={{ padding: "20px", borderRadius: "35px", backgroundColor: "orange" }}>
                        <ImProfile size={30} color='white' />
                    </span>
                </div>
                <div>
                    <span style={{ color: "black", fontSize: "1.1rem", fontWeight: "600" }}>Complete your profile</span>
                </div>
                <div>
                    <span>It helps us improve your Mindvalley experience with better recommendations</span>
                </div>
                <button className='primary_btn3 mx-3' style={{ marginTop: isMobile ? "20px" : "0px" }}
                onClick={()=>navigate("/store/profile")}
                >Update Profile</button>
           </Card.Body>
            </Card>
            </div>
        </div>
      </div>
    )
}

export default CompleteProfileCard