import React from 'react'
import { useMediaQuery } from 'react-responsive'
import happy from "../../images/newimgs/happy.webp";
import learning from "../../images/newimgs/learning.webp";

function CustomCardInstructor() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    return (
        <div className='container mt-5'>
            <div className="row justify-content-center align-items-center gap-3 mb-3">
                <div className="col-sm-12 col-md-5">
                    <img src={happy}
                        style={{
                            width: "100%",
                            height: "400px",
                            objectFit: "cover",
                            borderRadius: "10px"
                        }}
                    />
                </div>
                <div className="col-sm-12 col-md-5">
                    <div className='text-start'>
                        <h2>
                            Comprehensive, Dynamic, & Fun!
                        </h2>
                        <p style={{fontSize:"1.1rem"}}>
                            The comprehensive step-by-step training Silva instructors attend prepares them to guide others with the kind of
                            confidence that only experience can provide. Silva Instructors teach the Silva Method because it works. This fact,
                            gives our colleagues a passion for sharing these life empowering methods with people from all walks of life.
                            Trained in the most current and effective delivery methods, you will find their presentations engaging, thought
                            provoking, interactive, and fun!
                        </p>
                        <button className='primary_btn2'>
                            Learn More
                        </button>

                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center mb-5 gap-3">

                {
                    isDesktopOrLaptop ? (
                        <>
                            <div className="col-sm-12 col-md-5">
                                <div className='text-start'>
                                    <h2>
                                        Learning With The Best Of The Best
                                    </h2>
                                    <p style={{fontSize:"1.1rem"}}>
                                        The Silva Method was a ground breaking phenomenon 50 years ago and one reason it continues to be innovative
                                        today is because of its dedication to keeping a finger on the pulse of exploration. Building on the solid
                                        accomplishments of our founder, Jose Silva. This is why we can confidently stand by our claim that Silva seminars
                                        offer the most consistent, comprehensive, effective mind training programs available!
                                    </p>
                                    <button className='primary_btn2'>
                                        Learn More
                                    </button>

                                </div>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <img src={learning}
                                    style={{
                                        width: "100%",
                                        height: "400px",
                                        objectFit: "cover",
                                        borderRadius: "10px"
                                    }}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="col-sm-12 col-md-5">
                                <img src={learning}
                                    style={{
                                        width: "100%",
                                        height: "400px",
                                        objectFit: "cover",
                                        borderRadius: "10px"
                                    }}
                                />
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <div className='text-start'>
                                    <h2>
                                        Comprehensive, Dynamic, & Fun!
                                    </h2>
                                    <p style={{fontSize:"1.1rem"}}>
                                        The comprehensive step-by-step training Silva instructors attend prepares them to guide others with the kind of
                                        confidence that only experience can provide. Silva Instructors teach the Silva Method because it works. This fact,
                                        gives our colleagues a passion for sharing these life empowering methods with people from all walks of life.
                                        Trained in the most current and effective delivery methods, you will find their presentations engaging, thought
                                        provoking, interactive, and fun!
                                    </p>
                                    <button className='primary_btn2'>
                                        Learn More
                                    </button>

                                </div>
                            </div>
                        </>
                    )
                }
            </div>

        </div>
    )
}

export default CustomCardInstructor