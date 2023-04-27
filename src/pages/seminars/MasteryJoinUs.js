import React from 'react'
import { useMediaQuery } from 'react-responsive';
import { FcIdea, FcMindMap } from "react-icons/fc";
import { BiBrain } from "react-icons/bi";
import { FaRegSmileBeam, FaHeadSideVirus, FaHandHolding } from "react-icons/fa";
import { RiMentalHealthLine } from "react-icons/ri";
import { TbZoomCancel } from "react-icons/tb";
import { ImSleepy } from "react-icons/im";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { GiDreamCatcher, GiStairsGoal, GiArtificialIntelligence, GiNinjaHeroicStance, GiDeadWood, GiHealing, GiMeditation, GiWeightLiftingUp } from "react-icons/gi";
import { SiMinds } from "react-icons/si";
import { CiGlass } from "react-icons/ci";
import SeminarOneCard from './SeminarOneCard';


function MasteryJoinUs() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })

    const data = [
        {
            title: "What To Expect In Class",
            text: ["The ambiance is relaxing and class size is usually intimate, anywhere from 30 to 50 people. This means that you get more individualized attention from our instructors. This also gives you the opportunity to meet like-minded people. Many students gain life-long friendships at these events. The Silva Life System program is a 2 day experience and is usually held from 9am to 6pm on a Saturday and Sunday (times and dates may vary based on location)."],
            icon: null
        },
        {
            title: "Fundamentals Come First",
            text: ["Many students decide to continue with the Silva Method in more advanced programs on intuition or healing. Any advanced learning that you want to do will be entirely up to you and will only be made available after your program is complete."
            ],
            icon: null
        },
        {
            title: "Join Us At A Live Program",
            text: ["50 years in the making and we have not missed a beat. Silva programs continue to be one of the most popular personal growth programs available today. Our comprehensive programs offer cutting edge technology on the relationship between the brain, mind, and personal growth."],
            icon: null
        },
        {
            title: "At Silva It's Experiential",
            text: ["At Silva, we engage you! Whether it’s in conversations about the role the mind plays in healing or taking you through guided exercises into the alpha and theta frequencies of brain. A Silva Program is the fertile playground where you will practice your newfound skills. In other words, you will not just learn about meditation and new ways to use the mind, you will experience it!"
            ],
            icon: null
        },
        {
            title: "Education Delivered - No Sales Pitch Needed",
            text: ["We trust our students to be the kind of people who recognize for themselves a quality, educational opportunity. We won’t waste your time with high pressure sales pitches during our programs. Silva events and programs have been offered in 110 countries for 50 years. Our methods are grounded in science and have stood the test of time. Now our success can be yours. We are dedicated to making this available to the world and that is why you will always find Silva programs offered for incredible value."],
            icon: null
        },
        {
            title:"Experienced Instructors",
            text:["Each of our qualified instructors have years of valuable experience and the skill to make the event a powerful life-changing weekend. They will be there to guide you, not only during, but even after the training is over. Their ultimate goal after exposing you to the techniques is to help you move beyond the guided meditations towards true independence. This level of discipline is real empowerment where you become the master of your own mind. Everyone can experience this mental achievement with the proper instruction and practice. That is why we do everything we can to ensure that you learn and experience alpha and theta frequencies while in the live training."],
            icon:null
        }

    ]

    return (
        <div className='instruct-ban pt-4 pb-2'>
            <h2 className='white-color text-center mt-3'>
                WHAT YOU WILL LEARN
            </h2>
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
    )
}

export default MasteryJoinUs