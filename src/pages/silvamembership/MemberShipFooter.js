import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom'

function MemberShipFooter() {
    const navigate = useNavigate();
    

  return (
     <Navbar fixed='bottom' bg='light' variant='light'>
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
                <p className='mt-2' style={{fontWeight:"600",color:"black",wordWrap:"break-word"}}>Get Started With <br />
                Silva Method Membership
                </p>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <button className='primary_btn3'>Subscribe Now</button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default MemberShipFooter