import React from 'react'
import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'
import silvaimg from "../../images/newimgs/silva-collage.webp"
function OtherStoreBanners() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    return (
        <div className='container'>
            <div className="row justify-content-center align-items-start gap-3">
                
                <div className={isDesktopOrLaptop ? "col-sm-12 col-md-5 mt-5" : "col-sm-12 col-md-5"}>
                    <div className='text-start'>
                        <h3>
                            Silva Ultramind
                        </h3>
                        <p>
                            Are you looking for a solution to a stubborn challenge or uncertainty?

                            A way to more quickly manifest a personal or professional goal?
                        </p>
                        <p>
                            Or perhaps you crave greater alignment with your most authentic purpose and potential?
                        </p>

                        <p>
                            The answer, as you’re about to discover, is in accessing altered states of consciousness
                            that everyone is born with – but few know how to access at will.
                        </p>
                        <p>
                            This priceless skill is what you gain through The Silva Method: one of the most acclaimed, enduring,
                            and scientifically proven approaches to mind empowerment on the planet.
                        </p>

                    </div>
                    
                </div>
                <div className="col-sm-12 col-md-6 mb-5">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        style={{
                            width: "100%",
                            height: "400px",
                            objectFit: "cover",
                            borderRadius: "10px"
                        }}
                    />
                    {/* <ReactPlayer width={"100%"} height={"400px"} controls url='https://www.youtube.com/watch?v=zkHbJhsaNTI&feature=youtu.be' /> */}
                </div>
            </div>
            <div className="row justify-content-center align-items-start gap-3 mt-5 mb-5">
               
                <div className={isDesktopOrLaptop ? "col-sm-12 col-md-5 mt-5" : "col-sm-12 col-md-5"}>
                    <div className='text-start'>
                        <h3>
                            Human Intuition Is A Trainable Skill
                        </h3>
                        <p>
                            With The Right Process, You Can Once Again Recover Your Intuitive Senses.
                            Intuition is more than trainable. It’s a natural skill! We’re all born with it—but, like any skill, it has to be developed and practiced – or it doesn’t stick.
                        </p>

                        <button className='primary_btn2'>
                            Level 2
                        </button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 mb-5">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        style={{
                            width: "100%",
                            height: "400px",
                            objectFit: "cover",
                            borderRadius: "10px"
                        }}
                    />
                    {/* <ReactPlayer width={"100%"} height={"400px"} controls url='https://www.youtube.com/watch?v=J4XNaRIhFxU' /> */}
                </div>
            </div>
            <img src={silvaimg} alt="" style={{ width: "100%", height: "100%", marginBottom: "20px" }} />
        </div>
    )
}

export default OtherStoreBanners