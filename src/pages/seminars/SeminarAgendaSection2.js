import React, { useEffect, useMemo, useState } from 'react'
import SeminarOneCard from './SeminarOneCard'
import SeminarOneCard2 from './SeminarCard2';

function SeminarAgendaSection2() {
    const [activeDay, setActiveDay] = useState("day1");
    const [data,setData] = useState([]);
    

    const day1 = useMemo(()=>{
      return [
        {
            title:"The Basics of Intuition:",
            text:"Learn the effective use of affirmations and auto-suggestions. Understand the single most important habit you must adopt to discover your intuitive abilities. Review the step-by-step guide to getting the most out of meditation and set the stage for your intuitive mind."
        },
        {
            title:"The Long Relax Exercise:",
            text:"Master deep relaxation and the meditative state. Condition your physical body, thoughts, and mind for the relaxation experience. Understand your inner body responds when meditating. Establish mental markers for shorter, effective meditations. Open the doorway for deep theta meditations.",
        },
        {
            title:"The Droplet of Source Energy Exercise:",
            text:"This is a humbling exercise that allows you to experience how you are connected to and One with Universal Source Energy, the energy from which everything comes and where all information exists. You will create a representation of the Spiritual You that is One with Source Energy and will help you solve problems. Learn how to discipline your imagination so you can control your intuition.",
        },
        {
            title:"Lunch Break:",
            text:"Bring your own or take the opportunity to connect with classmates at some of the local restaurants.",
        },
        {
            title:"Holo-Viewing Technique Exercise with Mental Screen:",
            text:"This is an emotionally and energetically infused (E2) meditation which will teach you how to manifest more of what you want as you obtain guidance from Source Energy and trust that you are moving in the right direction. It is a meditation experienced in a holographic manner where your solutions appear as if they have already happened, helping to insure their manifestation. This technique will give you an upper hand in manifesting by placing your thoughts on your “future timeline.”",
        },
        {
            title:"Projection into Metals Exercise:",
            text:"Develop your clairvoyant, clairsentient, and clairaudient abilities with the sheer power of imagination, the most powerful skill in enhancing your intuition. Learn to open the door way to the fundamental levels of all physical matter and explore these levels from subjective perspective while incorporating special mind tools to enhance your imaginative experience.",
        },
        {
            title:"Psychometry Exercise:",
            text:"Feeling sleepy or lethargic? Don’t have time to take a nap? Use this mind technique to uplift your physical and emotional energy in minutes.",
        }
      ]
    },[])

    const day2 = useMemo(()=>{
      return [
        {
            title:"Connection to Purpose Exercise:",
            text:"Understand why so many people hate what they do because they are not living consciously or connecting to their purpose. This includes a meditation where you experience a vision of your life purpose firsthand and a discussion about how purpose does not always equal your JOB!! Discover the “Perfect Blueprint” for your life and what you need to do to achieve your desired level of perfection."
        },
        {
            title:"The 3 Fingers Technique:",
            text:"A surprisingly effective anchoring tool that allows you to enter the alpha level of mind within seconds by simply pressing your fingers together."
        },
        {
            title:"Projection to Tree/Leaves/Pet:",
            text:"Develop the connection between animals, plants, and humans that allows you to access information and benefit all areas of your life. You will learn the 5 Levels of Energy Radiation by exploring plant life, thereby continuing to enhance your intuition. This is also a way to enhance The Green Thumb Effect and almost effortlessly grow beautiful flowers and plants season after season and enhance your communication and connection with your pets."
        },
        {
            title:"Projection into Human Anatomy:",
            text:"Learn the correct way to apply distance healing and visualization techniques with integrity. This is the key to developing clear vision, or clairvoyance, in order to have access to all kinds of knowledge. You will take a fascinating trip through the human anatomy from a psychic point of view and learn to apply healing."
        },
        {
            title:"The Mirror Of The Mind Technique:",
            text:"A most popular and versatile tool that trains you to visualize specific scenarios in your mind to enhance your manifesting, healing, and problem solving abilities."
        },
        {
            title:"The Fantastic Voyage Exercise:",
            text:"Transcend the boundaries of time and space and create powerful reference points with this essential first step to unlocking your full intuitive potential."
        },
        {
            title:"The Mental Laboratory Technique:",
            text:"Looking for answers within? Use this technique to create an impenetrable mind sanctuary for healing, problem solving, manifesting, and intuition."
        },
        {
            title:"Creating Your Counselors Exercise:",
            text:"Connect with two wise counselors in your mind and get advice on anything from that tough career decision to finding your life partner."
        }
      ]
    },[])

    useEffect(()=>{
      if(activeDay==="day1"){
        setData(day1)
      }else{
        setData(day2)
      }
    },[activeDay])
    return (
        <div className='text-center my-5'>
            <h2 style={{ color: "#6f25af" }}>Agenda</h2>
            <div className='mt-5'>
                <button className='primary_btn me-5'
                    onClick={() => setActiveDay("day1")}
                    style={{ backgroundColor: activeDay === "day1" ? "#0a020a" : "" }}>Day 1</button>
                <button className='primary_btn'
                    onClick={() => setActiveDay("day2")}
                    style={{ backgroundColor: activeDay === "day2" ? "#0a020a" : "" }}>Day 2</button>
            </div>
            <div className="container">
                <div className="row gap-4 justify-content-center align-items-center align-content-center mt-5 mb-4 mx-2">
                    {
                        data.map((val, i) => (
                            <SeminarOneCard2
                                title={val.title}
                                text={val.text}
                                icon={null}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SeminarAgendaSection2