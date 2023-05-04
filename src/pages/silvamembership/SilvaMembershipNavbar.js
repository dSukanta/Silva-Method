import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import silvalogo from "../../images/newimgs/silvamethod-logo.png";
import { useNavigate } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import { BiLogIn } from "react-icons/bi";
import {FaBars} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import { AuthContext } from '../../context/AllContext';

function SilvaMembershipNavbar() {
  const {userData,isUserLoggedIn,logout} = useContext(AuthContext);
  const navigate = useNavigate();
  const [toggled,setToggled] = useState(false)
  return (
    <>
      <Navbar bg="light" expand="lg" sticky='top' onToggle={(val)=>{
        if(val){
          setToggled(true)
        }else{
          setToggled(false)
        }
      }}>
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            <img src={silvalogo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
             {
              toggled ?(
                <AiOutlineClose size={25} color='black' />
              ):(
                <FaBars size={25} color='black' />
              )
             }
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
             {
              !isUserLoggedIn && (
                <>
                <Nav.Link onClick={()=>navigate("/login")}>
                <Button variant="outline-dark" style={{ borderRadius: "50px" }}> Sign In</Button>
                </Nav.Link>
                <Nav.Link onClick={()=>navigate("/register")}>
                <Button variant="outline-dark" style={{ borderRadius: "50px" }}> Sign Up</Button>
                </Nav.Link>
                </>
              ) 
             }
             {
              isUserLoggedIn && (
                <>
                <Nav.Link>
                <Button variant="outline-dark" style={{ borderRadius: "50px" }} onClick={logout}> Logout</Button>
                </Nav.Link>
                </>
              )
             }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <Navbar>
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            <img src={silvalogo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button variant="outline-dark" style={{ borderRadius: "50px" }}> Sign In</Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  )
}

export default SilvaMembershipNavbar