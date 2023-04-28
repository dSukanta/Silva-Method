import React, { useState } from 'react'
import { Accordion, Badge } from 'react-bootstrap'
import { HiOutlineArrowRight } from "react-icons/hi"
import { useMediaQuery } from 'react-responsive'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai"

function CustomAccordion2({ name, title, text,text2="" }) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const [opened, setOpened] = useState(false);

    return (
        <Accordion style={{width:"100%"}} onSelect={(val) => {
            console.log(val)
            if (val) {
                setOpened(true)
            } else {
                setOpened(false)
            }
        }}>
            <Accordion.Item eventKey="1" className='mb-4'>
                <Accordion.Header>
                    <div className='d-flex justify-content-start flex-row gap-3'>
                        {
                            opened ? (<AiOutlineMinusCircle size={30} color='white' />)
                                : (<AiOutlinePlusCircle size={30} color='white' />)
                        }
                        {name && (
                        <h6 className='white-color mt-1 text-center' style={{width:"30px",marginRight:"20px"}}>{name ? name.toUpperCase() : ""}</h6>
                        )}
                        <h4 className='white-color'>{title ? title : ""}</h4>
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    <p className='white-color text-start' style={{fontSize:"1.1rem"}}>
                        {text}
                    </p>
                    {
                        text2 && (
                        <p className='white-color text-start' style={{fontSize:"1.1rem",marginTop:"10px"}}>
                            {text2}
                        </p>
                        )
                    }
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default CustomAccordion2