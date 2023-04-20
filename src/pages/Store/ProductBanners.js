import React from 'react'
import ReactPlayer from 'react-player'

function ProductBanners() {
    return (
        <div className='container'>
            <div className="row justify-content-center align-items-center gap-3">
                <div className="col-sm-12 col-md-6 mb-5">
                    {/* <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        style={{
                            width: "100%",
                            height: "450px",
                            objectFit: "cover",
                            borderRadius: "10px"
                        }}
                    /> */}
                    <ReactPlayer width={"100%"} height={"400px"} controls url='https://www.youtube.com/watch?v=zkHbJhsaNTI&feature=youtu.be' />
                </div>
                <div className="col-sm-12 col-md-5">
                    <div className='text-start'>
                        <h3>
                            Start Your Silva Method Journey With Silva Life System.
                        </h3>
                        <p>
                            This Silva Life System (SLS) Digital Homestudy Program is spread out across 64 Lessons, 14 chapters, covering 4 key areas of mind empowerment:
                        </p>
                        <ul className='mb-3 listcourse'>
                            <li>
                                1. Mind & Body Management
                            </li>
                            <li>
                                2. Healing & Problem Solving
                            </li>
                            <li>
                                3. Activating Your Intuition System
                            </li>
                            <li>
                                4. Manifesting
                            </li>
                        </ul>
                        <p>
                            Enroll to this complete Homestudy Meditation program with a one time fee of only 99$ with a Lifetime FREE access. Practice anytime, as much as you want.
                        </p>
                        <button className='primary_btn2'>
                            Start Learning now
                        </button>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center gap-3 mt-5 mb-5">

                <div className="col-sm-12 col-md-6">
                    <div className='text-start'>
                        <h3>
                            Advanced Level of Dynamic Meditation with Silva Intuition System.
                        </h3>
                        <p>
                            Spread out across 11 chapters covering the most famous exercises of mind empowerment, the program contains:
                        </p>
                        <ul className='mb-3 listcourse'>
                            <li>
                                1. The Droplet of Source Energy Exercise tells you, how you are connected to and One with Universal Source Energy.
                            </li>
                            <li>
                                2. Live a life with purpose. The connection to Life’s Purpose Exercise
                            </li>
                            <li>
                                3. Connect yourself with every living being on this planet. The Eternal Garden Exercise.
                            </li>
                            <li>
                                4. Enjoy the Remote Viewing & Holo-Viewing exercises. Learn to understand the time and space both, with the help of your intuition system.
                            </li>
                        </ul>
                        <button className='primary_btn2'>
                            Start Learning now
                        </button>
                    </div>
                </div>
                <div className="col-sm-12 col-md-5">
                    {/* <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        style={{
                            width: "100%",
                            height: "400px",
                            objectFit: "cover",
                            borderRadius: "10px"
                        }}
                    /> */}
                    <ReactPlayer width={"100%"} height={"400px"} controls url='https://www.youtube.com/watch?v=J4XNaRIhFxU' />
                </div>
            </div>

        </div>
    )
}

export default ProductBanners