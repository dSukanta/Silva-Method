import React from 'react'
import { Accordion } from 'react-bootstrap'

function IntuitionSystemFAQ() {
    return (
        <div className='container'>
            <h2 className='text-center'>WHAT ARE THE MOST FREQUENTLY ASKED QUESTIONS ABOUT SILVA LIFE SYSTEM?</h2>
            <Accordion className='mt-3 mb-3'>
                <Accordion.Item eventKey="0" className='mb-3'>
                    <Accordion.Header>
                        Do I need any prior intuition training to use the Silva Intuition System?
                    </Accordion.Header>
                    <Accordion.Body style={{ fontSize: "1.1rem" }}>
                        Yes, we recommend Silva Life System training because it gives you the foundation for all the other programs. Here you will learn the Silva meditation techniques vital for opening up the door to intuition, as well as techniques that rewire subconscious patterns with a higher level of resourcefulness. In fact, what you learn in Silva Life System training lays the groundwork for success in any of the programs.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='mb-3'>
                    <Accordion.Header>
                        What results can I expect by using the Silva Intuition System?
                    </Accordion.Header>
                    <Accordion.Body style={{ fontSize: "1.1rem" }}>
                        Relying on your natural inner guidance system can benefit all areas of your life. By helping you to make better decisions without stress and strain, you will develop greater trust in your inner self and confidence that life can take you just exactly where you need to be.
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="3" className='mb-3'>
                    <Accordion.Header>
							How fast will I start seeing results?
                    </Accordion.Header>
                    <Accordion.Body style={{ fontSize: "1.1rem" }}>
                    Students generally start experiencing their intuitive abilities very quickly. The prerequisite program, Silva Life System Program, introduces you to intuition exercises preparing you for the more advanced Silva Intuition System training.
                    </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="4" className='mb-3'>
                    <Accordion.Header>
						What is the Benefit of a "Live" Training?
                    </Accordion.Header>
                    <Accordion.Body style={{ fontSize: "1.1rem" }}>
                       There is nothing like a live training with a professional instructor to guide and accelerate your learning, not to mention the energy of being in a group. You can ask questions, get feedback and ideas from other students, and get the hands-on experience that is often missed when studying at home alone.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                    <Accordion.Header>
                       What about the home study program? How do they compare?
                    </Accordion.Header>
                    <Accordion.Body style={{ fontSize: "1.1rem" }}>
                       We recommend the home study program as a complementary tool to the live programs. We know that coming to a live event is not an option for everyone. We made the home study program so that you can start learning from home right away. Some students like being able to use the Home Study program before attending the Live Event. This is a great way to learn the material and come prepared with questions for the instructor. The absolute best practice for all Silva Programs is to come to a live event, experience the magic of being there with others, and then to use your home study program as a tool to help you develop your practice over time.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default IntuitionSystemFAQ