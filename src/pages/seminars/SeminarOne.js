import React from 'react';

import { useMediaQuery } from 'react-responsive';
import seminaronepic from "../../images/becomeinstructor/blsclass.webp";
import { FcIdea, FcMindMap } from "react-icons/fc";
import { BiBrain } from "react-icons/bi";
import SeminarOneCard from './SeminarOneCard';
import { FaRegSmileBeam, FaHeadSideVirus, FaHandHolding } from "react-icons/fa";
import { RiMentalHealthLine } from "react-icons/ri";
import { TbZoomCancel } from "react-icons/tb";
import { ImSleepy } from "react-icons/im";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { GiDreamCatcher, GiStairsGoal, GiArtificialIntelligence, GiNinjaHeroicStance, GiDeadWood, GiHealing, GiMeditation, GiWeightLiftingUp } from "react-icons/gi";
import { SiMinds } from "react-icons/si";
import { CiGlass } from "react-icons/ci";

const SeminarOne = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })

    const data = [
        {
            title: "Fundamentals Come First",
            text: "Many students decide to continue with the Silva Method in more advanced programs on intuition or healing. Any advanced learning that you want to do will be entirely up to you and will only be made available after your program is complete.",
            icon: <FcIdea size={60} />
        },
        {
            title: "Alpha Functioning",
            text: "Learn to function at the alpha brain wave level with conscious awareness and experience the power of using both brain hemispheres instead of just one.",
            icon: <BiBrain size={60} />
        },
        {
            title: "Positive Thinking",
            text: "Learn to develop and maintain a positive mental attitude.",
            icon: <FcMindMap size={60} />
        },
        {
            title: "Stress Management",
            text: "Enhance the quality of your life by eliminating stress. Strengthen you immune system, your health ally, for perfect health, physically, emotionally, psychologically and spiritually.",
            icon: <FaRegSmileBeam size={60} />
        },
        {
            title: "Relaxation",
            text: "Learn relaxation techniques to relieve tension and stress, keeping you healthier and more productive than you have ever been before. Relaxation is the first step of the ladder to success. Learn to relax whenever you want, even in the midst of noise, turmoil and stressors without allowing the surrounding “chaos” to affect you in the least. The benefits of relaxation are now reported on a daily basis in prestigious journals, being acknowledged by traditional medical schools, validating the more than 40 years repeated results of the Silva Method educational program.",
            icon: <GiMeditation size={60} />
        },
        {
            title: "Mental House Cleaning",
            text: "Become aware and eliminate negative thoughts, negative beliefs and negative language that limit your evolution to advance in life. Cleaning of the mental environment is of utmost importance in unleashing the fullest potential in you. The creative ability is in you! Check if your mental environment needs cleaning or it is cleaned. If the mental environment is clean and positive, your life reflects this! Through the application of Mental House Cleaning, we teach the principles that allow the light to shine through you and attract the blessings you deserve.",
            icon: <RiMentalHealthLine size={60} />
        },
        {
            title: "Cancel – Cancel",
            text: "Cancel out thoughts beliefs and behaviours that hold you back and are incongruent with your purpose and your goals.",
            icon: <TbZoomCancel size={60} />
        },
        {
            title: "Sleep Control",
            text: "Learn to fall asleep without the help of drugs (and their undesirable side effects) and wake up feeling completely refreshed and rested.",
            icon: <ImSleepy size={60} />
        },
        {
            title: "To Awake Control",
            text: "Learn to wake up without an alarm clock.",
            icon: <BsFillEmojiSunglassesFill size={60} />
        },
        {
            title: "Awake Control",
            text: "Learn to reduce fatigue (physical and mental), stay awake and be alert longer so that you can get more done when necessary.",
            icon: <BsFillEmojiSunglassesFill size={60} />
        },
        {
            title: "Dream Control",
            text: "Learn to remember dreams and tap into their information to solve problems.",
            icon: <GiDreamCatcher size={60} />
        },
        {
            title: "Headache Control",
            text: "Through headache control you will learn to relieve tension and migraine headaches without the use of drugs.",
            icon: <FaHeadSideVirus size={60} />
        },
        {
            title: "Mental Screen",
            text: "Set and achieve your goals effectively and efficiently.",
            icon: <GiStairsGoal size={60} />
        },
        {
            title: " Memory Pegs",
            text: "Memory Pegs will help you to improve visualization, imagination and memory.",
            icon: <SiMinds size={60} />
        },
        {
            title: "Mirror of the Mind",
            text: "Learn to program yourself for success.",
            icon: <SiMinds size={60} />
        },
        {
            title: "Hand Levitation",
            text: "Learn to enter the theta brain wave level so you can correct problems that reside at these deep levels.",
            icon: <FaHandHolding size={60} />
        },
        {
            title: "Glove Anesthesia",
            text: "Learn to control pain and speed healing.",
            icon: <GiHealing size={60} />
        },
        {
            title: "Glass of Water Technique",
            text: "Learn to use the Glass of Water Technique to help you make the right decisions.",
            icon: <CiGlass size={60} />
        },
        {
            title: "Weight and Habit Control",
            text: "Learn to get rid of bad habits, replacing them with new good habits.",
            icon: <GiWeightLiftingUp size={60} />
        },
        {
            title: "Intuitive",
            text: "Learn to develop your natural intuitive abilities by experiencing them in a group setting.",
            icon: <GiDeadWood size={60} />
        },
        {
            title: "Become a Master",
            text: "Become a master of the science of orienting your mind at the level of thought energy, for genius performance. Optimize your brain at the level of super genius by controlled thought, will and action",
            icon: <GiNinjaHeroicStance size={60} />
        }
        ,
        {
            title: " Visualization and Imagination",
            text: "The two faculties of human intelligence, is what makes the difference between mediocre and genius functioning. Mastering their use opens any door you want at your will. The graduate of the Silva Method educational program becomes a master in directing their mind through visualization and imagination to attract what they desire.",
            icon: <GiArtificialIntelligence size={60} />
        }
    ]

    return (
        <>
            <section className="fact-area fact-map pink-bg pos-rel pt-40 pb-30">
                <div className="container">
                    <div className="d-flex flex-column justify-content-center align-items-center gap-4">
                        <h3 className='white-color text-center'>The Original Silva Method Basic Lecture Series (BLS-4) Seminar is the heart of the Silva Method training.</h3>
                        <img src={seminaronepic} style={{ width: isDesktopOrLaptop ? "90%" : "95%", height: isDesktopOrLaptop ? "500px" : "220px" }} />
                        <p className='white-color text-center' style={{ fontSize: "1.1rem" }}>
                            Scientifically researched and tested, the BLS-4 seminar is the core and foundation for all other seminars,
                            the advance Graduate Lecture Series seminar and the advanced Ultra Dynamic Energy Healing seminar.
                            It is the basis from which the Youth seminar, the BLS-2 and the BLS-3 (which are much shorter),
                            the Silva Life System (SLS) and the UltraMind ESP Systems seminars derived.
                            By attending the original BLS-4 seminar your learn much more than any one of the other seminars
                        </p>

                        <p className='white-color text-center' style={{ fontSize: "1.1rem" }}>
                            Join us on a journey of self-discovery and learn how to use the power of your focused mind and expanded thinking to improve your health,
                            relationships, improve self-esteem, achieve your goals, and get the most out of your life. The Silva Method educational program has passed
                            the time test in terms of scientific validity and replication, worldwide, in many diverse populations,
                            that can proudly state there is no magic, or if you want “the magic is real.”
                        </p>
                        <button className='primary_btn2'>
                            Start Learning Now !
                        </button>
                    </div>
                </div>
            </section>
            <div className='instruct-ban pt-4 pb-2'>
                <div className="container">
                    <div className="row gap-4 justify-content-center align-items-center align-content-center mt-5 mb-4 mx-2">
                        {
                            data.map((val, i) => (
                                <SeminarOneCard
                                    title={val.title}
                                    text={val.text}
                                    icon={val.icon}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    );
};

export default SeminarOne;