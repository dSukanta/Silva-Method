import React from 'react'

function MasteryBannerMain() {
    const data = [
        "Identify hidden obstacles that may be holding you back and develop and experience proven techniques to eliminate them.",
        "Develop value-based goals that can leave you with a clear sense of mission and purpose.",
        "Sleeping without the use of drugs and waking fully rested",
        "Reprogram your nervous system to stay healthy & productive in spite of it all.",
        "Integrate the Silva skills more effectively into your life.",
        "Manifest more of what you really want."
    ]
    return (
        <section className={"fact-area fact-ma pos-rel pt-115 pb-60 parallex2"}>
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                    <h1 className='white-color text-center'>
                       LOOK AT SOME OF WHAT YOU ARE GOING TO LEARN AND EXPERIENCE
                    </h1>
                    <div className="row">
                        {
                            data.map((val, i) => (
                                <div className="col-sm-12 col-md-6" key={i}>
                                    <p className='white-color text-start me-2 px-2 py-2' style={{ fontSize: "1.3rem",background: "rgba(51, 170, 51, .4)" }}>
                                        {"> "+ val}
                                    </p>
                                </div>
                            ))
                        }

                    </div>
                    <button className='primary_btn2'>
                        FIND AN EVENT NOW
                    </button>
                </div>
            </div>
        </section>
    )
}

export default MasteryBannerMain