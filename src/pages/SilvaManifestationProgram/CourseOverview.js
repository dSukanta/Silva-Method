import React from 'react'
import OverViewCard from './OverViewCard';
import manifestcourse from "../../images/newimgs/Silva-Manifesting-course.webp";
import { useMediaQuery } from 'react-responsive';
import { Alert, Card } from 'react-bootstrap';
import { GiLindenLeaf } from "react-icons/gi";
import shifter from "../../images/newimgs/reality-shifter.webp";
import imagineanew from "../../images/newimgs/imagine_A_New_Story.webp";
import scientists from "../../images/newimgs/scientists.webp";
import testislider1 from "../../images/newimgs/silva-method-testimonial-robert-stiller.webp";
import testislider2 from "../../images/newimgs/silva-method-testimonial-shakti-gawain-1.webp";
import testislider3 from "../../images/newimgs/silva-method-testimonial-simontion.webp";
import testislider4 from "../../images/newimgs/silva-method-testimonial-wayne-dyer.webp"
import Slider from 'react-slick';
import SingleProduct from './SingleProduct';
import CustomAccordion2 from './CustomAccordion2';
import {GrFormPrevious,GrFormNext} from "react-icons/gr";

function CourseOverview() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 1279 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: isDesktopOrLaptop?3:isTablet?2:1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <GrFormPrevious />,
        nextArrow: <GrFormNext />,
    };

    const coursesdata = [
        {
          title:"Silva Mind and Body Healing",
          lectures:54,
          students:152,
          price:49
        },
        {
            title:"Silva Method Manifesting Course",
            lectures:54,
            students:152,
            price:49
        },
        {
            title:"How to Manage Mind and Body Simultaneously",
            lectures:54,
            students:152,
            price:49
        },
        {
            title:"Silva Alpha Sound",
            lectures:54,
            students:152,
            price:49
        }
    ]
    return (
        <div className='mt-4'>
            <OverViewCard />
            <div className='row justify-content-center align-items-center mt-5'>
                <div className="col-sm-12 col-md-8">
                    <img src={manifestcourse} style={{ width: "100%", height: isDesktopOrLaptop ? "500px" : "200px", objectFit: "cover" }} />
                </div>
            </div>

            {/* what is manifestation */}

            <div className='text-center mt-5'>
                {
                    isDesktopOrLaptop ? (
                        <h1 style={{ color: "#D980FA" }}>What is Manifestation?</h1>
                    ) : (
                        <h2 style={{ color: "#D980FA" }}>What is Manifestation?</h2>
                    )
                }
                <p className='white-color' style={{ fontSize: "1.1rem", marginTop: "30px" }}>
                    Manifestation is like a powerful GPS system that guides you towards the life you want to create. Manifestation is
                    not about controlling every single aspect of life, but rather about aligning yourself with the flow of the universe and trusting in its infinite possibilities.
                    It’s about being open to receiving, and being in a state of gratitude for what you have and what you are manifesting.
                </p>

                <h3 className='neonText' style={{ wordWrap: "break-word", marginTop: "30px" }}>
                    The word Manifestation means giving shape to your idea.
                </h3>

                <p className='white-color' style={{ fontSize: "1.1rem", marginTop: "30px" }}>
                    The Silva Method, a renowned system for personal development and mind empowerment, offers a unique perspective on manifestation.
                    With its emphasis on harnessing the power of the mind to manifest desired outcomes, the Silva Method delves into the depths of consciousness to explore the true nature of reality.
                </p>

                <Alert style={{ marginTop: "30px" }} variant='success' className='d-flex justify-content-center align-items-center gap-2' >
                    <span>
                        <GiLindenLeaf size={40} color='green' />
                    </span>
                    <p style={{ color: "black", fontSize: "1.1rem" }}>
                        In short we can say : MANIFESTING means, aligning one’s internal state with the desired outcome,
                        and consciously directing energy and focus towards achieving that outcome.
                    </p>
                </Alert>

            </div>

            {/* Harnessing Your Manifestation Abilities */}

            <div className='text-center mt-5'>
                {
                    isDesktopOrLaptop ? (
                        <h1 style={{ color: "#D980FA" }}>
                            Harnessing Your Manifestation Abilities
                        </h1>
                    ) : (
                        <h2 style={{ color: "#D980FA" }}>
                            Harnessing Your Manifestation Abilities
                        </h2>
                    )
                }
                <p className='white-color' style={{ fontSize: "1.1rem", marginTop: "30px" }}>
                    In Silva, we believe that all of us are the reality architect, in-born. All you need is just a push to wake up this power inside you.
                </p>
                <p className='white-color' style={{ fontSize: "1.1rem", marginTop: "30px" }}>
                    Do you know <b>HOW?</b>
                </p>
                <h3 className='neonText' style={{ wordWrap: "break-word", marginTop: "30px" }}>
                    By utilizing a scientific methodology that aligns your conscious and subconscious mind with the vibrational frequency of manifestation.
                </h3>
                <p className='white-color' style={{ fontSize: "1.1rem", marginTop: "30px" }}>
                    Our perfected process, honed over 60 years of experience, eliminates the frustration and guesswork often associated with metaphysical science. Instead,
                    it provides you with a precise and reliable method for manifesting your deepest desires, consistently and with laser-like accuracy.
                </p>
            </div>
            <div className='row justify-content-center align-items-center mt-5'>
                <div className="col-sm-12 col-md-10">
                    <img src={shifter} style={{ width: "100%", height: isDesktopOrLaptop ? "500px" : "200px", objectFit: "contain" }} />
                </div>
            </div>
            <div className="text-center mt-5">
                <p className='white-color' style={{ fontSize: "1.1rem", marginTop: "30px" }}>
                    The power of Manifestation lies within each and every one of us. It is the ability to shape our reality through our thoughts, beliefs, and actions.
                    Just like a sculptor molds clay, we have the power to mold our lives into the reality we desire.
                    This innate ability to manifest is a gift that we can tap into and unleash to create positive change in our lives.
                </p>
            </div>

            {/* Now Imagine that state where you able to manifest easily*/}
            <div className="text-center mt-5">
                {
                    isDesktopOrLaptop ? (
                        <h1 style={{ color: "#D980FA" }}>
                            Now Imagine that state where you able to manifest easily
                        </h1>
                    ) : (
                        <h2 style={{ color: "#D980FA" }}>
                            Now Imagine that state where you able to manifest easily
                        </h2>
                    )
                }

                {/* card */}

                <div style={{ width: "100%", marginTop: "30px" }}>
                    <Card body style={{ width: "100%", textAlign: "start" }} className='maincard222'>
                        <p style={{ fontSize: "1.1rem", color: "black", zIndex: "10000", fontWeight: "500", maxWidth: isDesktopOrLaptop ? "60%" : "80%" }}>
                            Imagine having the power to bring your dreams and desires into reality.
                            Through Silva Manifestation technique, you will be able to :
                        </p>
                        <ul style={{ maxWidth: isDesktopOrLaptop ? "70%" : "90%", color: "black" }}>
                            <li>• Create the life you want and that too effortlessly</li>
                            <li>• Attract positive experiences and achieve the desired outcomes of your goals.</li>
                            <li>• Build strength and self-confidence.</li>
                            <li>• See yourself as a master of manifestation, capable of manifesting abundance,
                                success, joy, and fulfillment in your life.</li>
                            <li>• Heal health, relationships and other areas of life.</li>
                            <li>• Build focus and clarity of thoughts.</li>
                        </ul>
                    </Card>
                </div>

                <p className='white-color' style={{ fontSize: "1.1rem", marginTop: "30px" }}>
                    But in reality, the Silva Manifesting Technique can indeed help individuals gain
                    greater control over their minds, leading to enhanced manifestation abilities. It incorporates powerful visualization and imagination exercises.
                </p>
                <h3 className='neonText mt-5'>IT SEEMS LIKE MAGIC, RIGHT?</h3>
            </div>


            {/*  */}


            <div className="text-center mt-5">
                {
                    isDesktopOrLaptop ? (
                        <h1 style={{ color: "#D980FA" }}>
                            Is Reality Real? Unveiling the Truth Behind the Illusion of Perception
                        </h1>
                    ) : (
                        <h2 style={{ color: "#D980FA" }}>
                            Is Reality Real? Unveiling the Truth Behind the Illusion of Perception
                        </h2>
                    )
                }

                <p className='white-color' style={{ fontSize: "1.1rem", marginTop: "30px" }}>
                    Reality is a concept that we often take for granted, assuming that what we see, hear, touch, and experience is an accurate reflection of the world around us.
                    However, upon closer examination, we begin to question the true nature of reality and wonder if what we perceive is indeed real or simply an illusion ?
                </p>

                <div className='row justify-content-center align-items-center mt-5'>
                    <div className="col-sm-12 col-md-10">
                        <img src={imagineanew} style={{ width: "100%", height: isDesktopOrLaptop ? "500px" : "200px", objectFit: "contain" }} />
                    </div>
                </div>

                <p className='white-color' style={{ fontSize: "1.1rem", marginTop: "30px" }}>
                    This intriguing question has fascinated philosophers, scientists, and seekers of truth for centuries.
                </p>
                <p className='white-color' style={{ fontSize: "1.1rem", marginTop: "30px" }}>
                    Research in fields such as neuroscience and psychology has shown that our brains construct our perception of reality based on the
                    information we receive from our senses. Our brains actively filter, interpret,
                    and construct our perception of reality, creating our own unique version of the world around us.
                </p>

                <h3 className='neonText mt-5'>YOUR BREAKTHROUGH AWAITS!</h3>
            </div>

            {/*  */}

            <div className="text-center mt-5">

                {
                    isDesktopOrLaptop ? (
                        <h1 style={{ color: "#D980FA" }}>
                            Revealing the Holographic Universe: The Astonishing Theory Explored by Quantum Physicists and Neuroscientists

                        </h1>
                    ) : (
                        <h2 style={{ color: "#D980FA" }}>
                            Revealing the Holographic Universe: The Astonishing Theory Explored by Quantum Physicists and Neuroscientists

                        </h2>
                    )
                }

                <p className='white-color' style={{ fontSize: "1.1rem", marginTop: "30px" }}>
                    In the early 1960s, two brilliant minds, Quantum Physicist David Bohm and Neuroscientist Karl Pribram,
                    put forth a groundbreaking theory that shook the foundations of our perception of reality.
                    Known as the Holographic Universe theory, it proposed that the world we inhabit is not as solid and concrete as it seems,
                    but rather a complex 3D hologram projected by our minds.
                </p>

                <p className='white-color' style={{ fontSize: "1.1rem", marginTop: "30px" }}>
                    This concept aligns with the principles of the Silva Method, a renowned system for personal
                    development that emphasizes the power of the mind in shaping our reality.
                    The Silva Method teaches individuals to tap into their inner consciousness, harness their manifestation abilities,
                    and create their desired outcomes through techniques such as creative visualization, mental programming,
                    and alpha-theta brainwave training.
                </p>

                <div className='row justify-content-center align-items-center mt-5'>
                    <div className="col-sm-12 col-md-10">
                        <img src={scientists} style={{ width: "100%", height: isDesktopOrLaptop ? "500px" : "200px", objectFit: "contain" }} />
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                {
                    isDesktopOrLaptop ? (
                        <h1 style={{ color: "#D980FA" }}>
                            How does this connect with the concept of manifesting and bringing positive change into our lives?-The main goal of Silva Manifestation
                        </h1>
                    ) : (
                        <h2 style={{ color: "#D980FA" }}>
                            How does this connect with the concept of manifesting and bringing positive change into our lives?-The main goal of Silva Manifestation
                        </h2>
                    )
                }

                <p className='white-color' style={{ fontSize: "1.1rem", marginTop: "30px" }}>
                    When we understand that the world we experience is not solely an external construct, but also a projection of our inner consciousness,
                    we can expand our perception of reality and realize our inherent power as reality shapers.
                </p>

                <p className='white-color' style={{ fontSize: "1.1rem", marginTop: "30px" }}>
                    We can consciously choose to create a reality that aligns with our deepest desires, beliefs, and intentions,
                    just by practicing the Silva Manifestation techniques on regular basis.
                </p>

                <p className='white-color' style={{ fontSize: "1.1rem", marginTop: "30px" }}>
                    By embracing this paradigm shift, we can tap into our manifestation abilities, harness our inner reality shaper,
                    and create a life that reflects our truest aspirations.
                </p>
            </div>

            <div className="text-center mt-5">
                {
                    isDesktopOrLaptop ? (
                        <h1 style={{ color: "#D980FA" }}>
                            Some of the Eminent Personalities Who have taken Silva Method Course.
                        </h1>
                    ) : (
                        <h2 style={{ color: "#D980FA" }}>
                            Some of the Eminent Personalities Who have taken Silva Method Course.
                        </h2>
                    )
                }

                <div className="row mt-3">
                    <Slider {...settings}>
                        <div className="col-4">
                            <img src={testislider1} style={{ width: isDesktopOrLaptop?"90%":isTablet?"98%":"100%", height: "270px" }} alt="" />
                        </div>
                        <div className="col-4">
                            <img src={testislider2} style={{ width: isDesktopOrLaptop?"90%":isTablet?"98%":"100%", height: "270px" }} alt="" />
                        </div>
                        <div className="col-4">
                            <img src={testislider3} style={{ width: isDesktopOrLaptop?"90%":isTablet?"98%":"100%", height: "270px" }} alt="" />
                        </div>
                        <div className="col-4">
                            <img src={testislider4} style={{ width: isDesktopOrLaptop?"90%":isTablet?"98%":"100%", height: "270px" }} alt="" />
                        </div>
                    </Slider>
                </div>

                <div className="row justify-content-center align-items-center mt-5">
                {
                    isDesktopOrLaptop ? (
                        <h1 style={{ color: "#D980FA" }}>
                            The Curriculum
                        </h1>
                    ) : (
                        <h2 style={{ color: "#D980FA" }}>
                            The Curriculum
                        </h2>
                    )
                }

                  <div className="col-sm-12">
                    <CustomAccordion2 name={"warm up"} title={"Preparation"} 
                    text={"Your journey begins with an eye-opening exploration of what meditation can really do for you - and why the traditional approach to meditation often robs you of many of its best outcomes. You’ll also discover the key principles of the 6 Phase Meditation, and how to maximize your results with the program."} />
                  </div>

                  <div className="col-sm-12">
                    <CustomAccordion2 name={"phase 1"} title={"Love & Compassion"} 
                    text={"Phase 1 is the protocol for activating deep love and connection. This is a hugely powerful tool, because you won’t just level up your connection with yourself - but with others and even the world at large. You’ll gain the perspective and disposition needed to be a naturally kinder, nicer human being in every moment."} />
                  </div>

                  <div className="col-sm-12">
                    <CustomAccordion2 name={"phase 2"} title={"Happiness & Gratitude"} 
                    text={"The secret to happiness is gratitude: and by learning how to embody unconditional thankfulness in Phase 2, you’ll create space for limitless joy - along with far greater resistance to anxiety, negative thought patterns, and all feelings of lack. You’ll even sleep better, and wake up every day with an abundance of uplifting energy."} />
                  </div>

                  <div className="col-sm-12">
                    <CustomAccordion2 name={"phase 3"} title={"Peace & Forgiveness"} 
                    text={"Forgiveness is a superpower: and in Phase 3, you’ll feel a huge weight being taken off your shoulders, as you embrace the freedom to move on with life as a bigger, better, more resilient person. The added beauty of forgiveness and the peace it brings is you also experience a glow up in your health, your emotional bliss, and your resilience in rising above life’s challenges."} />
                  </div>

                  <div className="col-sm-12">
                    <CustomAccordion2 name={"phase 4"} title={"Vision for Your Future"} 
                    text={"It’s hugely energizing to have a clear vision pulling you forward, rather than letting the ebbs and flows of life dictate your destiny. Phase 4 will empower you to envision, create, and fine-tune your life vision and your goals, so you’re primed to start living life on your terms and nobody else’s."} />
                  </div>

                  <div className="col-sm-12">
                    <CustomAccordion2 name={"final"} title={"Closing"} 
                    text={"The final step of your journey is an opportunity for deep reflection and the welcoming of a better you. You’ll gain a roadmap for harmonizing each phase into an enjoyable daily meditation practice: one you’ll stick to effortlessly for life, and that rewards you with countless breakthroughs in the coming weeks, months, and years."} />
                  </div>
                </div>

              
            </div>
            <div className="row mt-5 latest-courses-slide">
                    <h3 className='white-color mb-3'>Latest Courses</h3>
                    <Slider {...settings}>
                    {
                        coursesdata.map((val,i)=>(
                            <SingleProduct data={val} key={i+1} />
                        ))
                    }
                    </Slider>
                </div>

        </div>
    )
}

export default CourseOverview