import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {AiOutlineMail ,AiOutlineWhatsApp,AiFillPhone} from "react-icons/ai";

const ContactArea = () => {
   const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })

    return (
        <>
            <section className="contact-area pt-120 pb-90" data-background="assets/img/bg/bg-map.png">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact text-center mb-30">
                                {/* <i className="fas fa-envelope"></i> */}
                                <AiOutlineMail size={50} className='mt-4' />
                                <h3>Email</h3>
                                <p style={{fontSize:"1.2rem"}}><a href="mailto:digital@silvamethod.com">digital@silvamethod.com</a></p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="contact text-center mb-30">
                                {/* <i className="fas fa-phone"></i> */}
                                <AiOutlineWhatsApp size={50} className='mt-4' />
                                <h3>WhatsApp</h3>
                                <p style={{fontSize:"1.2rem"}}><a href={isDesktopOrLaptop?"https://web.whatsapp.com/send?phone=19567226391":"https://wa.me/19567226391"}>+1 956-722-6391</a></p>
                            </div>
                        </div>
                        <div className="col-xl-4  col-lg-4 col-md-4 ">
                            <div className="contact text-center mb-30">
                                {/* <i className="fas fa-phone"></i> */}
                                <AiFillPhone size={50} className='mt-4' />
                                <h3>Call</h3>
                                <p style={{fontSize:"1.2rem"}}>+1-800-545-6463</p>
                                <p style={{fontSize:"1.2rem"}}>+ 1 956-286-3004</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;