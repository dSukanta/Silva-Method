import React from 'react'
import { FcIdea } from "react-icons/fc";

function SeminarOneCard({ title, text, icon }) {
    return (
        <div className="col-sm-12 col-md-8 service-widget p-3" style={{ height: "auto" }}>
            {icon}
            <h4 className='mt-3'>
                {title}
            </h4>
            {
                Array.isArray(text) ?
                    text.map(t => (
                        <p style={{ fontSize: "1.1rem" }}>
                            {
                                t
                            }
                        </p>
                    )) : (
                        <p style={{ fontSize: "1.1rem" }}>
                            {
                                text
                            }
                        </p>
                    )
            }
        </div>
    )
}

export default SeminarOneCard