import React from 'react'
import { Image, Offcanvas, ProgressBar } from 'react-bootstrap'
import { AiOutlineClose } from "react-icons/ai";
import { Tooltip } from 'react-tooltip'
import { BsCheckCircleFill } from "react-icons/bs"


function SidebarExample({ show, handleClose, ...props }) {
    const data = [
        {
            title: "Preparation",
            completed: "3 / 3",
            lessons: [
                {
                    title: "Intro 1 - Blah Blah Blah",
                    img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
                    duration: "10 mins",
                    completed: true
                },
                {
                    title: "Intro 2 - Blah Blah Blah",
                    img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
                    duration: "15 mins",
                    completed: true
                },
                {
                    title: "Intro 3 - Blah Blah Blah",
                    img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
                    duration: "12 mins",
                    completed: true
                }
            ]
        },
        {
            title: "The Six Phase Medication",
            completed: "2 / 7",
            lessons: [
                {
                    title: "Intro 1 - Blah Blah Blah",
                    img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
                    duration: "10 mins",
                    completed: true
                },
                {
                    title: "Intro 2 - Blah Blah Blah",
                    img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
                    duration: "15 mins",
                    completed: true
                },
                {
                    title: "Intro 3 - Blah Blah Blah",
                    img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
                    duration: "4 mins",
                    completed: false
                },
                {
                    title: "Intro 4 - Blah Blah Blah",
                    img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
                    duration: "5 mins",
                    completed: false
                },
                {
                    title: "Intro 5 - Blah Blah Blah",
                    img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
                    duration: "20 mins",
                    completed: false
                },
                {
                    title: "Intro 6 - Blah Blah Blah bah",
                    img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
                    duration: "10 mins",
                    completed: false
                },
                {
                    title: "Intro 7 - Blah Blah Blah",
                    img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
                    duration: "8 mins",
                    completed: false
                }
            ]
        }
    ]
    return (
        <Offcanvas show={show} onHide={handleClose} {...props} responsive="lg">
            <Offcanvas.Header className='d-flex justify-content-end'>
                <AiOutlineClose size={30} color='white' onClick={handleClose} />
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div style={{ width: "100%" }}>
                    <ProgressBar now={60} />
                    <h6 className='mt-3 white-color'>2 / 7 Lessons completed</h6>
                </div>

                <div className='mt-3'>
                    {
                        data.map((val, i) => (
                            <div>
                                <p className='text-start white-color'>{val.title} <br /> {val.completed}</p>
                                {
                                    val.lessons.map((value, i) => (
                                        <div className='d-flex justify-content-between align-items-center align-content-center mb-4 activediv'>
                                            <img src={value.img} style={{ width: "120px", height: "100%" }} />
                                            <div className='d-flex flex-column align-items-center justify-content-center mx-3'>
                                                <a
                                                    data-tooltip-id="my-tooltip"
                                                    data-tooltip-content={value.title}
                                                    data-tooltip-place="top"
                                                    data-tooltip-variant="light"
                                                >
                                                    <p className='white-color' style={{ wordBreak: "break-word" }}>{value.title.substring(0, 20)}</p>
                                                </a>
                                                <p className='white-color'>{value.duration}</p>

                                            </div>
                                            {
                                                value.completed ? (
                                                    <BsCheckCircleFill size={30} color={"green"} />
                                                ) : (
                                                    <span className='white-color' style={{ fontSize: "1.2rem" }}>{" < "}</span>
                                                )
                                            }
                                        </div>
                                    ))
                                }
                                <hr />
                            </div>
                        ))
                    }
                </div>
            </Offcanvas.Body>
            <Tooltip id="my-tooltip" />
        </Offcanvas>
    )
}

export default SidebarExample