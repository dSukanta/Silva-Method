import React from 'react'
import { Accordion } from 'react-bootstrap'

function LifeSystemFAQ() {
    return (
        <div className='container'>
            <h2 className='text-center'>WHAT ARE THE MOST FREQUENTLY ASKED QUESTIONS ABOUT SILVA LIFE SYSTEM?</h2>
            <Accordion className='mt-3 mb-3'>
                <Accordion.Item eventKey="0" className='mb-3'>
                    <Accordion.Header>
                        Who would benefit from using SLS?
                    </Accordion.Header>
                    <Accordion.Body style={{fontSize:"1.1rem"}}>
                        Everyone! Let us explain – The Silva Life System is a personal empowerment program designed to unleash the power of your mind, which will in turn benefit all areas of your life. You’ll do better in your career, increase your wealth-making abilities, beat stress, improve your health and relationships,and even find your life purpose. The best part is, ANYONE can do this. You don’t need to be a Silva student, and you don’t need any meditation experience – all you need to do to join the millions of people who have already benefited from this program is determination, patience and belief in yourself.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='mb-3'>
                    <Accordion.Header>
                        How is SLS better than any other self empowerment course?
                    </Accordion.Header>
                    <Accordion.Body style={{fontSize:"1.1rem"}}>
                        The Silva Life System is based on the original program of over 5 decades and millions of dollars of research. It is designed to help you function consciously at the Alpha level of mind. The benefits of being in this state include enhanced creativity, intuition, relaxation and healing. No other self empowerment program has the level of scientific and empirical backing that we do – and you won’t find our thoroughly researched and perfected techniques and exercises anywhere else.
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="3" className='mb-3'>
                    <Accordion.Header>
                        I've tried other similar programs with similar promises, but I haven't experienced the results I expected. Why would SLS be any different?
                    </Accordion.Header>
                    <Accordion.Body style={{fontSize:"1.1rem"}}>
                        Few programs have the scientific backing and social proof of the Silva Life System. There is no way I would risk our credibility by offering you a program that doesn’t work as I say it does. On top of that, you’ve got an unconditional guarantee to give you unbeatable peace of mind.
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="4">
                    <Accordion.Header>
                        I have a busy life. How will I find time to study SLS?
                    </Accordion.Header>
                    <Accordion.Body style={{fontSize:"1.1rem"}}>
                        The beauty of the Silva Life System is you can go through it at your own pace. All you really need is half an hour in the morning or before going to bed to go through the exercises and lecture tracks. And if you’re too busy to do it on certain days, don’t worry! You can just pick up where you left off when you get the time. No matter what pace you do it at, within time you’ll still experience all the life-changing benefits we’ve told you about.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default LifeSystemFAQ