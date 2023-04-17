import React from 'react'

function ImageTextSection() {
    return (
         <div className='container'>
            <div className="row justify-content-center align-items-center gap-3">
                <div className="col-sm-12 col-md-5">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        style={{
                            width: "100%",
                            height: "400px",
                            objectFit: "cover",
                            borderRadius: "10px"
                        }}
                    />
                </div>
                <div className="col-sm-12 col-md-5">
                    <div className='text-start'>
                        <h2>
                            At Mindvalley, learning is a lifelong adventure
                        </h2>
                        <p>
                            The Mindvalley curriculum is designed to unleash the fullest potential of your mind, body, and spirit. It’s about being a rockstar at work. Having a healthy, youthful, energetic body. Experiencing unbreakable joy, love, and fulfillment. Connecting deeply with the people and communities around you. And contributing your unique gifts to the planet.

                            But beyond the tangible, there’s also something else going on beneath Mindvalley’s surface…
                        </p>

                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center mb-5 gap-3">

                <div className="col-sm-12 col-md-5">
                    <div className='text-start'>
                        <h2>
                            At Mindvalley, learning is a lifelong adventure
                        </h2>
                        <p>
                            The Mindvalley curriculum is designed to unleash the fullest potential of your mind, body, and spirit. It’s about being a rockstar at work. Having a healthy, youthful, energetic body. Experiencing unbreakable joy, love, and fulfillment. Connecting deeply with the people and communities around you. And contributing your unique gifts to the planet.

                            But beyond the tangible, there’s also something else going on beneath Mindvalley’s surface…
                        </p>

                    </div>
                </div>
                <div className="col-sm-12 col-md-5">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        style={{
                            width: "100%",
                            height: "400px",
                            objectFit: "cover",
                            borderRadius: "10px"
                        }}
                    />
                </div>
            </div>

        </div>
    )
}

export default ImageTextSection