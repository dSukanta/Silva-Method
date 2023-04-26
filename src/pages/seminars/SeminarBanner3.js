import React from 'react'

function SeminarBanner3() {
    const data = [
        "Get a “gut feeling” on vivid, accurate courses of action that rocket you towards your business and career goals",
        "Gain strong and accurate guidance to make important life decisions, i.e. marriage, career changes, investments, etc.",
        " Use higher intelligence to create instant and lasting improvements to your relationships",
        "Dramatically enhance your learning capacity by freely channeling a limitless sea of information into your mind",
        "Deal with stress effectively and experience total relaxation through alpha and theta level meditation",
    ]
    return (
        <section className={"fact-area fact-ma pos-rel pt-115 pb-60 parallex2"}>
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                    <h1 className='white-color text-center'>
                        THE ONLY THING STANDING BETWEEN YOU AND TOTAL INTUITIVE LIVING IS THE RESISTANCE WITHIN YOUR MIND
                    </h1>
                    <p className='white-color text-center' style={{ fontSize: "1.1rem" }}>
                        Remove this resistance, and you enter a higher level of decision making. Silva calls it:
                        intuitive living—the secret key to your success. Think about it! Behind any success story,
                        there’s that lucky hunch or amazing coincidence. This “inner knowing” is the guiding force that will lead you through life without missing a step. You can avoid the agony of indecision, worry, and fear.
                    </p>
                    <h1 className='white-color text-center'>
                       IMAGINE BEING ABLE TO…
                    </h1>
                    <div className="row">
                        {
                            data.map((val, i) => (
                                <div className="col-sm-12 col-md-6" key={i}>
                                    <p className='white-color text-start me-2 px-2 py-2' style={{ fontSize: "1.3rem",background: "rgba(51, 170, 51, .4)" }}>
                                        {"< "+ val}
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

export default SeminarBanner3