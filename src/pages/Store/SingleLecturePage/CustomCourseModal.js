import React from 'react'
import Button from 'react-bootstrap/Button';
import { AiOutlineClose } from "react-icons/ai";
import Modal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import { Link, useParams } from 'react-router-dom';
import ReactStars from 'react-stars';

function CustomCourseModal({ show, openModal, closeModal,handleNext }) {
    const params = useParams();
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    const customStyles = {
        overlay:{
          opacity:1,
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: 0,
            border: "1px solid whitesmoke",
            borderRadius:"15px"
        },
    };

    return (
        <Modal
            isOpen={show}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            
        >
            {/* <div className='d-flex justify-content-end'>
                <AiOutlineClose size={25} />
            </div> */}
            <div style={{ width: isDesktopOrLaptop?"500px":isTablet?"400px":"400px",position:"relative" }}>
                
                <img src="https://assets.mindvalley.com/api/v1/assets/394c0052-1d13-431b-9ecb-33f23c98600e.jpg?transform=q_90,w_1000,c_fill"
                    alt="" />
                <AiOutlineClose style={{position:"absolute",top:"10",right:"10"}} onClick={closeModal} />
                <h3 className='text-center mt-3'>Well Done, This Lesson is Complete</h3>
                <p className='text-center' style={{ fontSize: "1.1rem" }}>Rate Lesson</p>
                <ReactStars
                    count={5}
                    size={50}
                    color2={'#ffd700'}
                    className='stars'
                />
                <div className='d-flex justify-content-center flex-column gap-4'>
                    <button className='primary_btn2 mx-4' onClick={handleNext}>Next Lesson</button>

                    <Link to={`/store/course/${params.course_id}`}>
                    <p className='text-center' style={{ fontSize: "1.1rem", color: "#9b37f2" }}>Back to all lessons</p>
                    </Link>
                </div>
            </div>
        </Modal>
    )
}

export default CustomCourseModal