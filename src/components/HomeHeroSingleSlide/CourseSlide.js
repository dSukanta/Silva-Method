import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';

export default function CourseSlider(){

  const [active,setActive]= useState(0);
  const items=[
    {
      id:1,
      img:'https://images.unsplash.com/photo-1681938330231-250832e98c6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
      text:'ghjgjkjlm'
    },
    {
      id:2,
      img:'https://plus.unsplash.com/premium_photo-1678656484471-dcfff7ed95f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      text:'assdsf'
    },
    {
      id:3,
      img:'https://images.unsplash.com/photo-1681969377369-6d68f2b6b6f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      text:'errrtrtrt'
    },
    {
      id:4,
      img:'https://images.unsplash.com/photo-1682003317944-443213824495?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
      text:'errrtrtrt'
    },

  ];
  const isDesktop = useMediaQuery({ minWidth: 992 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  const isMobile = useMediaQuery({ minWidth:100 , maxWidth: 767 })

  const changeSlide=(payload)=>{
    if(active==items.length-1 && payload== +1 ){
        setActive(0)
    }
    else if(active==0 && payload==-1){
     setActive(items.length-1)
    }
    else{
     setActive(active+payload)
    }
 }

  return(
    <div style={{display:'grid', gridTemplateColumns:isDesktop?'20% 60% 20%':'100%', alignItems:'center',justifyContent:'center', width:'100%', margin:'auto', gap:'1rem'}}>
      <div style={{display: (isMobile|| isTablet) && 'none'}}>
        <img src={active==0? items[items.length-1].img:items[active-1].img} alt="" height='500px' width='100%'/>
        <h1>{active==0? items[items.length-1].text:items[active-1].text}</h1>
      </div>
      <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <button onClick={()=>changeSlide(-1)} style={{width:'50px', height:'50px', borderRadius:'50%', backgroundColor:'#7a12d4', color:'white', border:'none'}}><AiOutlineLeft/></button>
        <div style={{width:'100%'}}>
        <img src={items[active].img} alt="" height='500px' width='100%'/>
        <h1>{items[active].text}</h1>
        </div>
        <button onClick={()=>changeSlide(+1)} style={{width:'50px', height:'50px', borderRadius:'50%', backgroundColor:'#7a12d4', color:'white', border:'none'}}><AiOutlineRight/></button>
      </div>
      
      <div style={{display: (isMobile|| isTablet) && 'none', width:'100%'}}>
      <img src={active==items.length-1 ? items[0].img:items[active+1].img} alt="" height='500px' width='100%'/>
      <h1>{active==items.length-1 ? items[0].text:items[active+1].text}</h1>
      </div>
    </div>
  )
}