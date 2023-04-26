import React from 'react'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import DoctorDetailsArea from '../Doctors/DoctorDetails/DoctorDetailsArea/DoctorDetailsArea'
import CustomFooter from '../Home/Home/HomeFooter/Footer'
import SeminarBanner from './SeminarBanner'
import LifeSystemBanner from './LifeSystemBanner'
import SeminarBanner2 from './SeminarBanner2'
import SeminarDescriptionSection from './SeminarDescriptionSection'
import SeminarReviewsSection from './SeminarReviewsSection'
import SeminarBenefitCards from './SeminarBenefitCards'
import SeminarAgendaSection from './SeminarAgendaSection'
import SeminarJoinSection from './SeminarJoinSection'
import LifeSystemExtraBanners from './LifeSystemExtraBanners'
import LifeSystemJoinUs from './LifeSystemJoinUs'
import LifeSystemFAQ from './LifeSystemFAQ'
import HomeEvents from '../events/HomeEvents'
import SeminarBanner3 from './SeminarBanner3.js'
import SeminarBenefitCards2 from './SeminarBenefitCards2'
import SeminarAgendaSection2 from './SeminarAgendaSection2'

function IntuitionSystem() {
    return (
        <div>
            <HomeHeader />
            <CommonPageHeader title="SILVA INTUITION SYSTEM" subtitle="INTUITION" />
            {/* <SeminarBanner title="Participate in life changing events that help you overcome obstacles and live your life’s purpose!"
        text=""
        btnText="START LEARNING"
        exactclass="parallex2"
      />

      <LifeSystemBanner img={"https://silvamethod.com/assets/images/silva-icon1.png"}
        title='Start Your Silva Journey With A Live Event Experience'
        hasBadge={true}
        badgeText='Level 1'
        hasButton={true}
        btnText='SIGN UP NOW'
        text1='CHOOSE A CONSCIOUS WAY OF LIFE'
        text2='Across the world, people are moving towards a more conscious way of living. They are ready to fulfill their potential, to overcome financial, career, and health challenges. They are ready to live a harmonious and productive life.'
      />

      <SeminarBanner2 title="OUR CORE PROGRAM, THE SILVA LIFE SYSTEM, IS THE FIRST STEP. IMAGINE…"
        btnText="Find An Event Now !"
      />

      <SeminarDescriptionSection />

      <SeminarReviewsSection />

      <SeminarBenefitCards />

      <SeminarAgendaSection />


      <SeminarJoinSection title='The Silva Method Is Backed By Research'
        text='Jose Silva was a pioneer in the mind and intuitive research. His research and findings have been the basis for many developments in business, the arts, sports, and personal growth.'
      />


      <LifeSystemExtraBanners
        title1='Artists Enhance Creativity And Focus With Silva'
        title2='Businesses Train Employees In Silva Method'
        text1='Notable students include the opera singer Marguerite Piazza, singer Vicki Carr, and actresses Loretta Swit and Carol Lawrence, the first live theater actress to get a star on the Hollywood Walk of Fame.'
        text2='Best-selling author, Richard Bach, credits the Silva Method for the inspiration to help him finish his iconic book, Jonathan Livingston Seagull, which sold over a million copies and was featured on the cover of TIME magazine.'
        text3='Top corporations including RCA Records, Green Mountain Coffee, and The Arnold Agency report amplified creativity, improved business management, enhanced motivation, better health, higher work attendance, and better stress management.'
        text4='“Silva demonstrates that there is no limit to what the mind can do.” ROBERT STILLER, CEO OF GREEN MOUNTAIN COFFEE'
        img1={"https://silvamethod.com/assets/images/artist.webp"}
        img2={"https://silvamethod.com/assets/images/business-trainig.webp"}
      />

      <LifeSystemExtraBanners
        title1='World Class Athletes Use Silva Method For Physical Excellence'
        title2='Healthcare Professionals Integrate Silva Principles Into Mind-Body Healing Regimens'
        text1='“The Silva Method helped me with my concentration, and it helped me to relax before the pressures of a game,” stated Russell “Bucky” Dent, a baseball player with the Chicago White Sox named Most Valuable Player at the 1978 World Series.'
        text2='To this day, many world-class athletes use the principles of The Silva Method to visualize their desired outcomes, improve focus, and keep their minds and bodies in optimal condition.'
        text3='“The most powerful single tools that I have to offer patients,” said Dr. O Carl Simonton, founder of the Simonton Research Institute, for imagery therapy.'
        text4='Professor Clancy D. McKenzie, founder of the American Mental Health Association, is also known to have used Silva techniques to aid his patients.'
        img1={"https://silvamethod.com/assets/images/athelete.webp"}
        img2={"https://silvamethod.com/assets/images/healing.webp"}
      />



      <LifeSystemBanner img={"https://silvamethod.com/assets/images/speaker.webp"}
       reverse={true}
        title='Top Personal Growth Leaders Inspired By Silva'
        text1='“Anything with the name Jose Silva as an author has my vote before I open to page one,” said Wayne Dyer, well known personal growth author and teacher. “It allows you to tap into a deep storehouse of knowledge and wisdom,” according to Shakti Gawain, who credits Silva for inspiring her best-selling book, Creative Visualization.'
      />


      <LifeSystemJoinUs />



      <LifeSystemFAQ />

      <HomeEvents /> */}

            {/* <DoctorDetailsArea/> */}


            <LifeSystemBanner img={"https://silvamethod.com/assets/images/silva-icon1.png"}
                title='Human Intuition Is A Trainable Skill'
                hasBadge={true}
                badgeText='Level 2'
                hasButton={true}
                btnText='SIGN UP NOW'
                text1='WITH THE RIGHT PROCESS, YOU CAN ONCE AGAIN RECOVER YOUR INTUITIVE SENSES.'
                text2='Intuition is more than trainable. It’s a natural skill! We’re all born with it—but, like any skill, it has to be developed and practiced – or it doesn’t stick.'
            />


            <SeminarBanner3 />
            <SeminarJoinSection title='TOTAL INTUITIVE LIVING IS THE GOAL FOR EVERY SILVA STUDENT'
                text='Experience shows that over 97% of Silva students attain an astonishing level of intuition after just two days of our intuition training.'
                subtext="These extremely high success rates are a result of over 5 decades of research and millions of dollars spent in perfecting the process of enhancing human intuition. After working with millions of Silva students of every age and demographic, we are confident that our formula is one of the most optimized, tested and effective intuition programs out there."
            />


            <SeminarBenefitCards2 />



            <SeminarJoinSection title='The Silva Method Is Backed By Research'
                text='Jose Silva was a pioneer in the mind and intuitive research. His research and findings have been the basis for many developments in business, the arts, sports, and personal growth.'
            />

            <SeminarAgendaSection2 />

            <CustomFooter />
        </div>
    )
}

export default IntuitionSystem