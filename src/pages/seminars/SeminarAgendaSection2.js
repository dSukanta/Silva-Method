import React, { useEffect, useMemo, useState } from 'react'
import SeminarOneCard from './SeminarOneCard'
import SeminarOneCard2 from './SeminarCard2';

function SeminarAgendaSection2({day1,day2,title="Agenda"}) {
    const [activeDay, setActiveDay] = useState("day1");
    const [data,setData] = useState([]);
    


    useEffect(()=>{
      if(activeDay==="day1"){
        setData(day1)
      }else{
        setData(day2)
      }
    },[activeDay])
    return (
        <div className='text-center my-5'>
            <h2 style={{ color: "#6f25af" }}>{title}</h2>
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