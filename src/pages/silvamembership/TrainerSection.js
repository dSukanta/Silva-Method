import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import Slider from 'react-slick'

function TrainerSection() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isDesktopOrLaptop?3:2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='container maintrainer'>
            <div className="row justify-content-center gap-2">
                <div className="col-sm-12 col-md-10 col-lg-8 text-center">
                    <h2 className='mb-4'>Your Trainers</h2>
                    <h3 className='mb-4'>With Teachers Like These, You'll Never Want To Graduate</h3>
                    <p style={{ fontSize: "1.1rem", color: "black" }}>Mindvalley brings you the world’s best teachers in every category of your transformation. Whether it’s creative problem solving, emotional intelligence, human literacy or career readiness - we seek out the top trainers in the world and bring them into our ecosystem so you always learn from the very best in the field.</p>
                </div>
            </div>
            {/* <Row className="justify-content-center gap-4">

                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((val, i) => (
                        <Col xs={5} sm={5} md={6} lg={3} >
                            <Card style={{ borderRadius: "15px", width: "100%" }}>
                                <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://storyblok-cdn.mindvalley.com/f/60579/640x640/8b060c6820/mvcom_hp_author-lisa-nichols.jpg?trans?quality=40&auto=webp&dpr=1&width=280" />
                                <Card.Body>
                                    <h4 style={{ fontWeight: "600" }}>Lisa Nichols</h4>
                                    <p>Motivational Speaker & Influence Expert</p>
                                </Card.Body>
                            </Card>
                        </Col>

                    ))
                }
            </Row> */}
           <Slider {...settings}>
               {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].
                    map((val, i) => (
                        <div key={i}>
                            <Card style={{ borderRadius: "15px", width: isDesktopOrLaptop?"90%":"98%", height: "auto" }}>
                                <Card.Img style={{ borderRadius: "15px" }} variant="top" src="https://storyblok-cdn.mindvalley.com/f/60579/640x640/8b060c6820/mvcom_hp_author-lisa-nichols.jpg?trans?quality=40&auto=webp&dpr=1&width=280" />
                                <Card.Body>
                                    <h4 style={{ fontWeight: "600" }}>Lisa Nichols</h4>
                                    <p>Motivational Speaker & Influence Expert</p>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }


            </Slider>
        </div >
    )
}

export default TrainerSection