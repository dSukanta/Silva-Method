import React from 'react'

function BecomeInstructorForm() {
    return (
        <section className="contact-form-area gray-bg pt-100 pb-100">
            <div className="container">
                <div className="form-wrapper">
                    <div className="row align-items-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="section-title mb-55">
                                <h3>Become A Silva Instructor</h3>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3 d-none d-xl-block ">
                            {/* <div className="section-link mb-80 text-end">
                           <Link to="/appoinment"
                           className="primary_btn btn-icon ml-0"><span>+</span>Make
                              Appointment</Link>
                        </div> */}
                        </div>
                    </div>
                    <div className="contact-form">
                        <form id="contact-form" action="#">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-box user-icon mb-30">
                                        <input type="text" name="name" placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-box user-icon mb-30">
                                        <input type="text" name="name" placeholder="Last Name" />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="form-box user-icon mb-30">
                                        <input type="text" name="name" placeholder="Address" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-box user-icon mb-30">
                                        <input type="text" name="name" placeholder="Company" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-box user-icon mb-30">
                                        <input type="text" name="name" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-box email-icon mb-30">
                                        <input type="text" name="email" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-box email-icon mb-30">
                                        <input type="text" name="text" placeholder="In Which Area/Cities Do You Wish to Teach ?" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-box email-icon mb-30">
                                        <p style={{fontFamily:"inherit",fontSize:"1.2rem",display:"flex",justifyContent:"start",gap:"20px",alignItems:"center"}}>Is there a Silva Director in charge of this area?
                                        <div className='d-flex'>
                                        <label class="container d-flex justify-content-start align-items-center gap-2">Yes
                                            <input type="radio" style={{width:"20px",height:"20px"}} name="radio" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="container d-flex justify-content-start align-items-center gap-2">No
                                            <input type="radio" style={{width:"20px",height:"20px"}} name="radio" />
                                            <span class="checkmark"></span>
                                        </label>
                                        </div>
                                        </p>
                                        <p style={{fontFamily:"inherit",fontSize:"1.2rem",}}>
                                        Note- If so, you are required to contact them directly and not to fill in this form.
                                        </p>
                                       
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-box email-icon mb-30">
                                        <input type="text" name="text" placeholder="When, where and with whom did you first take the Silva class (BLS or SLS/SIS)?" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-box email-icon mb-30">
                                        <input type="text" name="text" placeholder="How many times have you followed the Silva Class and with whom?" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-box email-icon mb-30">
                                        <input type="text" name="text" placeholder="Have you followed an advanced class? If so, please indicate when, with whom and how many times you have reviewed?" />
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-box email-icon mb-30">
                                        <p style={{fontFamily:"inherit",fontSize:"1.2rem",display:"flex",justifyContent:"start",gap:"20px",alignItems:"center"}}>
                                           Ultra Seminar?
                                        <div className='d-flex'>
                                        <label class="container d-flex justify-content-start align-items-center gap-2">Yes
                                            <input type="radio" style={{width:"20px",height:"20px"}} name="radio" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="container d-flex justify-content-start align-items-center gap-2">No
                                            <input type="radio" style={{width:"20px",height:"20px"}} name="radio" />
                                            <span class="checkmark"></span>
                                        </label>
                                        </div>
                                        </p>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <div className="form-box email-icon mb-30">
                                        <p style={{fontFamily:"inherit",fontSize:"1.2rem",display:"flex",justifyContent:"start",gap:"20px",alignItems:"center"}}>
                                          Graduate Seminar?
                                        <div className='d-flex'>
                                        <label class="container d-flex justify-content-start align-items-center gap-2">Yes
                                            <input type="radio" style={{width:"20px",height:"20px"}} name="radio" />
                                            <span class="checkmark"></span>
                                        </label>
                                        <label class="container d-flex justify-content-start align-items-center gap-2">No
                                            <input type="radio" style={{width:"20px",height:"20px"}} name="radio" />
                                            <span class="checkmark"></span>
                                        </label>
                                        </div>
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-box message-icon mb-30">
                                        <textarea name="message" id="message" cols="30" rows="10"
                                            placeholder="What other self-help, holistic practice, healing tradition, personal development or training have you been involved with?"></textarea>
                                    </div>
                                    <div className="contact-btn text-center">
                                        <button className="primary_btn btn-icon ml-0" type="button"><span>+</span> Send</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <p className="ajax-response mt-4 text-center" style={{fontSize:"1.1rem"}}>Please also send to silvamethod@silvamethod.com a "Letter of Intention" in which you explain why you want to become a Silva Instructor, and what you consider to be your qualities, with a photo.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BecomeInstructorForm