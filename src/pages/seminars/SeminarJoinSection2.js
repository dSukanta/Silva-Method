import React from 'react'

function SeminarJoinSection2({title="Ready to Join Our Classes?Find An Instructor now",text="",subtext="",btnText}) {
    return (
        <section className="fact-area fact-map pos-rel pt-115 pb-60">
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className='text-center'>
                        {title}
                    </h1>
                    <p className='text-center' style={{fontSize:"1.1rem",marginTop:text?"20px":"0px",marginBottom:text?"20px":"0px"}}>
                        {text}
                    </p>
                   {
                    subtext && (
                        <p className='text-center' style={{fontSize:"1rem",marginTop:subtext?"20px":"0px",marginBottom:text?"20px":"0px"}}>
                        {subtext}
                    </p>
                    )
                   }
                </div>
            </div>
        </section>
    )
}

export default SeminarJoinSection2