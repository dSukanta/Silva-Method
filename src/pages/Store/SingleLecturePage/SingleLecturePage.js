import React, { useEffect, useState } from 'react'
import SingleLectureNavbar from './SingleLectureNavbar'
import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'
import SingleLectureFooter from './SingleLectureFooter'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import CustomCourseModal from './CustomCourseModal'
import SidebarExample from './SidebarExample'

function SingleLecturePage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const { width, height } = useWindowSize();
  const [marked, setMarked] = useState(false);
  const [numofConfetti, setNumOfConfetti] = useState(300);
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 })
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
  const videoSrc = {
    type: "video",
    sources: [
      {
        src: "https://images.unsplash.com/photo-1542681575-352258e0c854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      }
    ]
  };


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  useEffect(() => {
    if (marked) {
      setTimeout(() => {
        setNumOfConfetti(0)
      }, 4000)
    }
  }, [marked])
  return (
    <>
      <div className='d-flex justify-content-center align-items-center flex-column text-center'>
        <SingleLectureNavbar handleShow={handleShow} />
        <h2 className='mt-5'>The Truth About Meditation</h2>
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-12 col-md-8 col-lg-6">
            <ReactPlayer
              light="https://images.unsplash.com/photo-1542681575-352258e0c854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              width={"100%"}
              height={!isMobile ? "500px" : "200px"}
              url={"https://joy1.videvo.net/videvo_files/video/free/2019-02/large_watermarked/181004_10_LABORATORIES-SCIENCE_12_preview.mp4"}
              controls
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload'
                  }
                }
              }}
            />
            <p style={{ fontSize: "1rem", color: "black", width: isDesktopOrLaptop ? "100%" : "92%", textAlign: "start" }} className='mx-3 mt-4'>
              This is an introduction to The 6 Phase Meditation. Watch the video above and listen to the audio meditation to fully experience The 6 Phase. It's ok if you get a little lost. Over the next few days, this Quest will guide you through it so you can master each and every section.
            </p>

            <div className='text-start'>
              <h3>Key Insights</h3>
              <p style={{ fontSize: "1rem", color: "black", width: isDesktopOrLaptop ? "100%" : "92%", textAlign: "start" }} className='mx-3 mt-4'>
                1. We need happiness in the now and a vision for the future to live a truly fulfilling life.
              </p>
              <p style={{ fontSize: "1rem", color: "black", width: isDesktopOrLaptop ? "100%" : "92%", textAlign: "start" }} className='mx-3 mt-4'>
                2. The 6 Phase Meditation is designed to optimize your present state of being, as well as bring your future visions into reality.
              </p>
              <h3>The 6 Phases Include:</h3>
              <p style={{ fontSize: "1rem", color: "black", width: isDesktopOrLaptop ? "100%" : "92%", textAlign: "start" }} className='mx-3 mt-4'>
                1. Love & Compassion
              </p>
              <p style={{ fontSize: "1rem", color: "black", width: isDesktopOrLaptop ? "100%" : "92%", textAlign: "start" }} className='mx-3 mt-4'>
                2. Happiness & Gratitude.
              </p>
              <p style={{ fontSize: "1rem", color: "black", width: isDesktopOrLaptop ? "100%" : "92%", textAlign: "start" }} className='mx-3 mt-4'>
                2. Peace & Forgiveness.
              </p>
              <p style={{ fontSize: "1rem", color: "black", width: isDesktopOrLaptop ? "100%" : "92%", textAlign: "start" }} className='mx-3 mt-4'>
                2. Vision for Your Future.
              </p>
              <p style={{ fontSize: "1rem", color: "black", width: isDesktopOrLaptop ? "100%" : "92%", textAlign: "start" }} className='mx-3 mt-4'>
                2. Mastering Your Day.
              </p>
              <p style={{ fontSize: "1rem", color: "black", width: isDesktopOrLaptop ? "100%" : "92%", textAlign: "start" }} className='mx-3 mt-4'>
                2. Support & Blessing.
              </p>
            </div>
          </div>
        </div>

      </div>
      <SingleLectureFooter setMarked={setMarked} marked={marked} setModalShow={openModal} />
      {
        marked && (
          <Confetti
            width={width}
            height={height}
            gravity={0.3}
            numberOfPieces={numofConfetti}
          />
        )
      }
      {
        <CustomCourseModal
          show={modalIsOpen}
          openModal={openModal}
          closeModal={closeModal}
          setModalShow={setIsOpen}
           />
      }
      <div className="offcan">
      <SidebarExample placement={"end"} show={show} handleClose={handleClose} />
      </div>
    </>
  )
}

export default SingleLecturePage