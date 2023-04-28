import React from 'react'
import LifeSystemExtraBanners from '../seminars/LifeSystemExtraBanners'
import MemberShipBanner from './MembershipBanner'

function StartJourneySection() {
    return (
        <>
            <div className='container'>
                <h2 className='text-center'>How To Start Your Journey</h2>
                <LifeSystemExtraBanners
                    title1='Step 1: Take The Self-Assessment'
                    title2='Step 2: Download The App And Login'
                    text1='Mindvalley Membership begins with a 22-minute life assessment that helps you identify where you’re thriving and where you need to apply more deliberate focus and attention.'
                    text2='This assessment helps you get an honest, structured roadmap for your journey towards personal excellence.'
                    text3='Download the Mindvalley app from Google Play, Apple or Apple TV. You can also access all your content on your computer at mindvalley.com. Create an account and you’re good to go. All programs will be available for you.'

                    img1={"https://storyblok-cdn.mindvalley.com/f/60579/1200x676/7386c1090d/global_learning-platform-00.jpg?trans?quality=40&auto=webp&dpr=1&width=600"}
                    img2={"https://storyblok-cdn.mindvalley.com/f/60579/1200x672/dafa24ecb8/global_learning-platform-01.jpg?trans?quality=40&auto=webp&dpr=1&width=600"}
                />

                <LifeSystemExtraBanners
                    title1='Step 3: Choose Your Program'
                    title2='Step 4: Join The Community'
                    text1='Choose from our library of programs in every area of personal growth. Set aside 20 mins a day as your ‘Mindvalley Time.’ Our getting started guide shows you how to create habits and set up learning routines.'
                    // text2='To this day, many world-class athletes use the principles of The Silva Method to visualize their desired outcomes, improve focus, and keep their minds and bodies in optimal condition.'
                    text3='Our community platform allows you to interact with other students and ask questions, start discussions, share posts or just find a learning buddy.'
                    img1={"https://storyblok-cdn.mindvalley.com/f/60579/1196x674/33b8f402c1/global_learning-platform-03.jpg?trans?quality=40&auto=webp&dpr=1&width=600"}
                    img2={"https://storyblok-cdn.mindvalley.com/f/60579/1200x676/5fed7ded42/global_learning-platform-05.jpg?trans?quality=40&auto=webp&dpr=1&width=600"}
                />

            </div>
            <MemberShipBanner />
        </>
    )
}

export default StartJourneySection