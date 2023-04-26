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


function SeminarBenefitCards() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })

    const data = [
        {
            title: "Transform Chaos Into Flow",
            text: "Everyone has stress. That’s unavoidable, but you can learn to deal with it in a constructive way. Silva gives you the tools to transform stress into clarity, creativity, and even relaxation. One of the ﬁrst things you will learn in this 2 day adventure is how to put yourself into a deep level of meditation and use stress to your advantage.",
            icon: <FcIdea size={60} />
        },
        {
            title: "Positive Thoughts = Positive Outcomes",
            text: "Happiness is something that we all want. The techniques in the Silva Life System program help you uncover your life purpose, solve those problems that block you, and transform that negative inner voice into a positive, supportive mentality. There is no greater power than to realize that your mind is on your side.",
            icon: <BiBrain size={60} />
        },
        {
            title: "Enhance Mind-Body Healing",
            text: "In the Silva Life System you will learn a variety of mental visualization methods designed to accelerate your mind and body’s natural capacity for physical and emotional healing. These results have been studied and endorsed by a variety of medical practitioners.",
            icon: <FcMindMap size={60} />
        },
        {
            title: "Boost Your Creativity",
            text: "Creativity is not just for artists—it’s a resourceful state of mind that leads to success. Studies show that creativity is enhanced when functioning at the alpha level. Experiencing the Silva Life System will teach you to enter the alpha level at will and then to use your creative mind to help you find solutions and let inspiration flow.",
            icon: <FaRegSmileBeam size={60} />
        },
        {
            title: "Achieve Powerful Goals",
            text: "The Silva Life System is more than a motivational self-help course. Face it! The typical self-help courses leave you on a high for a few days, but people often revert to their old ways after several weeks. Not so with Silva. Silva gives you more than inspiration; it gives you tools for daily living.",
            icon: <GiMeditation size={60} />
        },
        {
            title: "Mental Training & Performance Enhancement",
            text: "The Silva Life System is more than a motivational self-help course. Face it! The typical self-help courses leave you on a high for a few days, but people often revert to their old ways after several weeks. Not so with Silva. Silva gives you more than inspiration; it gives you tools for daily living.",
            icon: <RiMentalHealthLine size={60} />
        },
        {
            title: "Sleep Soundly & Wake Up Energized",
            text: "Silva teaches you to “command” your mind to let you fall asleep when you choose to. You also learn to set your internal clock to be able to wake up anytime—without the use of an alarm clock. This is crucial because your body naturally attunes to your sleep cycles and allows you to wake up rested. Imagine how much more productive and energized you will be when you can depend on having a good night’s rest.",
            icon: <TbZoomCancel size={60} />
        },
        {
            title: "Use The Power Of Dreams",
            text: "Throughout history, people have credited dreams with helping them develop new ideas and gain powerful insight. The inventor Elias Howe got a revelation on how to improve the sewing machine through a dream. Paul McCartney came up with the song “Yesterday” in a dream. The structure of the Carbon-6 molecule was discovered through a dream. With Silva Dream Control techniques you can use your dreams to help boost your problem-solving abilities, creativity, and inspiration.",
            icon: <ImSleepy size={60} />
        },
        {
            title: "Enhance Your Intuition",
            text: "Silva recognizes that everyone is born with intuitive abilities, and that anyone who learns how to enhance these abilities can function at an optimum performance level. Through our proprietary scientific and time-tested process, you’ll learn how to use your innate psychic abilities for everyday problem-solving and decision-making, resulting in a happier, more successful, and more confident life.",
            icon: <BsFillEmojiSunglassesFill size={60} />
        }
    ]

    return (
        <div className='instruct-ban pt-4 pb-2'>
            <h2 className='white-color text-center mt-3'>WHAT YOU GAIN FROM SILVA: THE 9 MAJOR BENEFITS</h2>
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

export default SeminarBenefitCards