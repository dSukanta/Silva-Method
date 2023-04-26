import React from 'react'

function SeminarBanner2({ title, exactclass = "parallex2",btnText }) {
    const data = [
        "Gaining accurate guidance to make important life decisions.",
        "Mastering stress",
        "Leaping without the use of drugs and waking fully rested",
        "Creating richer connections in your relationships",
        "Improving your memory",
        "Managing and transforming pain",
        "Expanding your learning capacity",
        "Activating the power in your mind to manifest goals",
        "Tapping into a limitless storehouse of information in your mind",
        "Getting a “gut feeling” or a vivid plan of action that rockets you towards your goals"
    ]
    return (
        <section className={"fact-area fact-ma pos-rel pt-115 pb-60" + " " + exactclass}>
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                    <h1 className='white-color text-center'>{title}</h1>
                    <div className="row">
                        {
                            data.map((val, i) => (
                                <div className="col-sm-12 col-md-6" key={i}>
                                    <p className='white-color text-start px-2 py-2' style={{ fontSize: "1.3rem" }}>
                                          {val}
                                    </p>
                                </div>
                            ))
                        }

                    </div>
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

export default SeminarBanner2