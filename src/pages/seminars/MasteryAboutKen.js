import React from 'react'
import { FcReading, FcIdea } from "react-icons/fc";
function MasteryAboutKen() {
    return (
        <section className="fact-area fact-map pink-bg pos-rel pt-50 pb-60">
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h2 className='white-color text-center mx-2'>
                        KEN COSCIA – INSTRUCTOR TRAINER
                    </h2>
                    <p className='white-color text-center' style={{ fontSize: "1.1rem", marginTop: "10px", marginBottom: "10px" }}>
                        Ken Coscia, the Instructor Trainer for USA Silva Instructors, has facilitated transformation and coached over 100,000 people from all over the world.
                    </p>
                    <p className='white-color text-center' style={{ fontSize: "1.1rem", marginTop: "10px", marginBottom: "10px" }}>
                        Ken is committed to The Silva Method and the mission of enriching the planet by empowering the individual. He has been teaching the work of Jose, Juan, and Laura Silva for over 45 years.
                        Ken is best known for helping his students discover and apply the practical skills to:
                    </p>
                    <div className='row justify-content-center gap-5 mt-5'>
                        <div className="col-sm-12 col-md-4">
                            <div className='d-flex justify-content-start align-items-center gap-3 p-2'>
                                <FcReading size={60} />
                                <h4 className='white-color'>Naturally and easily increase productivity</h4>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className='d-flex justify-content-start align-items-center gap-3 p-2'>
                                <FcIdea size={50} />
                                <h4 className='white-color'>
                                    Shift mindset and improve mood</h4>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className='d-flex justify-content-start align-items-center gap-3 p-2'>
                                <FcReading size={80} />
                                <h4 className='white-color'>Lower medical costs by increasing health and resilience</h4>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className='d-flex justify-content-start align-items-center gap-3'>
                                <FcIdea size={80} />
                                <h4 className='white-color'>Use natural intuitive ability to create solutions and get into “Flow”</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MasteryAboutKen