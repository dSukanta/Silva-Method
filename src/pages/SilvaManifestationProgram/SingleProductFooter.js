import React from 'react'
import { Button, Container, Navbar } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom'

function SingleProductFooter() {
    const navigate = useNavigate();
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
 
    return (
        <Navbar fixed='bottom' bg='light' variant='light'>
            <Container>
                {
                    (!isDesktopOrLaptop || !isTablet) && (
                        <Navbar.Brand>
                        <p className='mt-2' style={{ fontWeight: "600", color: "black", wordWrap: "break-word" }}><del className='mx-3'>$ 149.00</del>
                            <span style={{ color: "#9b37f2", fontSize: "1.3rem" }}>$ 99.00</span>
                        </p>
                    </Navbar.Brand>
                    )
                }
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {
                        (isDesktopOrLaptop && isTablet) && (
                            <Navbar.Brand>
                                <p className='mt-2' style={{ fontWeight: "600", color: "black", wordWrap: "break-word" }}><del className='mx-3'>$ 149.00</del>
                                    <span style={{ color: "#9b37f2", fontSize: "1.3rem" }}>$ 99.00</span>
                                </p>
                            </Navbar.Brand>
                        )
                    }
                    <Navbar.Text>
                        <button className='primary_btn3'>Buy Now</button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default SingleProductFooter