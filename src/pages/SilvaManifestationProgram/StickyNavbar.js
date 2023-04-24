import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {IoMdArrowBack} from "react-icons/io";


function StickyNavbar() {
  
    return (
        <Navbar bg="dark" style={{width:"100%",marginBottom:"10px"}} sticky='top' variant="dark">
            <Container>
                <Nav.Link>
                  <IoMdArrowBack size={30} />  Go Back
                </Nav.Link>
                <Nav.Item className='white-color'>
                  Getting Started
                </Nav.Item>
            </Container>
        </Navbar>
    );
}

export default StickyNavbar