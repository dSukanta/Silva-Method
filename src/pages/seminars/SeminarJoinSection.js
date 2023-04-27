import React from 'react'

function SeminarJoinSection({title="Ready to Join Our Classes?Find An Instructor now",text="",subtext="",btnText}) {
    return (
        <section className="fact-area fact-map pink-bg pos-rel pt-50 pb-60">
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className='white-color text-center'>
                        {title}
                    </h1>
                    <p className='white-color text-center' style={{fontSize:"1.1rem",marginTop:text?"20px":"0px",marginBottom:text?"20px":"0px"}}>
                        {text}
                    </p>
                   {
                    subtext && (
                        <p className='white-color text-center' style={{fontSize:"1rem",marginTop:subtext?"20px":"0px",marginBottom:text?"20px":"0px"}}>
                        {subtext}
                    </p>
                    )
                   }
                    <button className='primary_btn2'>
                        {
                            btnText || "START LEARNING NOW !"
                        }
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SeminarJoinSection