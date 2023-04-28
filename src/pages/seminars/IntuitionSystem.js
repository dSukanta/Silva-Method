import React, { useMemo } from 'react'
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
import IntuitionSystemFAQ from './IntuitionSystemFAQ.js'

function IntuitionSystem() {

    // document.title="Be More Intuitive | Learn Silva Intution System | SIS";

    const day11 = useMemo(()=>{
        return [
            {
                title:"What To Expect In Class",
                text:"The ambiance is relaxing and class size is usually intimate, anywhere from 30 to 50 people. This means that you get more individualized attention from our instructors. This also gives you the opportunity to meet like-minded people. Many students gain life-long friendships at these events. The Silva Life System program is a 2 day experience and is usually held from 9am to 6pm on a Saturday and Sunday (times and dates may vary based on location)."
            },
            {
                title:"Join Us At A Live Program",
                text:"50 years in the making and we have not missed a beat. Silva programs continue to be one of the most popular personal growth programs available today. Our comprehensive programs offer cutting edge technology on the relationship between the brain, mind, and personal growth."
            },
            {
                title:"Education Delivered - No Sales Pitch Needed",
                text:"We trust our students to be the kind of people who recognize for themselves a quality, educational opportunity. We won’t waste your time with high pressure sales pitches during our programs. Silva events and programs have been offered in 110 countries for 50 years. Our methods are grounded in science and have stood the test of time. Now our success can be yours. We are dedicated to making this available to the world and that is why you will always find Silva programs offered for incredible value."
            }
        ]
    },[])

    const day22 = useMemo(()=>{
        return [
            {
                title:"Fundamentals Come First",
                text:"Many students decide to continue with the Silva Method in more advanced programs on intuition or healing. Any advanced learning that you want to do will be entirely up to you and will only be made available after your program is complete."
            },
            {
                title:"At Silva It's Experiential",
                text:"At Silva, we engage you! Whether it’s in conversations about the role the mind plays in healing or taking you through guided exercises into the alpha and theta frequencies of brain. A Silva Program is the fertile playground where you will practice your newfound skills. In other words, you will not just learn about meditation and new ways to use the mind, you will experience it!"
            },
            {
                title:"Experienced Instructors",
                text:"Each of our qualified instructors have years of valuable experience and the skill to make the event a powerful life-changing weekend. They will be there to guide you, not only during, but even after the training is over. Their ultimate goal after exposing you to the techniques is to help you move beyond the guided meditations towards true independence. This level of discipline is real empowerment where you become the master of your own mind. Everyone can experience this mental achievement with the proper instruction and practice. That is why we do everything we can to ensure that you learn and experience alpha and theta frequencies while in the live training."
            }
        ]
    },[])

    const day1 = useMemo(() => {
        return [
            {
                title: "The Basics of Intuition:",
                text: "Learn the effective use of affirmations and auto-suggestions. Understand the single most important habit you must adopt to discover your intuitive abilities. Review the step-by-step guide to getting the most out of meditation and set the stage for your intuitive mind."
            },
            {
                title: "The Long Relax Exercise:",
                text: "Master deep relaxation and the meditative state. Condition your physical body, thoughts, and mind for the relaxation experience. Understand your inner body responds when meditating. Establish mental markers for shorter, effective meditations. Open the doorway for deep theta meditations.",
            },
            {
                title: "The Droplet of Source Energy Exercise:",
                text: "This is a humbling exercise that allows you to experience how you are connected to and One with Universal Source Energy, the energy from which everything comes and where all information exists. You will create a representation of the Spiritual You that is One with Source Energy and will help you solve problems. Learn how to discipline your imagination so you can control your intuition.",
            },
            {
                title: "Lunch Break:",
                text: "Bring your own or take the opportunity to connect with classmates at some of the local restaurants.",
            },
            {
                title: "Holo-Viewing Technique Exercise with Mental Screen:",
                text: "This is an emotionally and energetically infused (E2) meditation which will teach you how to manifest more of what you want as you obtain guidance from Source Energy and trust that you are moving in the right direction. It is a meditation experienced in a holographic manner where your solutions appear as if they have already happened, helping to insure their manifestation. This technique will give you an upper hand in manifesting by placing your thoughts on your “future timeline.”",
            },
            {
                title: "Projection into Metals Exercise:",
                text: "Develop your clairvoyant, clairsentient, and clairaudient abilities with the sheer power of imagination, the most powerful skill in enhancing your intuition. Learn to open the door way to the fundamental levels of all physical matter and explore these levels from subjective perspective while incorporating special mind tools to enhance your imaginative experience.",
            },
            {
                title: "Psychometry Exercise:",
                text: "Feeling sleepy or lethargic? Don’t have time to take a nap? Use this mind technique to uplift your physical and emotional energy in minutes.",
            }
        ]
    }, [])

    const day2 = useMemo(() => {
        return [
            {
                title: "Connection to Purpose Exercise:",
                text: "Understand why so many people hate what they do because they are not living consciously or connecting to their purpose. This includes a meditation where you experience a vision of your life purpose firsthand and a discussion about how purpose does not always equal your JOB!! Discover the “Perfect Blueprint” for your life and what you need to do to achieve your desired level of perfection."
            },
            {
                title: "The 3 Fingers Technique:",
                text: "A surprisingly effective anchoring tool that allows you to enter the alpha level of mind within seconds by simply pressing your fingers together."
            },
            {
                title: "Projection to Tree/Leaves/Pet:",
                text: "Develop the connection between animals, plants, and humans that allows you to access information and benefit all areas of your life. You will learn the 5 Levels of Energy Radiation by exploring plant life, thereby continuing to enhance your intuition. This is also a way to enhance The Green Thumb Effect and almost effortlessly grow beautiful flowers and plants season after season and enhance your communication and connection with your pets."
            },
            {
                title: "Projection into Human Anatomy:",
                text: "Learn the correct way to apply distance healing and visualization techniques with integrity. This is the key to developing clear vision, or clairvoyance, in order to have access to all kinds of knowledge. You will take a fascinating trip through the human anatomy from a psychic point of view and learn to apply healing."
            },
            {
                title: "Lunch Break:",
                text: "Bring your own or take the opportunity to connect with classmates at some of the local restaurants"
            },
            {
                title: "Orientology & Intuitive Demonstration:",
                text: "A video or live demonstration will be done in class using the skills you have learned. Then you will practice with your classmates. Everything you need to know for this final phase of intuitive development will be covered in the “4 steps of Caseworking,” which include: (1) The art of sending energy to others in need, (2) How to detect a health abnormality at a distance using your mind, (3) Guidelines for a physic caseworking session, (4) Experiencing the highest point of your intuition by engaging all your senses and capabilities to feel and know your recipient’s mind and body."
            },
            {
                title: "Seeds Of Purpose–Closing meditation:",
                text: "This is an E2 Mediation which means you are physically, mentally, and emotionally involved in the hologram. In this meditation your personal representation of Source Energy guides you to plant seeds along your future timeline that will flourish throughout your living experience and successfully keep you on your chosen path."
            },
        ]
    }, [])


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




            <SeminarAgendaSection2 day1={day1} day2={day2} />
            <SeminarJoinSection title='The Silva Method Is Backed By Research'
                text='Jose Silva was a pioneer in the mind and intuitive research. His research and findings have been the basis for many developments in business, the arts, sports, and personal growth.'
            />

            <SeminarAgendaSection2 day1={day11} day2={day22} title='Join Us' />

            <IntuitionSystemFAQ />



            <HomeEvents />



            <CustomFooter />
        </div>
    )
}

export default IntuitionSystem