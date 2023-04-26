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


function SeminarBenefitCards2() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })

    const data = [
        {
            title: "Recognize And Trust Your Inner Voice",
            text: ["Intuition is not magic. It’s a skill that can be optimized. Silva students are taught how to access their internal intuitive voice. This is the voice that you often wish you had listened to when it said, “Take the umbrella.” Learning to trust this inner voice can save you from many such mistakes. It can also be the beacon that guides you to living your life purpose."],
            icon: <FcIdea size={60} />
        },
        {
            title: "Mental Projection & Insight",
            text: ["These exercises train your mind to project your awareness across time and space, to different locations.",
                "When you master this ability, you will be able to visualize people, places, and objects with pinpoint clarity. Plant lovers can literally connect with their plants; pet owners can attune to their pet’s needs; parents can mentally relate with their children and find solutions to even the trickiest problems. The applications are endless."
            ],
            icon: <BiBrain size={60} />
        },
        {
            title: "Understand & Control Your Mind",
            text: ["Learn Silva Intuition System’s HoloViewing Technique and get insight into a given problem and how to correct it.","Then implement the correction with Silva’s Mirror of the Mind Technique, a two step process far more powerful than self-hypnosis, affirmations, or visualization alone."],
            icon: <FcMindMap size={60} />
        },
        {
            title: "Discover Your Life Purpose",
            text: ["Creativity is not just for artists—it’s a resourceful state of mind that leads to success. Studies show that creativity is enhanced when functioning at the alpha level. Experiencing the Silva Life System will teach you to enter the alpha level at will and then to use your creative mind to help you find solutions and let inspiration flow.",
                "But here’s the problem. If the manifestation goal is not in harmony with your highest good, then you may subconsciously sabotage yourself, causing failure and attracting things that are wrong for you.",
                "Jose Silva was aware of this limitation. In the Silva Intuition System, we focus on teaching you how to use your mind to identify the right goals and stay aligned with your life’s purpose."
            ],
            icon: <FaRegSmileBeam size={60} />
        },
        {
            title: "Assess Problems And Identify Blocks",
            text: ["If you want to become psychic, this is it. Our Caseworking Methodology teaches you how to access information about yourself and others, as well as to identify and interpret blocks and perform distance healing. Above all, you will learn to trust intuitive information you receive every time."],
            icon: <GiMeditation size={60} />
        },

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

export default SeminarBenefitCards2