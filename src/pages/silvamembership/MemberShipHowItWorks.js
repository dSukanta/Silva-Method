import React from 'react'

function MemberShipHowItWorks() {
    return (
        <div className='container' style={{ marginBottom: "150px" }}>
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-10 col-md-7">
                    <h2 className='text-center mb-4'>How It Works</h2>
                    <h3 className='text-center'>Experience The Evolution Of Online Learning</h3>
                </div>
                <div className="col-sm-10 col-md-8">
                    <img src="https://storyblok-cdn.mindvalley.com/f/60579/1594x883/c981ac783d/mvcom_hp_aa_devices.png?trans?quality=40&auto=webp&dpr=1&width=800" alt="" />
                </div>
                <div className="col-sm-10 col-md-7">
                    <p style={{fontSize:"1.1rem"}}>
                        The Mindvalley Quests online learning platform combines the power of daily microlearning and community to transform you in ways traditional education never could.
                    </p>
                    <p style={{fontSize:"1.1rem"}}>
                        You’ll experience life-changing personal growth in just 20 minutes a day. And enjoy support, accountability, and friendship from thousands of Quest students worldwide.
                    </p>
                </div>
                <div className="col-6 d-flex justify-content-center">
                    <button className='primary_btn2'>
                        LEARN MORE
                    </button>
                </div>
            </div>

        </div>
    )
}

export default MemberShipHowItWorks