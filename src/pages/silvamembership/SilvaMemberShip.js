import React from 'react'
import SilvaMembershipNavbar from './SilvaMembershipNavbar'
import BecomeMemberSection from './BecomeMemberSection'
import MemberHeroSection from './MemberHeroSection'
import StoriesSlider from './StoriesSlider'
import BreakThroughs from './BreakThroughs'
import BetterSection from './BetterSection'
import MemberShipFooter from './MemberShipFooter'
import { useMediaQuery } from 'react-responsive'
import CurriCulumBanner from './CurriCulumBanner'
import LifeSystemBanner from '../seminars/LifeSystemBanner'
import TrainerSection from './TrainerSection'
import SuccessBanner from './SuccessBanner'
import Sponsors from './Sponsors'

function SilvaMemberShip() {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    return (
        <div>
            <SilvaMembershipNavbar />
            <BecomeMemberSection />
            <MemberHeroSection />
            <StoriesSlider />
            <BreakThroughs />
            <BetterSection />
            <LifeSystemBanner img={"https://storyblok-cdn.mindvalley.com/f/60579/3863x4135/a516bdc6b2/mqaa_sp_curriculum.jpg?trans?quality=40&auto=webp&dpr=1&width=600"}
                reverse={false}
                bigpic
                title='A Curriculum That Adapts Itself to Your Goals, Dreams and Interests'
                text1='Included in your Mindvalley Membership is the Mindvalley Life Assessment: a highly accurate 22-minute test revealing which areas of your life need the most urgent attention.'
                text2='You can then use your assessment results to pick the right Quests for your personal needs and goals - and design your own bespoke learning curriculum.'
            />

            <TrainerSection />

            <SuccessBanner />

            <Sponsors />
            {
                isMobile && (
                    <MemberShipFooter />
                )
            }
        </div>
    )
}

export default SilvaMemberShip