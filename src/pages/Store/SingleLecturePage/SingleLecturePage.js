import React, { useEffect, useRef, useState } from 'react'
import SingleLectureNavbar from './SingleLectureNavbar'
import ReactPlayer from 'react-player'
import { useMediaQuery } from 'react-responsive'
import SingleLectureFooter from './SingleLectureFooter'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import CustomCourseModal from './CustomCourseModal'
import SidebarExample from './SidebarExample'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { Image } from 'react-bootstrap'
import CommonSectionArea from '../../../components/CommonSectionArea/CommonSectionArea'
import Stories from '../../SilvaManifestationProgram/Stories'
import LeaveCommentBox from '../../SilvaManifestationProgram/LeaveCommentBox'
import { requestData } from '../../../utils/baseUrl'
import { useParams } from 'react-router'
import toast, { Toaster } from "react-hot-toast";


function SingleLecturePage() {
  const audioRef = useRef();

  const {course_id, chapter_id,lession_id}= useParams();
  //console.log(course_id, chapter_id,lession_id);
  const [lesson,setLesson]= useState({}) ;


  //const [lessionComment,setlessionComment] = useState([]);


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

    const getLessonComments=async()=>{
      const res= await requestData('courseDetail','POST',{
        "course_id": course_id,
      })
      //console.log(res?.data[0]?.chapters?.filter((chapter)=> chapter.chapter_id ===chapter_id)[0]?.lession.filter((lessionItem)=>lessionItem.lesson_id===lession_id)[0]);
      setLesson(res?.data[0]?.chapters?.filter((chapter)=> chapter.chapter_id ===chapter_id)[0]?.lession.filter((lessionItem)=>lessionItem.lesson_id===lession_id)[0])
      //console.log(res?.data[0]?.chapters?.filter((chapter)=> chapter.chapter_id ===chapter_id)[0]?.lession.filter((lessionItem)=>lessionItem.lesson_id===lession_id)[0]?.lesson_comment);
      //setlessionComment(res?.data[0]?.chapters?.filter((chapter)=> chapter.chapter_id ===chapter_id)[0]?.lession.filter((lessionItem)=>lessionItem.lesson_id===lession_id)[0]?.lesson_comment)
    }

    useEffect(()=>{
      getLessonComments()
    },[lession_id])

    console.log(lesson);

    const postLessonComment=async(e,data)=>{
      e.preventDefault();
      const options={
          "lesson_id": lession_id,
          "comment": data.comment,
          "name": data.name,
          "email": data.email,
      }
      try {
        const res= await requestData("lessonComment","POST",options)
        //console.log(res);
        toast.success(
          "Hey there! We have received your comment.Thanks for your valuable comment 🙂",
          {
            position: "top-center",
          }
        );
        getLessonComments();
      } catch (error) {
        toast.error("Something went wrong ! Please try after some time.", {
          position: "top-center",
        });
        //console.log(error);
      }
      //console.log(options)
    }


    useEffect(()=>{
      document.querySelector(".navhead").scrollIntoView({
        behavior:"smooth"
      })
      if(audioRef.current){
          audioRef.current.audio.current.pause()
          console.log("audio playing")
      }
    },[audioRef.current])


  return (
    <>
      <div className='d-flex justify-content-center align-items-center flex-column text-center navhead'>
        <SingleLectureNavbar handleShow={handleShow} lession={lesson && lesson.lesson_title}/>
        <h2 className='mt-1'>{lesson && lesson.lesson_title}</h2>
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-12 col-md-8 col-lg-6">
            {/* <ReactPlayer
              light="https://images.unsplash.com/photo-1542681575-352258e0c854?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              width={"100%"}
              height={!isMobile ? "500px" : "200px"}
              url={"https://file-examples.com/storage/fe644084cb644d3709528c4/2017/11/file_example_MP3_1MG.mp3"}
              controls
              config={{
                file: {
                  attributes: {
                    controlsList: 'nodownload'
                  }
                }
              }}
            /> */}

            <AudioPlayer
              ref={audioRef}
              src={lesson && lesson.lesson_file? lesson.lesson_file:"https://file-examples.com/storage/fe644084cb644d3709528c4/2017/11/file_example_MP3_1MG.mp3"}
              header={<Image src={lesson && lesson.image? lesson.image:'https://png.pngtree.com/template/20210823/ourmid/pngtree-music-album-cover-modern-style-color-sns-image_578891.jpg'} thumbnail />}
            // other props here
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

      <div className='container p-4 singlelecturebg'>
        <Stories data={lesson && lesson.lesson_comment}/>
        <LeaveCommentBox color={true} handleSubmit={postLessonComment}/>
      </div>
      <SingleLectureFooter setMarked={setMarked} marked={marked} setModalShow={openModal} />
      {
        marked && (
          <Confetti
            width={width}
            height={height}
            gravity={0.3}
            numberOfPieces={numofConfetti}
            tweenDuration={1000}
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
        <SidebarExample placement={"end"} show={show} handleClose={handleClose} course={course_id}/>
      </div>
    </>
  )
}

export default SingleLecturePage