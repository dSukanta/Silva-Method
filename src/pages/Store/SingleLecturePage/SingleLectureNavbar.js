import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoMdArrowBack } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { TbMessages } from "react-icons/tb";
import { BsBook } from "react-icons/bs";
import { useMediaQuery } from 'react-responsive';

function SingleLectureNavbar({ handleShow, lession, userData }) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })

    return (
        <Navbar bg="light" style={{ width: "100%", marginBottom: "10px" }} variant="light">
            <Container>
                <Nav.Link>
                    <IoMdArrowBack size={30} color='black' /> {(isDesktopOrLaptop || isTablet) && (
                        <NavLink to="/"><span style={{ color: 'black' }}>Go Back</span></NavLink>
                    )}
                </Nav.Link>
                <Nav.Item>
                    <span> {(isDesktopOrLaptop || isTablet) && (<span>{lession}</span>)}</span>
                </Nav.Item>
                <Nav.Item>
                    {/* <TbMessages size={30} style={{marginRight:isMobile ? "15px":"0px"}} /> */}
                    {/* {
                        (isDesktopOrLaptop || isTablet) && (
                            <span style={{ fontSize: "1.2rem", color: "black", fontWeight: "500", marginRight: "20px", marginLeft: "5px" }}>
                                Discussion
                            </span>
                        )
                    } */}

                    {
                        (userData && userData.strip_payment_status === "paid") && (
                            <BsBook size={30} onClick={handleShow} />
                        )
                    }
                    {
                        ((userData && userData.strip_payment_status === "paid") && (isDesktopOrLaptop || isTablet)) && (
                            <span style={{ fontSize: "1.2rem", color: "black", fontWeight: "500", marginLeft: "5px" }} onClick={handleShow}>
                                Lessons
                            </span>
                        )
                    }
                    {/* {
                        (isDesktopOrLaptop || isTablet) && (
                            <span style={{ fontSize: "1.2rem", color: "black", fontWeight: "500", marginLeft: "5px" }} onClick={handleShow}>
                                Lessons
                            </span>
                        )
                    } */}
                </Nav.Item>
            </Container>
        </Navbar>
    )
}

export default SingleLectureNavbar