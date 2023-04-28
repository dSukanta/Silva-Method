import React from 'react'
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader'
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader'
import CustomFooter from '../Home/Home/HomeFooter/Footer'
import SeminarJoinSection from './SeminarJoinSection'
import SeminarJoinSection2 from './SeminarJoinSection2'
import LifeSystemBanner from './LifeSystemBanner'
import LifeSystemExtraBanners from './LifeSystemExtraBanners'
import MasteryBannerMain from './MasteryBannerMain'
import AboutInstructorSection from './AboutInstructorSection'
import MasteryJoinUs from './MasteryJoinUs'
import MasteryAboutKen from './MasteryAboutKen'

function MasterySystem() {

    // document.title="Silva mastery System by Ken Coscia | USA Silva Method Trainig Director";

    return (
        <div>
            <HomeHeader />
            <CommonPageHeader title="SILVA MASTERY SYSTEM" subtitle="MASTERY" />
            <SeminarJoinSection title='The Silva Mastery System™ with Ken Coscia'
                btnText="Find An Event Now"
                text='Scroll down to learn how to advance your Silva skills, create lasting, loving relationships at work or home, enhance your intuition and prosper.'
            // subtext="These extremely high success rates are a result of over 5 decades of research and millions of dollars spent in perfecting the process of enhancing human intuition. After working with millions of Silva students of every age and demographic, we are confident that our formula is one of the most optimized, tested and effective intuition programs out there."
            />

            <SeminarJoinSection2 title='KEN CREATED THIS ADVANCED PROGRAM FOR YOU'
            // btnText="Find An Event Now"
            // text='Scroll down to learn how to advance your Silva skills, create lasting, loving relationships at work or home, enhance your intuition and prosper.'
            // subtext="These extremely high success rates are a result of over 5 decades of research and millions of dollars spent in perfecting the process of enhancing human intuition. After working with millions of Silva students of every age and demographic, we are confident that our formula is one of the most optimized, tested and effective intuition programs out there."
            />

            <LifeSystemExtraBanners
                title1='Two Full days on advanced psychology training, the latest in Neuroscience…'
                title2='Advanced subjective education skill training…'
                text1='To understand what really drives your behavior, shapes your thoughts, and defines your identity and happiness. You’ll create new mental frameworks for success; overcome fear and doubt; become more confident; focus your intuition to create solutions and develop greater capacity for joy, success, resilience, and love.'
                // text2='to help you become more influential with your family, friends, coworkers, and everyone you hope to work with and serve. You’ll learn how to revitalize relationships, manage conflict, and lead with emotional integrity and power. You’ll become a role model ready to change the world.'
                text3='to help you become more influential with your family, friends, coworkers, and everyone you hope to work with and serve. You’ll learn how to revitalize relationships, manage conflict, and lead with emotional integrity and power. You’ll become a role model ready to change the world.'
                // text4='“Silva demonstrates that there is no limit to what the mind can do.” ROBERT STILLER, CEO OF GREEN MOUNTAIN COFFEE'
                img1={"https://silvamethod.com/adminsilva/uploads/profile_pic/ken-coscia-edited.webp"}
                img2={"https://silvamethod.com/store/wp-content/uploads/2021/10/Team1.webp"}
            />

            <LifeSystemBanner img={"https://silvamethod.com/assets/images/healing.webp"}
                reverse={true}
                title='Advanced dynamic meditation training for achieving your dreams 10x faster.'
                text1='Manage your day, get more done, organize projects, evaluate opportunities, deal with setbacks, find fulfillment, and stay focused on what matters. These are the secrets you need to get ahead and make a difference.'
            />

            <SeminarJoinSection title=''
                btnText="Sign Up Now"
                text='You, upon completion of the Basic Lecture Series, Silva Life and Intuition Systems and/or the home study programs, are eligible to participate in Ken’s Silva advanced seminar designed to take you to the next level!

                Whether you have been practicing your Silva skills or have let things slide, the Silva Mastery System 2 Day Seminar is the ideal opportunity for you to tap back into that natural rhythm and launch yourself to new levels of clarity, focus, and balance with proven outstanding results.
                
                Ken created this advanced program for you, the Silva practitioner who wants to enjoy more consistent lasting results. It is based on Ken’s practical experience with tens of thousands of Silva graduates in over 25 nations over a 45-year span. It is a profound experience with over 6 unique dynamic meditations and reference to some of the latest neuro – scientific research and positive Psychology to help you make the shifts you’ll need to navigate these times with poise,confidence and a level of certainty to create your Life Vision.'
            // subtext="These extremely high success rates are a result of over 5 decades of research and millions of dollars spent in perfecting the process of enhancing human intuition. After working with millions of Silva students of every age and demographic, we are confident that our formula is one of the most optimized, tested and effective intuition programs out there."
            />

            <MasteryBannerMain />
            
            <AboutInstructorSection />

            <MasteryJoinUs />

            <MasteryAboutKen />
            <CustomFooter />
        </div>
    )
}

export default MasterySystem