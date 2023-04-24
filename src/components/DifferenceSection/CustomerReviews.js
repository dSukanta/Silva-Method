import React, { useContext } from 'react'
import { AuthContext } from '../../context/AllContext';

function CustomerReviews({ data,setModalShow,setData }) {
     
    const { isDesktopOrLaptop,
        isTabletOrMobile } = useContext(AuthContext);
        
    return (
        <div className="card" style={{width:"90%",borderRadius:"10px",margin:"20px"}}>
            <img className="card-img-top" style={{width:"100%",height:"350px"}} src={data.img} alt="Card image cap" />
                <div className="card-body text-start">
                    <h4 className="card-title">
                         {
                            "‟"+data.heading.substring(0,43)+"...”"
                         }
                    </h4>
                    <p className="card-text" style={{fontWeight:"400",fontSize:"1.1rem"}}>
                        {
                            data.text.substring(0,135)+"..."
                        }
                        <br />
                        <span className='cardspan' onClick={() => {
                            setData(data)
                            setModalShow(true)
                        }} style={{color:"#7a12d4",fontSize:"1.2rem",fontWeight:"bold"}}>Read more</span>
                    </p>
                    <div className='mt-3'>
                    <h6>
                        {data.name}
                    </h6>
                    <h6>
                        {
                            data.profession
                        }
                    </h6>
                    <p>
                        {
                            data.address
                        }
                    </p>
                    </div>
                </div>
        </div>
    )
}

export default CustomerReviews