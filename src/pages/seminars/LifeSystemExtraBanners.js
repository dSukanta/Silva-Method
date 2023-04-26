import React from 'react'
import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'
import silvaimg from "../../images/newimgs/silva-collage.webp";
import ultramindimg from "../../images/newimgs/ultra-mind-Copy.webp"
import silvaintuitionimg from "../../images/newimgs/intution-system-Copy.webp"

function LifeSystemExtraBanners({ title1 = "", text1 = "", text2 = "", img1, hasButton1 = false, title2 = "", text3 = "", text4 = "", img2, hasButton2 = false }) {
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
                                        {title1}
                                    </h3>
                                    <p>
                                        {text1}
                                    </p>
                                    <p>
                                        {text2}
                                    </p>
                                    {
                                        hasButton1 && (
                                            <button className='primary_btn2'>
                                                LEARN MORE
                                            </button>
                                        )
                                    }

                                </div>

                            </div>
                            <div className="col-sm-12 col-md-5">
                                <img src={img1}
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
                                <img src={img1}
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
                                        {title1}
                                    </h3>
                                    <p>
                                        {text1}
                                    </p>
                                    <p>
                                        {text2}
                                    </p>
                                    {
                                        hasButton1 && (
                                            <button className='primary_btn2'>
                                                LEARN MORE
                                            </button>
                                        )
                                    }
                                </div>

                            </div>

                        </>
                    )
                }
            </div>
            <div className="row justify-content-center align-items-start gap-3 mt-5 mb-5">
                <div className="col-sm-12 col-md-5 mb-5">
                    <img src={img2}
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
                            {title2}
                        </h3>
                        <p>
                            {text3}
                        </p>
                        <p>
                            {text4}
                        </p>

                        {
                            hasButton2 && (
                                <button className='primary_btn2'>
                                    LEARN MORE
                                </button>
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LifeSystemExtraBanners