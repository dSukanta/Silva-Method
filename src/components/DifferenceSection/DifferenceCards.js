import React from 'react'

function DifferenceCards({img,title,text}) {
  return (
   <div className="d-flex justify-content-center align-items-start flex-column text-start gap-3 p-2">
      <img src={img} style={{width:"100%",height:"100%",borderRadius:"10px",objectFit:"cover"}} />
      <div style={{minHeight:"70px"}}>
      <h3>{title}</h3>
      </div>
      <p style={{color:"black",fontSize:"1.1rem"}}>{text}</p>
   </div>
  )
}

export default DifferenceCards