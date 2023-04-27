import React from 'react'
import { Accordion, Badge } from 'react-bootstrap'
import { HiOutlineArrowRight } from "react-icons/hi"
import { useMediaQuery } from 'react-responsive'
import { AiFillLock } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'
function CustomAccordion() {
    const navigate = useNavigate();
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })

    const items = [
        {
            img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg",
            title: "Intro 1, The Truth About Meditation",
            duration: "16 min",
            unlocked: true
        },
        {
            img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg",
            title: "Intro 2 - Introducing The 6 Phases",
            duration: "15 min",
            unlocked: false
        },
        {
            img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg",
            title: "Intro 3 - How to Practice The 6 Phase Meditation",
            duration: "9 min",
            unlocked: true
        },
    ]
    return (
        <Accordion>
            <Accordion.Item eventKey="0" className='mb-4'>
                <Accordion.Header>
                    <div className='d-flex justify-content-start flex-column'>
                        <h4 className='white-color'>Preparation</h4>
                        <p className='white-color'>Start program to access all lessons</p>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <li>
                        {
                            items.map((val, i) => (
                                <ul className='d-flex justify-content-between mt-3 pb-2' style={{ borderBottom: "2px solid gray" }}>
                                    <div className='d-flex justify-content-start gap-3'>
                                        <img src={val.img} style={{ width: "120px", height: "60px", objectFit: "cover" }} />
                                        <div className='d-flex justify-content-center align-items-start flex-column'>
                                            <p className='white-color' style={{ fontSize: isDesktopOrLaptop ? "1.2rem" : "0.8rem" }}>{val.title}</p>
                                            <p style={{ color: "lightgray" }}>{val.duration}</p>
                                        </div>
                                    </div>
                                    {
                                        val.unlocked===true ? (
                                            <div className={`d-flex justify-content-center align-items-center gap-4 ${isDesktopOrLaptop ? "" : "flex-column"}`}>
                                                <Badge className='badgenew' bg="light" style={{ color: "black" }} onClick={()=>navigate("/store/course/learn-meditation/intros/1/preview")}>Preview</Badge>
                                                <HiOutlineArrowRight size={20} />
                                            </div>
                                        ) : (
                                            <div className='d-flex justify-content-center align-items-center'>
                                                 <AiFillLock size={30} color='white' />
                                            </div>
                                        )
                                    }
                                </ul>
                            ))
                        }
                    </li>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default CustomAccordion