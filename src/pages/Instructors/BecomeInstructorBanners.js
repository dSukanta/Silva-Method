import React from 'react'
import { Alert } from 'react-bootstrap';
import { AiOutlineQuestion } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import instructor1 from "../../images/becomeinstructor/ins1.jpg";
import instructor2 from "../../images/becomeinstructor/ins2.jpg";
import instructor3 from "../../images/becomeinstructor/ins3.jpg"
import BecomeInstructorForm from './BecomeInstructorForm';

function BecomeInstructorBanners() {
  return (
    <div className='container mt-5 mb-5'>
      <div className="d-flex justify-content-center flex-column align-items-center">
        <AiOutlineQuestion size={40} color='black' />
        <h3>Are You interested in becoming a Silva instructor?</h3>
        <Alert style={{ backgroundColor: "#8019da", color: "white", marginTop: "20px" }}>
          <p className='white-color' style={{ fontSize: "1.1rem" }}>
            This page gives you some general information before beginning your
            first steps as a candidate instructor. If you live in a country where Silva is already taught,
            you must first seek the approval of your country Silva Director.
            Your Silva Director will oversee your classes, organize publicity,
            dates, and reports, and ensure you are on time with Royalty payments to himself and to Silva International.
            They will also be first in line for your training and certification in your country and language.
            If your country Director accepts you but cannot provide this training, you will be trained at an official Silva International Lecturer Development Seminar (LDS).
            Your country Director will still need to ensure that you satisfy any particular requirements he/she may have for their country and may require you to follow extra
            training. The Trainers are Lee Pascoe and Ken Coscia.
          </p>
        </Alert>
        <Alert style={{ backgroundColor: "#8019da", color: "white", marginBottom: "30px" }}>
          <p className='white-color' style={{ fontSize: "1.1rem" }}>
            If you live in an area which has no Silva classes, you will be under the Directorship of Silva International,
            and you will be trained at an official Silva International LDS. This applies also to an instructor wishing to teach in the United States
            , where there are no local directors. Before beginning your training, you must have completed a minimum of 5 Silva seminars,
            either the original BLS, or the more recent version, SLS/SIS. After certification, each instructor will be responsible for a city/region.
            The candidate must understand that there is no guarantee they will be accepted, certified and allotted a territory, simply because they have completed the LDS.
          </p>
        </Alert>
        <GiTeacher size={40} color='black' />
        <h3 className='mt-3'>Qualities sought - A Silva Instructor must :</h3>
        <div className="row gap-4 justify-content-center align-items-center align-content-center mt-5 mb-5 mx-2">
          <div className="col-sm-12 col-md-4 service-widget" style={{ height: "280px" }}>
            <img src={instructor1} alt="" />
            <h5>
              Speak in public with ease and confidence
            </h5>
          </div>
          <div className="col-sm-12 col-md-4 service-widget p-3" style={{ height: "280px" }}>
            <img src={instructor2} alt="" />

            <h5>
              Present a professional image
            </h5>
          </div>
          <div className="col-sm-12 col-md-4 service-widget p-3" style={{ height: "280px" }}>
            <img src={instructor3} alt="" />
            <h5>
              Avoid mixing private life and professional instructor activities.
            </h5>
          </div>

          <div className="col-sm-12 col-md-4 service-widget p-3" style={{ height: "280px" }}>
            <img src={instructor3} alt="" />
            <h5>
              Be able to work independently as self-employed.
            </h5>
          </div>
          <div className="col-sm-12 col-md-4 service-widget p-3" style={{ height: "280px" }}>
            <img src={instructor3} alt="" />
            <h5>
              Have marketing and business skills.
            </h5>
          </div>
          <div className="col-sm-12 col-md-4 service-widget p-3" style={{ height: "280px" }}>
            <img src={instructor3} alt="" />
            <h5>
              Show an honest, positive, responsible character, eager.
            </h5>
          </div>
          <div className="col-sm-12 col-md-4 service-widget p-3" style={{ height: "280px" }}>
            <img src={instructor3} alt="" />
            <h5>
              Use the Silva Method personally on a regular basis, having integrated it
              into their life, with their own success stories to quote.
            </h5>
          </div>

        </div>


        {/*  */}

        <GiTeacher size={40} color='black' />
        <h3 className='mt-3'>Being an instructor Silva does not mean only presenting seminars, but also implies the following:</h3>


        <div className="row gap-4 justify-content-center align-items-center align-content-center mt-5 mb-5 mx-2">
          <div className="col-sm-12 col-md-4 service-widget p-3" style={{ height: "250px" }}>
            <img src={instructor1} alt="" />
            <h5>
              Conducting graduate meetings in the cities/regions where they teach.
            </h5>
          </div>

          <div className="col-sm-12 col-md-4 service-widget p-3" style={{ height: "250px" }}>
            <img src={instructor1} alt="" />
            <h5>
              Allowing time to respond personally to phone calls.
            </h5>
          </div>

          <div className="col-sm-12 col-md-4 service-widget p-3" style={{ height: "250px" }}>
            <img src={instructor1} alt="" />
            <h5>
              Being available for past Graduates and future participants.
            </h5>
          </div>

          <div className="col-sm-12 col-md-4 service-widget p-3" style={{ height: "250px" }}>
            <img src={instructor1} alt="" />
            <h5>
              Being aware of the impact that this activity can have on family life.
            </h5>
          </div>
          <Alert style={{ backgroundColor: "#8019da", color: "white", marginTop: "20px" }}>
            <p className='white-color' style={{ fontSize: "1.1rem" }}>
              If you live outside the USA, in an area where Silva is already taught, THE FIRST STEP is to contact your country Silva Director,
              who will give you all the information necessary regarding your training requirements.
              If you wish to teach in the USA, or in a new country where there is no director, THE FIRST STEP is to fill in and submit the Application form
              (LINK) This must be accompanied by a "Letter of Intention" in which you explain why you want to become a Silva Instructor,
              and what you consider to be your qualities. Please send it by email with a photo, to silvamethod@silvamethod.com (Half a page will suffice.)
            </p>
          </Alert>

        
            <BecomeInstructorForm />
        </div>
      </div>
    </div>
  )
}

export default BecomeInstructorBanners