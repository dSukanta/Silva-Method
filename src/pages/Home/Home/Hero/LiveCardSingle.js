import React from 'react'
import { Card } from 'react-bootstrap'
import {BsFillPersonFill} from "react-icons/bs";
import {AiFillLock} from "react-icons/ai";
import moment from 'moment';

function LiveCardSingle({data}) {
    
    if(data){
        return (
            <Card style={{ width: "90%", borderRadius: "20px" }}>
                <Card.Img variant="top" style={{ borderRadius: "20px 20px 0 0", height: "300px", objectFit: "cover" }} src={data.photo || "https://assets.mindvalley.com/api/v1/assets/10b1de3f-44d4-4dd5-84d7-dc2456a79da4.jpeg?auto=webp&fit=cover&quality=50&dpr=2&width=442&height=248"} />
                <Card.Body>
                    <Card.Text>
                        {
                            moment(data.start_date).format("LLL")
                        }
                    </Card.Text>
                    <Card.Text className='text-dark' style={{color:"black",fontSize:"1.05rem",fontWeight:"600"}}>
                        {
                            data.course_name
                        }
                    </Card.Text>
                    {/* <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex gap-3'>
                         <BsFillPersonFill />
                         <span>
                            2000
                         </span>
                        </div>
    
                        <span style={{padding:"10px 20px 10px 20px",backgroundColor:"#cccf19",borderRadius:"20px"}}>
                            <AiFillLock />
                        </span>
                    </div> */}
                </Card.Body>
            </Card>
        )
    }
}

export default LiveCardSingle