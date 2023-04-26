import React from 'react'

function SeminarBanner({title,text,btnText,exactclass="parallex"}) {
    return (
        <section className={"fact-area fact-ma pos-rel pt-115 pb-60"+" "+exactclass}>
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                    <h1 className='white-color text-center'>{title}</h1>
                    <p className='white-color text-center' style={{ fontSize: "1.3rem" }}>
                       {
                        text
                       }
                    </p>
                    <button className='primary_btn2'>
                        {
                            btnText
                        }
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SeminarBanner