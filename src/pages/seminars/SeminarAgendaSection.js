import React, { useEffect, useMemo, useState } from 'react'
import SeminarOneCard from './SeminarOneCard'
import SeminarOneCard2 from './SeminarCard2';

function SeminarAgendaSection() {
    const [activeDay, setActiveDay] = useState("day1");
    const [data,setData] = useState([]);
    

    const day1 = useMemo(()=>{
      return [
        {
            title:"The Roadmap To Success:",
            text:"A formula for dealing with stress, setting goals, and starting on the right foot."
        },
        {
            title:"The Long Relax:",
            text:"The fundamental relaxation technique that will allow your mind and body to experience deep relaxation.",
        },
        {
            title:"Lunch Break:",
            text:"Bring your own or take the opportunity to connect with classmates at some of the local restaurants.",
        },
        {
            title:"The Sleep Control Technique:",
            text:"Perfect for overcoming sleep disorders and bad sleep patterns. Just use before bed to enjoy deep, uninterrupted, rejuvenating sleep.",
        },
        {
            title:"The Alarm Clock Technique:",
            text:"Amaze yourself by waking up on time with no alarm clock in perfect sync with your body’s natural sleep pattern.",
        },
        {
            title:"The Dream Control Technique:",
            text:"Discover how to interpret the abstract subconscious messages in your dreams to solve problems and make decisions in real life.",
        },
        {
            title:"The Energizing Technique:",
            text:"Feeling sleepy or lethargic? Don’t have time to take a nap? Use this mind technique to uplift your physical and emotional energy in minutes.",
        },
        {
            title:"Hand Levitation/Glove Anesthesia:",
            text:"A miraculous technique that can transform pain in an instant: a must do for anyone with small children.",
        },
        {
            title:"The Headache Relief Technique:",
            text:"An easy yet potent technique for deflecting stress and dissipating headaches, migraines, and other cranial pains not with pills, but with your mind.",
        }
      ]
    },[])

    const day2 = useMemo(()=>{
      return [
        {
            title:"Mental Screen/Memory Pegs:",
            text:"Never forget your grocery list again. This incredible memory technique does not discriminate, so anybody can do it."
        },
        {
            title:"The 3 Fingers Technique:",
            text:"A surprisingly effective anchoring tool that allows you to enter the alpha level of mind within seconds by simply pressing your fingers together."
        },
        {
            title:"The Glass Of Water Technique:",
            text:"Learn how to infuse a simple glass of water with a distinct intention for solving a specific problem, overcoming a subconscious block, or manifesting. Using the power of intention this exercise can help you find solutions to any problem."
        },
        {
            title:"Lunch Break:",
            text:"Bring your own or take the opportunity to connect with classmates at some of the local restaurants."
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

export default SeminarAgendaSection