import React from 'react'
import { useMediaQuery } from 'react-responsive'

function BlogMainBanner() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })

    return (
        <section className="fact-area fact-map parallex2 pos-rel pt-50 pb-60">
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    {
                        isDesktopOrLaptop && (
                            <h1 className='white-color text-center'>
                                Silva Method Blogs for Motivation
                            </h1>
                        )
                    }

                    {
                        !isDesktopOrLaptop && (
                            <h3 className='white-color text-center'>
                                Silva Method Blogs for Motivation
                            </h3>
                        )
                    }
                    <p className='white-color text-center' style={{ fontSize: "1.1rem",marginTop:"20px", marginBottom:"20px" }}>
                        Welcome to the Silva Method blogs for ultimate motivation. Our Founder, Mr. José Silva gave the world the most revolutionary technique to control the mind. More than half a million people on this planet know about it. And practice the Silva Mind Control method to enhance and improve their lives. It took about two decades to develop this method, but the wait bearded great fruits. As with the Silva mind control method you cannot just control, rather reprogram your mind and thereby re-establish your life. then you become the captain of your own ship and the master of your fate.
                    </p>
                    <p className='white-color text-center' style={{ fontSize: "1.1rem",marginTop:"20px", marginBottom:"20px" }}>
                        Jose Silva describes the Silva mind control method as an unusual sense of awareness. It lets you enter the Alpha state of your mind and use the higher intelligence to solve problems. however when you enter into the dynamic meditation state, you get to know more about your mind. So you control your thoughts and connect with divine intelligence. You get to use your mind in a very distinct manner. As a result, the critical thinking ability and inner awareness gain a quick boost. also dynamic meditation has power and gives spectacular results.
                    </p>

                    
                </div>
            </div>
        </section>
    )
}

export default BlogMainBanner