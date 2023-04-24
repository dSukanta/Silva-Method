import React from 'react'
import { useMediaQuery } from 'react-responsive'

function LeaveCommentBox() {

    return (
        <div className='mt-5'>
            <div className="post-comments-form">
                <form id="contacts-form" className="conatct-post-form" action="#">
                <div className="post-comments-title">
                    <h2 className='white-color'>Post Comments</h2>
                </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact-icon contacts-message">
                                <textarea name="comments" id="comments" cols="30" rows="10"
                                    placeholder="Your Comments...."></textarea>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="contact-icon contacts-name">
                                <input type="text" placeholder="Your Name.... " />
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="contact-icon contacts-email">
                                <input type="email" placeholder="Your Email...." />
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="contact-icon contacts-website">
                                <input type="text" placeholder="Your Website...." />
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <button className="primary_btn theme-btn" type="submit">Post comment</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LeaveCommentBox