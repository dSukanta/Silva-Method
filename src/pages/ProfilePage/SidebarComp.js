import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { BsBook, BsFillBagCheckFill, BsFillKeyFill } from "react-icons/bs";
import { MdQuiz } from "react-icons/md";
import { AiFillSetting, AiOutlineLogout, AiOutlineHome } from "react-icons/ai";
import { useState } from 'react';
import { RxAvatar } from "react-icons/rx";
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AllContext';
import Swal from 'sweetalert2';
import { useMediaQuery } from 'react-responsive';

function SidebarComp() {
    const navigate = useNavigate();
    const [hovered, currentHovered] = useState(null);
    const [popupOpen, setPopUpOpen] = useState(false)
    const { isUserLoggedIn, userData, logout } = useContext(AuthContext)
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1281px)' })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1280 })
    const isMobile = useMediaQuery({ minWidth: 280, maxWidth: 950 })


    const handleLogout = async () => {
        Swal.fire({
            title: 'Are you sure, you want to logout?',
            showCancelButton: true,
            confirmButtonText: 'Logout',
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                logout()
                navigate("/")
            }
        })
    }
    return (
        <>
            <div style={{ position: "relative", marginBottom: "20px", marginTop: "50px" }}>
                <Card style={{ width: "97%", height: "100%",border:"none",boxShadow:"none" }} className='cardiv'>
                    <Card.Header className='d-flex justify-content-start gap-4 align-items-center bg-transparent'>
                        <img
                            style={{ width: "100px", height: "100px" }}
                            src={userData?.profile_image || "https://images.unsplash.com/photo-1682696936116-126db8e073d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}
                            alt=""
                        />
                        <h5>Avijit123</h5>
                    </Card.Header>
                    <ListGroup className="list-group-flush">
                        {/* <NavLink to={"/store/profile/avijit123/courses"}
                            className={({ isActive }) =>
                                isActive ? "activesidebar" : ""
                            }
                        >
                            <ListGroup.Item
                                onMouseEnter={() => {
                                    currentHovered(1)
                                    setPopUpOpen(false)
                                }}
                                onMouseLeave={() => currentHovered(null)}
                                style={{ fontSize: "1.2rem", borderLeft: hovered === 1 ? "5px solid #9b37f2" : "none" }}>
                                <BsBook color='purple' />
                                <span className='mx-4' style={{ fontWeight: "600" }}>Courses</span>
                            </ListGroup.Item>
                        </NavLink> */}


                        {/* <NavLink to={"/store/profile/avijit123/quizzes"}
                            className={({ isActive }) =>
                                isActive ? "activesidebar" : ""
                            }
                        >
                            <ListGroup.Item onMouseEnter={() => {
                                currentHovered(2)
                                setPopUpOpen(false)
                            }}
                                onMouseLeave={() => currentHovered(null)}
                                style={{ fontSize: "1.2rem", borderLeft: hovered === 2 ? "5px solid #9b37f2" : "none" }}><MdQuiz color='purple' />
                                <span className='mx-4' style={{ fontWeight: "600" }}>Quizzes</span></ListGroup.Item>
                        </NavLink> */}


                        <NavLink to={"/store/profile/avijit123/orders"}
                            className={({ isActive }) =>
                                isActive ? "activesidebar" : ""
                            }
                        >
                            <ListGroup.Item
                                onMouseEnter={() => {
                                    currentHovered(3)
                                    setPopUpOpen(false)
                                }}
                                onMouseLeave={() => currentHovered(null)}
                                style={{ fontSize: "1.2rem", borderLeft: hovered === 3 ? "5px solid #9b37f2" : "none" }}><BsFillBagCheckFill color='purple' />
                                <span className='mx-4' style={{ fontWeight: "600" }}>Orders</span></ListGroup.Item>
                        </NavLink>


                        <ListGroup.Item
                            onMouseEnter={() => {
                               if((!isMobile || !isTablet)){
                                currentHovered(4);
                                setPopUpOpen(true)
                               }
                            }}
                            onMouseLeave={() => {
                                currentHovered(null)
                            }}
                            onClick={()=>{
                                if(isMobile || isTablet){
                                    setPopUpOpen(!popupOpen)
                                }
                            }}
                            style={{ fontSize: "1.2rem", borderLeft: hovered === 4 ? "5px solid #9b37f2" : "none" }}><AiFillSetting color='purple' />
                            <span className='mx-4' style={{ fontWeight: "600" }}>Settings</span>



                            {/* list items */}

                            {
                                (popupOpen && (isMobile || isTablet)) && (
                                    <ListGroup className="list-group mx-3 mt-4">
                                        <NavLink to={"/store/profile/avijit123/settings/basic_information"}
                                            className={({ isActive }) =>
                                                isActive ? "activesidebar" : ""
                                            }
                                        >
                                            <ListGroup.Item
                                                onMouseEnter={() => currentHovered(6)}
                                                onMouseLeave={() => currentHovered(null)}
                                                style={{ fontSize: "1.2rem", borderLeft: hovered === 6 ? "5px solid #9b37f2" : "none" }}><AiOutlineHome color='purple' />
                                                <span className='mx-4' style={{ fontWeight: "600" }}>General</span></ListGroup.Item>
                                        </NavLink>


                                        {/* <NavLink to={"/store/profile/avijit123/settings/avatar"}
                                            className={({ isActive }) =>
                                                isActive ? "activesidebar" : ""
                                            }
                                        >
                                            <ListGroup.Item
                                                onMouseEnter={() => currentHovered(7)}
                                                onMouseLeave={() => currentHovered(null)}
                                                style={{ fontSize: "1.2rem", borderLeft: hovered === 7 ? "5px solid #9b37f2" : "none" }}><RxAvatar color='purple' />
                                                <span className='mx-4' style={{ fontWeight: "600" }}>Avatar</span></ListGroup.Item>
                                        </NavLink> */}

                                        <NavLink to={"/store/profile/avijit123/settings/change_password"}
                                            className={({ isActive }) =>
                                                isActive ? "activesidebar" : ""
                                            }
                                        >
                                            <ListGroup.Item
                                                onMouseEnter={() => currentHovered(8)}
                                                onMouseLeave={() => currentHovered(null)}
                                                style={{ fontSize: "1.2rem", borderLeft: hovered === 8 ? "5px solid #9b37f2" : "none" }}><BsFillKeyFill color='purple' />
                                                <span className='mx-4' style={{ fontWeight: "600" }}>Password</span></ListGroup.Item>
                                        </NavLink>
                                    </ListGroup>
                                )
                            }
                        </ListGroup.Item>

                        <ListGroup.Item
                            onMouseEnter={() => {
                                currentHovered(5)
                                setPopUpOpen(false)
                            }}
                            onMouseLeave={() => currentHovered(null)}
                            onClick={handleLogout}
                            style={{ fontSize: "1.2rem", borderLeft: hovered === 5 ? "5px solid #9b37f2" : "none" }}><AiOutlineLogout color='purple' />
                            <span className='mx-4' style={{ fontWeight: "600" }}>Logout</span></ListGroup.Item>
                    </ListGroup>

                </Card>
                {
                   (popupOpen && isDesktopOrLaptop) && (
                        <Card style={{ width: "250px", position: "absolute", top: "150px", left: "230px",zIndex:"50000",border:"none",boxShadow:"none" }} onMouseLeave={() => {
                            setPopUpOpen(false)
                        }}>
                            <Card.Body>
                                <ListGroup className="list-group-flush">
                                    <NavLink to={"/store/profile/avijit123/settings/basic_information"}
                                        className={({ isActive }) =>
                                            isActive ? "activesidebar" : ""
                                        }
                                    >
                                        <ListGroup.Item
                                            onMouseEnter={() => currentHovered(6)}
                                            onMouseLeave={() => currentHovered(null)}
                                            style={{ fontSize: "1.2rem", borderLeft: hovered === 6 ? "5px solid #9b37f2" : "none" }}><AiOutlineHome color='purple' />
                                            <span className='mx-4' style={{ fontWeight: "600" }}>General</span></ListGroup.Item>
                                    </NavLink>


                                    {/* <NavLink to={"/store/profile/avijit123/settings/avatar"}
                                        className={({ isActive }) =>
                                            isActive ? "activesidebar" : ""
                                        }
                                    >
                                        <ListGroup.Item
                                            onMouseEnter={() => currentHovered(7)}
                                            onMouseLeave={() => currentHovered(null)}
                                            style={{ fontSize: "1.2rem", borderLeft: hovered === 7 ? "5px solid #9b37f2" : "none" }}><RxAvatar color='purple' />
                                            <span className='mx-4' style={{ fontWeight: "600" }}>Avatar</span></ListGroup.Item>
                                    </NavLink> */}

                                    <NavLink to={"/store/profile/avijit123/settings/change_password"}
                                        className={({ isActive }) =>
                                            isActive ? "activesidebar" : ""
                                        }
                                    >
                                        <ListGroup.Item
                                            onMouseEnter={() => currentHovered(8)}
                                            onMouseLeave={() => currentHovered(null)}
                                            style={{ fontSize: "1.2rem", borderLeft: hovered === 8 ? "5px solid #9b37f2" : "none" }}><BsFillKeyFill color='purple' />
                                            <span className='mx-4' style={{ fontWeight: "600" }}>Password</span></ListGroup.Item>
                                    </NavLink>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    )
                }


            </div>
        </>
    )
}

export default SidebarComp