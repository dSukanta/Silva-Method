import React from 'react';

import { useMediaQuery } from 'react-responsive';

const InstructorBanner = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })


    return (
        <>
            <section className="fact-area fact-map pink-bg pos-rel pt-115 pb-60">
                <div className="container">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h1 className='white-color'>Teachers Of Mastery</h1>
                        <p className='white-color' style={{fontSize:"1.2rem"}}>
                            Silva Instructors are dedicated to empowering the individual with a set of mind skills
                            to better their life and create a better world in which to live.
                        </p>
                        <button className='primary_btn2'>
                           Find An Instructor Now !
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default InstructorBanner;