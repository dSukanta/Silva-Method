import React from 'react'
import DifferenceCards from './DifferenceCards'
import img1 from "../../images/newimgs/content-1.webp"
import img2 from "../../images/newimgs/content2.webp"
import img3 from "../../images/newimgs/content-3.webp"
import CustomerReviews from './CustomerReviews'

function DifferenceSection() {

  return (
    <div className="container text-center">
      <div className='row justify-content-center'>
        <div className='col-sm-12 col-md-6'>
          <h1>The Silva Difference</h1>
          <h4 className='mb-4'>5X Better Completion Rates than Traditional Online Learning*</h4>
          <p style={{ fontSize: "1.1rem" }}>
            Our content and courses have radically transformed the way we consume information and learn.
            It’s not just something we say. It’s something we do. Our Quest platform has an *333% better completion rate than industry average.
            These deep-dives into personal transformation use scientifically proven motivators and systems that help you make life changes that really stick.
          </p>
        </div>
        <div className="row mt-3 mb-4">
          <div className="col-sm-12 col-md-6 col-lg-4">
          <DifferenceCards img={img1} title={"Daily Bite-Size Micro-Learnings"}
            text={"Our scientifically-backed tools and technology make complicated topics easy to understand and integrate for results."}
          />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
          <DifferenceCards img={img2} title={"The Best Authors, Speakers And Activists"}
            text={"Our experts are living legends; best-selling authors and brilliant minds who know how to inspire and transform."}
          />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4">
          <DifferenceCards img={img3} title={"Group Motivation: Start and End Together"}
            text={"Community is the key to ultimate growth. Connect and grow with other members and be inspired by their journeys."}
          />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default DifferenceSection