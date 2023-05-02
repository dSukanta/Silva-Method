import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import {TiTickOutline} from "react-icons/ti";


function SingleLectureFooter({ setMarked,marked,setModalShow }) {
    return (
        <Navbar>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-between">
                <Navbar.Text className='mx-5 text-dark'>
                    <GrLinkPrevious style={{ marginRight: "10px" }} size={25} /> Previous
                </Navbar.Text>
               {
                !marked && (
                    <button className='primary_btn2' onClick={() => {
                        setMarked(true)
                        setModalShow()
                    }}>Mark As Complete</button>
                )
               }
               {
                marked && (
                    <h4 className='text-success'><TiTickOutline color='green' /> Completed</h4>
                )
               }
                <Navbar.Text className='mx-5 text-dark'>
                    Next <GrLinkNext style={{ marginLeft: "10px" }} size={25} />
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default SingleLectureFooter