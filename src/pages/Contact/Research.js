import React from 'react'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import ServicesDetailsArea from '../Services/ServicesDetails/ServicesDetailsArea/ServicesDetailsArea'
import CustomFooter from '../Home/Home/HomeFooter/Footer'
import ResesrchHeroDiv from './ResesrchHeroDiv'
import { useMediaQuery } from 'react-responsive'

function Research() {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1280px)'})
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 999 })
  const isMobile = useMediaQuery({minWidth: 200, maxWidth:480  })

  return (
    <div>
        <HomeHeader/>
        <CommonPageHeader title="Research" subtitle="Details"/>
        <ResesrchHeroDiv/>
        <div style={{width:isMobile || isTablet?'100%': '70%', margin:'auto', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', padding:'20px'}}>
          <h2>A PROGRAM BACKED BY SCIENCE & RESEARCH</h2>
          <p>We have spent nearly 50 years researching, experimenting & collaborating with leading scientists, researchers and personal growth leaders. The first scientist to investigate the research of The Silva Method was Dr. J. Wilfrid Hahn of the Mind Science Foundation in California, who went on to endorse our work. Since then, various research institutions, universities and scientists have studied and verified our research, including:</p>
          <img src="https://silvamethod.com/assets/images/campuses.webp"/>
          <p>Over the years we have continued to fine-tune the process of tapping into the human mind's inner potential-and often profoundly changing our students' lives in the process. We do this through an optimized curriculum that includes the Centering Exercise, guided meditations, visualization techniques, intuition-enhancing tools and Theta level exercises, which guide our students into an even deeper level of mind than Alpha.</p>
          <button style={{height:'70px', width:'250px', border:'none', backgroundColor:'black', color:'white', borderRadius:'35px'}}>Start Learning Now</button>
        </div>


        <div style={{backgroundColor:"#9b37f2",}}>
      <div style={{display:'flex', gap:'1rem', flexDirection:(isMobile||isTablet)? 'column':'row', width:(isMobile||isTablet)? '100%':'70%', margin:'auto', padding:'15px',}}>
        <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>
          <h3 style={{color:'white'}}>" Based on the newest findings from Harvard's recent genetic study on the effects of relaxation, breathing awareness, and positive guided imagery, I feel confident that many of the methods, as taught by Silva International, can stimulate gene expression in the brain that are involved in reducing physical and psychological stress and boosting immune functioning. "</h3>
        </div>
      <div style={{width:'100%', textAlign:'center'}}>
      <img
          src="https://silvamethod.com/assets/images/team.webp"
          alt="" width='90%'
        />
        <div style={{backgroundColor:'white', textAlign:'center', padding:'10px'}}>
          <h3>Mark Robert Waldman</h3>
          <p>NEUROSCIENTIST & BESTSELLING AUTHOR OF HOW GOD CHANGES YOUR BRAIN</p>
        </div>
     </div>
        
      </div>
    </div>
        <div>
          
      <div style={{display:'flex', gap:'1rem', flexDirection:(isMobile||isTablet)? 'column':'row', width:(isMobile||isTablet)? '100%':'70%', margin:'auto', padding:'15px',}}>
        <div style={{width:'100%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <h3 style={{textTransform:"uppercase"}}>IN 1966, A RADIO REPAIRMAN FROM TEXAS FOUND THE ANSWER.</h3>
          <p>Jose Silva began his journey as a humble radio repairman in Laredo, Texas, and later as an electronics instructor with the United States Army Signal Corps.</p>
          <p>Despite his career in electronics, Silva had a keen interest in hypnosis and the workings of the human mind. He spent his days working at his job and his nights studying the work of thought leaders like Freud, Jung and Adler.</p>
          <p>The turning point that rocketed Silva towards his breakthroughs was a simple question. How do you make the mind more efficient?</p>
          <p>Through his professional knowledge, Silva already knew that reducing the resistance in an electrical wire allowed more electricity to flow through it (known as Ohm's law). Using this theory as an anchor, he then wondere..</p>
        </div>
      <div style={{width:'100%', textAlign:'center'}}>
      <img
          src="https://silvamethod.com/assets/images/josesilvabg.webp"
          alt="" width='90%'
        />
        <div style={{backgroundColor:'#e4f1fd', textAlign:'center', padding:'10px'}}>
          <h3>JOSE SILVA</h3>
          <p>FOUNDER OF SILVA METHOD</p>
        </div>
     </div>
        
      </div>
    
        </div>
        <CustomFooter/>
    </div>
  )
}

export default Research