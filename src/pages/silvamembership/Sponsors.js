import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Slider from 'react-slick';

function Sponsors() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    const imgstyles = {
        width: "150px",
        height: "40px",
        objectFit: "contain"
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <GrFormPrevious />,
        nextArrow: <GrFormNext />,
    };
    return (
        <div className='container' style={{ width: isDesktopOrLaptop ? "50%" : "100%" }}>
            <div className="row justify-content-center align-items-center align-content-center mb-4">
                <div className="col-sm-4 col-md-8">
                    <h3 className='text-center'>Trusted by governments, Fortune 500 and companies that focus on human development everywhere</h3>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 sponsorslider">
                <div>
                    <img
                        style={imgstyles}
                        src="https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_232/https://a.storyblok.com/f/60579/x/38fda82b66/mv-biz_logo_pwc.svg?trans"
                    />
                </div>


                <div>
                    <img
                        style={imgstyles}

                        src="https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_232/https://a.storyblok.com/f/60579/x/5eb5b7a001/logo_google.svg?trans"
                    />
                </div>

                <div>
                    <img
                        style={imgstyles}

                        src="https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_232/https://a.storyblok.com/f/60579/x/9f1edc4175/logo-facebook-inc.svg?trans"
                    />
                </div>

                <div>
                    <img
                        style={imgstyles}

                        src="https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_232/https://a.storyblok.com/f/60579/x/f81e330999/logo-cisco.svg?trans"
                    />
                </div>

                <div>
                    <img
                        style={imgstyles}

                        src="https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_232/https://a.storyblok.com/f/60579/x/a912aec577/logo-salesforce.svg?trans"
                    />
                </div>

                <div>
                    <img
                        style={imgstyles}

                        src="https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_232/https://a.storyblok.com/f/60579/x/b43b216ef6/access-exxon.svg?trans"
                    />
                </div>

                <div>
                    <img
                        style={imgstyles}

                        src="https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_232/https://a.storyblok.com/f/60579/x/f373ecfe78/access-duracell.svg?trans"
                    />
                </div>
                <div>
                    <img
                        style={imgstyles}

                        src="https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_232/https://a.storyblok.com/f/60579/131x37/748e2e6db1/access-accenture.svg?trans"
                    />
                </div>
                <div>
                    <img
                        style={imgstyles}

                        src="https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_232/https://a.storyblok.com/f/60579/x/74873dd0cb/logo-pepsico.svg?trans"
                    />
                </div>
                <div>
                    <img
                        style={imgstyles}

                        src="https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_232/https://a.storyblok.com/f/60579/x/d6539ef809/mv-biz_logo_hubspot.svg?trans"
                    />
                </div>

                <div>
                    <img
                        style={imgstyles}

                        src="https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_232/https://a.storyblok.com/f/60579/x/439d2c1fab/logo-fao-un.svg?trans"
                    />
                </div>
                <div>
                    <img
                        style={imgstyles}

                        src="https://res.cloudinary.com/mindvalley/image/fetch/c_scale,dpr_1,f_auto,fl_lossy,q_auto,w_232/https://a.storyblok.com/f/60579/x/5afea1ff5d/mv-business_logo_anglo_american.svg?trans"
                    />
                </div>

            </div>
        </div>
    )
}

export default Sponsors