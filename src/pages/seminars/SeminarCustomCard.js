import React from 'react'
import { useMediaQuery } from 'react-responsive'
import happy from "../../images/newimgs/happy.webp";
import learning from "../../images/newimgs/learning.webp";

function SeminarCustomCard() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    return (
        <div className='container mt-5 mb-5'>
            <div className="row justify-content-center align-items-center gap-3 mb-3">
                <div className="col-sm-12 col-md-5">
                    <img src={"https://silvamethod.com/assets/images/lifesystem.webp"}
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
                            Silva Life System
                        </h2>
                        <span className='mb-5 mt-3'>LEVEL 1</span>
                        <p style={{ fontSize: "1.1rem" }}>
                            EXPERIENCE THE POWER OF MODERN DAY ‘ACTIVE’ MEDITATION IN A DYNAMIC GROUP OF LIKE-MINDED PEOPLE!
                        </p>
                        <p>
                            Our flagship live seminar, The Silva Life System (SLS) is your foundation for a richer life,
                            giving you the tools to calm your self, tune out every-day static, and open the untapped power of your mind. In this prerequisite course, you will learn the core techniques in guided imagery and focused awareness that will help you achieve your goals, overcome obstacles, and fulfill your potential.
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
                                        Silva Intuition System
                                    </h2>
                                    <span className='mb-5 mt-3'>LEVEL 2</span>
                                    <p style={{ fontSize: "1.1rem" }}>
                                        CONNECT TO YOUR OWN INTERNAL GUIDANCE SYSTEM, YOUR INTUITION, TO CREATE A NEW REALITY FOR YOURSELF.
                                    </p>
                                    <p style={{ fontSize: "1.1rem" }}>
                                        The second flagship live seminar, Silva Intuition System (SIS), trains you to recognize and work with your intuition.
                                        Learning to trust your inner voice enables you to receive that brilliant hunch, that sudden insight, which logic alone cannot provide, putting you in the right place at the right time.
                                    </p>
                                    <button className='primary_btn2'>
                                        Learn More
                                    </button>

                                </div>
                            </div>
                            <div className="col-sm-12 col-md-5">
                                <img src={"https://silvamethod.com/assets/images/intuition.webp"}
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
                                <img src={"https://silvamethod.com/assets/images/lifesystem.webp"}
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
                                        Silva Life System
                                    </h2>
                                    <span className='mb-5 mt-3'>LEVEL 1</span>
                                    <p style={{ fontSize: "1.1rem" }}>
                                        EXPERIENCE THE POWER OF MODERN DAY ‘ACTIVE’ MEDITATION IN A DYNAMIC GROUP OF LIKE-MINDED PEOPLE!
                                    </p>
                                    <p>
                                        Our flagship live seminar, The Silva Life System (SLS) is your foundation for a richer life,
                                        giving you the tools to calm your self, tune out every-day static, and open the untapped power of your mind. In this prerequisite course, you will learn the core techniques in guided imagery and focused awareness that will help you achieve your goals, overcome obstacles, and fulfill your potential.
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

export default SeminarCustomCard