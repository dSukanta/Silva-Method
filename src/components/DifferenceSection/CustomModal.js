import React, { useContext } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { AuthContext } from '../../context/AllContext';

function CustomModal(props) {
    console.log(props.data)

    const { isDesktopOrLaptop,
        isTabletOrMobile } = useContext(AuthContext);
    return (
        <Modal
            {...props}
            size={isDesktopOrLaptop ? "lg" : "sm"}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ zIndex: "100000" }}
        >
            <Modal.Body className='modal-new' style={{ maxHeight: "450px", overflow: "scroll", textAlign: "start" }}>

                {
                    props.data && (
                        <div className='row justify-content-center align-items-center'>
                            {
                                isDesktopOrLaptop && (
                                    <div className='col-sm-12 col-md-4 mb-2'>
                                        <img src={props.data.img} style={{ width: "250px", height: "auto", borderRadius: "10px" }} />
                                    </div>
                                )
                            }
                            <div className='col-sm-12 col-md-8'>
                                <h4>{"‟ " + props.data.heading + " ”"}</h4>
                                <p style={{ fontSize: "1.1rem" }}>
                                    {
                                        props.data.text
                                    }
                                </p>
                               {
                                isDesktopOrLaptop && (
                                    <div className='mt-3'>
                                    <h6>
                                        {props.data.name}
                                    </h6>
                                    <h6>
                                        {
                                            props.data.profession
                                        }
                                    </h6>
                                    <p>
                                        {
                                            props.data.address
                                        }
                                    </p>
                                </div>
                                )
                               }

                            </div>
                            {
                                isTabletOrMobile && (
                                    <div className='col-sm-12 col-md-4 mb-2 d-flex justify-content-around'>
                                    <img src={props.data.img} style={{ width: "100px", height: "auto", borderRadius: "10px" }} />
                                    <div className='mt-3'>
                                    <h6>
                                        {props.data.name}
                                    </h6>
                                    <h6>
                                        {
                                            props.data.profession
                                        }
                                    </h6>
                                    <p>
                                        {
                                            props.data.address
                                        }
                                    </p>
                                </div>
                                   </div>
                                )
                            }

                        </div>
                    )
                }
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className='primary_btn'>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CustomModal