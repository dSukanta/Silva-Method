import React from 'react'
import { Card } from 'react-bootstrap'
import {RxQuote} from "react-icons/rx";
import { useMediaQuery } from 'react-responsive';

function SeminarReviewCard() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })

    return (
        <Card style={{width:isDesktopOrLaptop?"90%":"97%"}}>
            <Card.Body className='d-flex justify-content-center align-items-center flex-column'>
                <Card.Title>
                    <RxQuote size={50} color="#6f25af" />
                </Card.Title>
                <Card.Text>
                   <p style={{fontSize:"1.1rem"}}>
                   To me, The Silva Method is one of the best programs I invested in.
                    Or should I say Silva invested in me?…the Silva Method is a powerful tool to create the life we want,
                    the life that feels good.
                   </p>
                </Card.Text>
                <Card.Title>
                    Rola Diab
                </Card.Title>
                <Card.Subtitle>
                    STUDENT
                </Card.Subtitle>
            </Card.Body>
        </Card>
    )
}

export default SeminarReviewCard