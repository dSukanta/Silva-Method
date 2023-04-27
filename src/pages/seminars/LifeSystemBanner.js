import React from 'react'
import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'
import silvaimg from "../../images/newimgs/silva-collage.webp";
import ultramindimg from "../../images/newimgs/ultra-mind-Copy.webp"
import silvaintuitionimg from "../../images/newimgs/intution-system-Copy.webp"

function LifeSystemBanner({img = "", title = "", hasBadge = false, badgeText = "", hasButton = false, btnText = "", text1 = "", text2 = "", reverse = false }) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({minWidth: 320, maxWidth:480  })

    return (
        <div className='container' style={{ marginTop: reverse?"20px":"40px" }}>
            <div className="row justify-content-center align-items-center gap-3">
                {
                    !reverse && (
                        <div className="col-sm-12 col-md-5 mb-5">
                            <img src={img}
                                style={{
                                    width: "100%",
                                    height: "500px",
                                    objectFit: "contain",
                                    borderRadius: "10px"
                                }}
                            />
                        </div>
                    )
                }
                {
                    (isMobile && reverse) && (
                        <div className="col-sm-12 col-md-5 mb-5">
                        <img src={img}
                            style={{
                                width: "100%",
                                height: "500px",
                                objectFit: "contain",
                                borderRadius: "10px"
                            }}
                        />
                    </div>
                    )
                }
                {

                }
                <div className={isDesktopOrLaptop ? "col-sm-12 col-md-5 mt-5" : "col-sm-12 col-md-5"}>
                    <div className='text-start'>
                        <h3>
                            {title}
                        </h3>
                        {
                            hasBadge && (
                                <span className='px-2 py-1 white-color' style={{ fontSize: "1.3rem", backgroundColor: "#6f25af" }}>
                                    {badgeText}
                                </span>
                            )
                        }
                        <p style={{ fontSize: "1.1rem", marginTop: "10px" }}>
                            {text1}
                        </p>
                        <p style={{ fontSize: "1.1rem" }}>
                            {text2}
                        </p>

                        {
                            hasButton && (
                                <button className='primary_btn2'>
                                    {btnText}
                                </button>
                            )
                        }
                    </div>
                </div>
                {
                    (reverse && !isMobile) && (
                        <div className="col-sm-12 col-md-5 mb-5">
                            <img src={img}
                                style={{
                                    width: "100%",
                                    height: "500px",
                                    objectFit: "contain",
                                    borderRadius: "10px"
                                }}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default LifeSystemBanner