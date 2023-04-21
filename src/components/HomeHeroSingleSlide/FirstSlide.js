import React, { useState } from 'react';
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive'

function FirstSlide() {

  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1280px)'})
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
  const isMobile = useMediaQuery({minWidth: 320, maxWidth:480  })

    const [slide,setSlide]= useState(0);
    const items=[
        "img/combo-banner.webp",
        "img/slide-2.webp",
        "img/slide-3.webp",
        "img/slide-4.webp",
        "img/slide-5.webp"
    ];
    const changeSlide=(payload)=>{
       if(slide==items.length-1 && payload== +1 ){
        setSlide(0)
       }
       else if(slide==0 && payload==-1){
        setSlide(items.length-1)
       }
       else{
        setSlide(slide+payload)
       }
    }
    //console.log(slide);

    // const handleSlides=(order)=>{
    //     if(slide==items.length-1 && order=='next'){
    //         src= `${items[0]}`
    //     }else if(slide==0 && order == 'prev'){
    //         src=
    //     }
    // }

  return (
    <div className='d-flex mt-150'>
        <div className='prev-slide'>
        <img src={slide==0? items[items.length-1]:items[slide-1]} height="100%"/>
        
        </div>
        <div className='first-slide-center'>
            <div>
                <button className='first-slide-prev-btn' onClick={()=>changeSlide(-1)}><AiOutlineLeft/></button>
            </div>
            <div>
                <a href='https://www.google.com'><img src={items[slide]}/></a>
            </div>
            <div>
            <button className='first-slide-next-btn' onClick={()=>changeSlide(+1)}><AiOutlineRight/></button>
            </div>
        </div>
        <div className='next-slide'>
        <img src={slide== items.length-1?items[0]: items[slide+1]} height="100%"/>
        </div>

    </div>
  )
}

export default FirstSlide