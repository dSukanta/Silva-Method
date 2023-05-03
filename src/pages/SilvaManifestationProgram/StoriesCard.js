import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import { AiOutlineClose } from "react-icons/ai";

function StoriesCard({ src, title, text, name, job, address }) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })


    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);


    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            <Card style={{ width: "96%", margin: "20px 0 20px 0" }} className='mainstoriescard p-4' body>
                <div className="row justify-content-start align-items-center">
                    {
                        (isDesktopOrLaptop) && (
                            <div className="col-sm-12 col-md-3">
                                <img src={src}
                                    style={{ width: "200px", height: "200px", borderRadius: "50%" }}
                                    alt="" />
                            </div>
                        )
                    }
                    <div className="col-sm-12 col-lg-8">
                        <div className="row">
                            <div className="col-12">
                                {/* <h3>{title}</h3> */}
                                <p style={{ fontSize: "1.1rem" }}>
                                    {text}
                                </p>
                                {/* <h5 style={{ color: "#9b37f2" }} onClick={() => handleShow("md-down")}>Read more</h5> */}
                                {
                                    isDesktopOrLaptop && (
                                        <div className='mt-4'>
                                            <p style={{ margin: "0", fontSize: "1.1rem",color: "#9b37f2" }}>{name}</p>
                                            {/* <p style={{ margin: "0" }}>{job}</p>
                                            <p style={{ margin: "0" }}>{address}</p> */}
                                        </div>
                                    )
                                }
                                {
                                    (isMobile || isTablet) && (
                                        <div className="d-flex justify-content-start gap-3 align-items-center align-content-center mt-4">
                                            <img src={src}
                                                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                                                alt="" />
                                            <div>
                                                <p style={{ margin: "0" }}>{name}</p>
                                                {/* <p style={{ margin: "0" }}>{job}</p>
                                                <p style={{ margin: "0" }}>{address}</p> */}
                                            </div>

                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Card>

            <Modal
                show={show}
                fullscreen={fullscreen}
                onHide={() => setShow(false)}
                centered size="lg"
                dialogClassName="modal-100w"
            >
                <Modal.Header className='d-flex justify-content-end'>
                    <AiOutlineClose onClick={() => setShow(false)} size={30} />
                </Modal.Header>
                <Modal.Body style={{ width: "100%", margin: "20px 0 20px 0" }}>
                    <div className="row justify-content-start align-items-center">
                        {
                            (isDesktopOrLaptop) && (
                                <div className="col-sm-12 col-md-4">
                                    <img src={src}
                                        style={{ width: "300px", height: "300px", borderRadius: "10px" }}
                                        alt="" />
                                </div>
                            )
                        }
                        <div className="col-sm-12 col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <h3>{title}</h3>
                                    <p style={{ fontSize: "1.1rem" }}>
                                        {text}
                                    </p>
                                    {/* <h5 style={{ color: "#9b37f2" }} onClick={() => handleShow("md-down")}>Read more</h5> */}
                                    {
                                        isDesktopOrLaptop && (
                                            <div className='mt-4'>
                                                <p style={{ margin: "0", fontSize: "1.1rem" }}>{name}</p>
                                                <p style={{ margin: "0" }}>{job}</p>
                                                <p style={{ margin: "0" }}>{address}</p>
                                            </div>
                                        )
                                    }
                                    {
                                        (isMobile || isTablet) && (
                                            <div className="d-flex justify-content-start gap-3 align-items-center align-content-center mt-4">
                                                <img src={src}
                                                    style={{ width: "100px", height: "90px", borderRadius: "10px" }}
                                                    alt="" />
                                                <div>
                                                    <p style={{ margin: "0" }}>{name}</p>
                                                    <p style={{ margin: "0" }}>{job}</p>
                                                    <p style={{ margin: "0" }}>{address}</p>
                                                </div>

                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default StoriesCard