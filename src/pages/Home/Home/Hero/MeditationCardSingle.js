import React from 'react'
import { Card } from 'react-bootstrap'

function MeditationCardSingle() {
    return (
        <Card style={{ width: "90%", borderRadius: "20px"}}>
            <Card.Img variant="top" style={{ borderRadius: "20px 20px 0 0",height:"300px",objectFit:"cover" }} src="https://assets.mindvalley.com/api/v1/assets/10b1de3f-44d4-4dd5-84d7-dc2456a79da4.jpeg?auto=webp&fit=cover&quality=50&dpr=2&width=442&height=248" />
            <Card.Body>
                <Card.Text className='text-dark'>
                   <span style={{fontSize:"1.1rem",color:"black",fontWeight:"600"}}>Alpha Beats</span>
                   <br />
                   <span>MindValley</span>
                   <br />
                   <span> 2 Mins</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MeditationCardSingle