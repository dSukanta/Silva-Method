import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { AiOutlinePlaySquare, AiFillLock } from "react-icons/ai";

function ResourcesSingle() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })

    const data = {
        img: "https://assets.mindvalley.com/api/v1/assets/89605a08-826c-4c20-b63f-ed4a3c7167a6.jpg?transform=q_90,c_fill",
        title: "Phase 1: Compassion",
        author: "Vishen",
        text: "Compassion is expressing the intention of moving from judgment to caring, from isolation to connection, and from indifference or dislike to understanding. And, the best part is: compassion is trainable....",
        unlocked: false,
        duration: "5 min"
    }
    return (
        <div className='row justify-content-center align-items-center'
            style={{
                margin: isDesktopOrLaptop ? "20px 0px 20px 0" : "20px 10px 20px 10px",
                backgroundColor: "#1e272e", padding: "25px 15px 25px 15px",
                borderRadius: "10px"
            }}>
            <div className="col-sm-3 col-md-3">
                {
                    isDesktopOrLaptop && (
                        <img src={data.img} style={{ width: isDesktopOrLaptop ? "200px" : "100px", height: isDesktopOrLaptop ? "220px" : "120px" }} />
                    )
                }
                {
                    !isDesktopOrLaptop && (
                        <div className='d-flex justify-content-between align-items-center gap-2'>
                            <img src={data.img} style={{ width: isDesktopOrLaptop ? "200px" : "100px", height: isDesktopOrLaptop ? "220px" : "120px" }} />
                            <AiFillLock size={50} color='white' />
                        </div>
                    )
                }
            </div>
            <div className="col-sm-4 col-md-7">
                <div className='d-flex justify-content-star flex-column align-content-center mt-4' style={{ width: "100%", height: "100%" }}>
                    <h4 className='white-color'>{data.title}</h4>
                    <span style={{ color: "lightgray" }}>{data.author}</span>
                    <p style={{ color: "lightgray" }}>{data.text}</p>
                    <div className='d-flex align-content-center gap-4'>
                        <AiOutlinePlaySquare size={30} color='white' />
                        <p style={{ color: "lightgray" }} className='mt-1'>{data.duration}</p>
                    </div>
                </div>
            </div>
            {
                isDesktopOrLaptop && (
                    <div className='col-sm-3 col-md-2'>
                        <AiFillLock size={50} color='white' />
                    </div>
                )
            }

        </div>
    )
}

export default ResourcesSingle