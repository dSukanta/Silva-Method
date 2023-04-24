import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineGooglePlus, AiFillLinkedin } from "react-icons/ai";



function OurTeamCard({name, job, text, img}) {
    return (
        // <div className="container mt-4">
        //     <div className="row">
        //         <div className="col-sm-12 col-md-6">

        //         </div>
        //         <div className="col-sm-12 col-md-6">
        //             <div className="our-team">
        //                 <div className="picture">
        //                     <img className="img-fluid" src={ins2} />
        //                 </div>
        //                 <div className="team-content">
        //                     <h3 className="name">Allen Goldman N.D.</h3>
        //                     <h6 className="title">CERTIFIED SILVA METHOD INSTRUCTOR</h6>
        //                 </div>
        //                 <ul className="social">
        //                     <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
        //                         <FaFacebookSquare />
        //                     </a></li>
        //                     <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
        //                         <AiOutlineTwitter />
        //                     </a></li>
        //                     <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
        //                         <AiOutlineGooglePlus />
        //                     </a></li>
        //                     <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
        //                         <AiFillLinkedin />
        //                     </a></li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="our-team">
            <div className="picture">
                <img className="img-fluid" src={img} />
            </div>
            <div className="team-content">
                <h3 className="name">{name}</h3>
                <h6 className="title">{job}</h6>
                <p>
                    {text}
                </p>
            </div>
            <ul className="social">
                <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                    <FaFacebookSquare />
                </a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                    <AiOutlineTwitter />
                </a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                    <AiOutlineGooglePlus />
                </a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" aria-hidden="true">
                    <AiFillLinkedin />
                </a></li>
            </ul>
        </div>
    )
}

export default OurTeamCard