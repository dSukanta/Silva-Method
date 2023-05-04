import React, { useContext } from 'react'
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
import MemberShipPricingPlan from './MemberShipPricingPlan'
import MemberShipHowItWorks from './MemberShipHowItWorks'
import StartJourneySection from './StartJourneySection'
import MemberStories from './MemberStories'
import LearnSection from './LearnSection'
import MemberShipFeatures from './MemberShipFeatures'
import OrderMembershipSection from './OrderMembershipSection'
import MemberShipFAQ from './MemberShipFAQ'
import PaddingComponent from './PaddingComponent'
import CustomFooter from '../Home/Home/HomeFooter/Footer'
import { AuthContext } from '../../context/AllContext'

function SilvaMemberShip() {
    const { userData } = useContext(AuthContext);

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
                userData && userData.strip_payment_status!=="paid" && (
                    <MemberShipPricingPlan />
                )
            }

            <MemberShipHowItWorks />

            <StartJourneySection />

            {/* <MemberStories title={'Stories from Silva Method Members'} /> */}

            <LifeSystemBanner img={"https://storyblok-cdn.mindvalley.com/f/60579/2000x1125/4ee0f2c90a/global_quest-collage_isometric.jpg?trans?quality=40&auto=webp&dpr=1&width=710"}
                reverse={true}
                hasButton={true}
                btnText={'Become A Member Now'}
                title='Upgrade Every Aspect of Your Life for Less Than $2/day'
                text1='Unlimited Access to All Mindvalley Quests plus Our Private Student Network, Mindvalley Meditations, Weekly Live Calls and Workshops, Entrepreneurial Training, and Mindvalley Series in Mentoring, Work Performance and Parenting.'
            />

            <LearnSection />

            <MemberShipFeatures />

            <OrderMembershipSection />

            <MemberShipFAQ />

            {
                 userData && userData.strip_payment_status!=="paid" && (
                    <MemberShipPricingPlan />
                )
            }

            <PaddingComponent />

            {
                isMobile && (
                    <MemberShipFooter />
                )
            }
            {
                (isDesktopOrLaptop || isTablet) && (
                    <CustomFooter />
                )
            }
        </div>
    )
}

export default SilvaMemberShip