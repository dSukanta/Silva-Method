import React from 'react';
import CountUp from 'react-countup';

const AboutSingleCounter2 = ({ icon, counter, title }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="mb-30 text-center">
                    {/* <img src={`img/counter/counter-icon-${icon}.png`} alt="" /> */}
                        <h1><span className="counter">
                        {/* <CountUp end={counter} duration={8} /> */}
                             {counter}
                            </span></h1>
                        <h3>{title}</h3>
                </div>
            </div>
        </>
    );
};

export default AboutSingleCounter2;