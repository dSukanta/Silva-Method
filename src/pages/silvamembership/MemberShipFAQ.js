import React from 'react'
import { Accordion } from 'react-bootstrap'
import CustomAccordion2 from '../SilvaManifestationProgram/CustomAccordion2'

function MemberShipFAQ() {
    return (
        <div className='container'>
           <div className="row">
            <h2 className='text-center mb-4'>Frequently Asked Questions</h2>
           <div className="col-sm-12">
                    <CustomAccordion2 title={"How is the Mindvalley Membership better than just enrolling in Quests separately?"} 
                    text={"You will save up to $15,000 by subscribing to Mindvalley as a member. You will get unlimited access to all Quests at any time, anywhere for as long as you remain subscribed as a Mindvalley member."}
                    text2={"Big savings aside, you will experience more than just personal growth. You will gain access to an exclusive community of like-minded people like you. Make lifelong connections and learn together with new and upcoming Quests, accredited authors, exclusive events, and more."}
                    />
                  </div>

                  <div className="col-sm-12">
                    <CustomAccordion2
                    title={"How do I choose the Quests I want to take?"}
                    text={"Upon successful payment and order confirmation, you will immediately gain access to our entire library of Quests and more in your Mindvalley account."} />
                  </div>

                  <div className="col-sm-12">
                    <CustomAccordion2
                    title={"How do I cancel or get a refund?"}
                    text={"For Refund - When you purchase directly through our website, you are entitled to a 15-day money back guarantee on your first subscription fee whether annual or monthly. If in this time you decide it’s not for you, get your easy refund at mindvalley.com/refund.Upon successful refund, you will immediately lose access to your membership subscription privileges, including all Quests."}
                    text2={"For cancellation - If you have purchased a subscription directly on our website and you decide not to renew your subscription for another month/year, you can cancel it on the Billing Section of your account. You won’t be charged for this any further but you will still keep the access to the subscription content until your next renewal date."}
                    />
                  </div>

                  <div className="col-sm-12">
                    <CustomAccordion2 title={"Can I pay in instalments?"} 
                    text={"Unfortunately, we currently do not accept payment installments but are working on providing this option soon. Stay tuned.                    "} />
                  </div>
           </div>
        </div>
    )
}

export default MemberShipFAQ