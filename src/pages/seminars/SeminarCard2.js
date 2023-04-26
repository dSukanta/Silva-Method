import React from 'react'
import { FcIdea } from "react-icons/fc";
import { useMediaQuery } from 'react-responsive';

function SeminarOneCard2({ title, text, icon,autoHeight=false }) {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })

    return (
        <div className="col-sm-12 col-md-4 service-widget p-3" style={{ height: autoHeight?isDesktopOrLaptop?"480px":"auto":!autoHeight?isDesktopOrLaptop?"480px":"auto":"auto",fontSize:"1.1rem" }}>
           <div className='d-flex justify-content-center align-items-center flex-column align-content-center' style={{height:"100%"}}>
           {icon}
            <h4 className='mt-3'>
                {title}
            </h4>
            <p style={{fontSize:"1.1rem"}}>
                {
                    text
                }
            </p>
           </div>
        </div>
    )
}

export default SeminarOneCard2