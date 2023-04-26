import React from 'react'
import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'
import silvaimg from "../../images/newimgs/silva-collage.webp";
import ultramindimg from "../../images/newimgs/ultra-mind-Copy.webp"
import silvaintuitionimg from "../../images/newimgs/intution-system-Copy.webp"

function SeminarDescriptionSection() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })


    return (
        <div className='container' style={{ marginTop: "50px" }}>
            <div className="row justify-content-center align-items-center gap-3">

                {
                    isDesktopOrLaptop ? (
                        <>
                            <div className={"col-sm-12 col-md-5"}>
                                <div className='text-start'>
                                    <h3>
                                        Live A Life Of Your Own Design!
                                    </h3>
                                    <p style={{fontSize:"1.1rem"}}>
                                        At Silva, we know that the first step is to leave behind the belief that only the lucky few get to experience deep, life-changing transformation. It is not a matter of luck—it’s about practice—or rather how and what you practice.
                                    </p>
                                    <p style={{fontSize:"1.1rem"}}>
                                        Though using meditation and imagery to manifest goals is not a new idea, being successful at it may often be an issue. At Silva, we understand that a major key is overcoming personal barriers, those self-limiting habits and beliefs. It’s not just about what you want; it is about what’s stopping you and how to rise above it!
                                    </p>
                                    <button className='primary_btn2'>
                                        LEARN MORE
                                    </button>
                                </div>

                            </div>
                            <div className="col-sm-12 col-md-5">
                                <img src={"https://silvamethod.com/assets/images/design.webp"}
                                    style={{
                                        width: "100%",
                                        height: "400px",
                                        objectFit: "cover",
                                        borderRadius: "10px"
                                    }}
                                />
                                {/* <ReactPlayer width={"100%"} height={"400px"} controls url='https://www.youtube.com/watch?v=zkHbJhsaNTI&feature=youtu.be' /> */}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-sm-12 col-md-5">
                                <img src={"https://silvamethod.com/assets/images/design.webp"}
                                    style={{
                                        width: "100%",
                                        height: "400px",
                                        objectFit: "cover",
                                        borderRadius: "10px"
                                    }}
                                />
                                {/* <ReactPlayer width={"100%"} height={"400px"} controls url='https://www.youtube.com/watch?v=zkHbJhsaNTI&feature=youtu.be' /> */}
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <div className='text-start'>
                                    <h3>
                                        Live A Life Of Your Own Design!
                                    </h3>
                                    <p style={{fontSize:"1.1rem"}}>
                                        At Silva, we know that the first step is to leave behind the belief that only the lucky few get to experience deep, life-changing transformation. It is not a matter of luck—it’s about practice—or rather how and what you practice.
                                    </p>
                                    <p style={{fontSize:"1.1rem"}}>
                                        Though using meditation and imagery to manifest goals is not a new idea, being successful at it may often be an issue. At Silva, we understand that a major key is overcoming personal barriers, those self-limiting habits and beliefs. It’s not just about what you want; it is about what’s stopping you and how to rise above it!
                                    </p>
                                    <button className='primary_btn2'>
                                        LEARN MORE
                                    </button>
                                </div>

                            </div>

                        </>
                    )
                }
            </div>
            <div className="row justify-content-center align-items-start gap-3 mt-5 mb-5">
                <div className="col-sm-12 col-md-5 mb-5">
                    <img src={"https://silvamethod.com/assets/images/track_record.webp"}
                        style={{
                            width: "100%",
                            height: "400px",
                            objectFit: "cover",
                            borderRadius: "10px"
                        }}
                    />
                    {/* <ReactPlayer width={"100%"} height={"400px"} controls url='https://www.youtube.com/watch?v=J4XNaRIhFxU' /> */}
                </div>
                <div className={isDesktopOrLaptop ? "col-sm-12 col-md-5 mt-5" : "col-sm-12 col-md-5"}>
                    <div className='text-start'>
                        <h3>
                            Silva – A Proven Track Record
                        </h3>
                        <p style={{fontSize:"1.1rem"}}>
                            With the Silva Method, students have been creating success stories for 50 years! Silva Life System teaches scientifically proven techniques that differ significantly from the traditional, passive form of meditation that typical ‘mind empowerment’ programs offer. Silva’s active form of meditation in the alpha brainwave state enables you to tap more of your brain’s potential, to spark tangible, profound, and lasting change. The Silva Method is exercise for your mind. It literally conditions your mind and thoughts to work for you instead of against you.
                        </p>

                        <button className='primary_btn2'>
                            LEARN MORE
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SeminarDescriptionSection