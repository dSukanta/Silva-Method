import React from 'react'
import { Card } from 'react-bootstrap'

function CardComPopular() {
    return (
        <Card style={{ width: "90%", borderRadius: "20px", height: "450px" }}>
            <Card.Img variant="top" style={{ borderRadius: "20px 20px 0 0" }} src="https://assets.mindvalley.com/api/v1/assets/10b1de3f-44d4-4dd5-84d7-dc2456a79da4.jpeg?auto=webp&fit=cover&quality=50&dpr=2&width=442&height=248" />
            <Card.Body style={{ position: "relative" }}>

                <div className='d-flex justify-content-start'>
                    <img src="https://pbs.twimg.com/media/DZotU1hW0AEDN5F.jpg:large"
                        style={{ width: "65px", height: "70px", position: "absolute", top: "-15px" }}
                        alt="" />
                    <div style={{ position: "absolute", left: "90px", top: "5px" }}>
                        <h5>The Silva UltraMind System</h5>
                        <p>Vishen</p>
                    </div>
                </div>
                <Card.Text className='text-dark' style={{ position: "absolute", top: "90px" }} >
                    Harness altered states of mind to awaken your mind's fullest potential and transform your reality
                    with this legendary approach to personal growth: used by over 6 million people worldwide.
                </Card.Text>

            </Card.Body>
        </Card>
    )
}

export default CardComPopular