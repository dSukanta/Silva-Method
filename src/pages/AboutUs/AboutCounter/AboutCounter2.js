import React from 'react';
import AboutSingleCounter2 from '../../../components/AboutSingleCounter/AboutSingleCounter2';

const AboutCounter2 = () => {
    return (
        <>
            <section className="pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <AboutSingleCounter2 icon="1" counter="20mil+" title="Students worldwide" />
                        <AboutSingleCounter2 icon="2" counter="5x" title="More likely to complete our courses" />
                        <AboutSingleCounter2 icon="3" counter="200+" title="Authors, speakers and activists" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutCounter2;