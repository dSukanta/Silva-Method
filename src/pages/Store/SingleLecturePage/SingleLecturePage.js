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
import { useParams, useNavigate, useLocation } from 'react-router'
import toast, { Toaster } from "react-hot-toast";
import { Document } from "react-pdf";
import MoonLoader from "react-spinners/MoonLoader";


function SingleLecturePage() {
  const [chapters, setChapters] = useState([]);
  const [loading,setLoading] = useState(false)
  const [pages, setPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [hasNext, setHasNext] = useState(true)
  const [lessonDetails, setLessonDetails] = useState({});
  const location = useLocation()
  const navigate = useNavigate();
  const params = useParams();
  const audioRef = useRef();
  const [allCoursesList, setAllCoursesList] = useState([]);
  const { course_id, chapter_id, lession_id } = useParams();
  //console.log(course_id, chapter_id,lession_id);
  const [lesson, setLesson] = useState({});


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
    setNumOfConfetti(300)
    setIsOpen(true);
  }

  function closeModal() {
    setNumOfConfetti(0)
    setIsOpen(false);
  }


  // useEffect(() => {
  //   if (marked) {
  //     setTimeout(() => {
  //       setNumOfConfetti(0)
  //     }, 4000)
  //   }
  // }, [marked])

  const getLessonComments = async () => {

    // const res = await requestData('courseDetail', 'POST', {
    //   "course_id": course_id,
    // })

    // console.log(res.data, "Resdata")
    fetchLessonDetails(params.lession_id);

    //console.log(res?.data[0]?.chapters?.filter((chapter)=> chapter.chapter_id ===chapter_id)[0]?.lession.filter((lessionItem)=>lessionItem.lesson_id===lession_id)[0]);
    // setLesson(res?.data[0]?.chapters?.filter((chapter) => chapter.chapter_id === chapter_id)[0]?.lession.filter((lessionItem) => lessionItem.lesson_id === lession_id)[0])
    //console.log(res?.data[0]?.chapters?.filter((chapter)=> chapter.chapter_id ===chapter_id)[0]?.lession.filter((lessionItem)=>lessionItem.lesson_id===lession_id)[0]?.lesson_comment);
    //setlessionComment(res?.data[0]?.chapters?.filter((chapter)=> chapter.chapter_id ===chapter_id)[0]?.lession.filter((lessionItem)=>lessionItem.lesson_id===lession_id)[0]?.lesson_comment)
  }

  useEffect(() => {
    getLessonComments()
  }, [location.pathname])

  console.log(lesson);

  const postLessonComment = async (e, data) => {
    e.preventDefault();
    const options = {
      "lesson_id": lession_id,
      "comment": data.comment,
      "name": data.name,
      "email": data.email,
    }
    try {
      const res = await requestData("lessonComment", "POST", options)
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


  const fetchAllCourses = async () => {
    const res = await requestData("courseListWithChild", "POST", { start_index: 0 });
    console.log(res, "resduta")
    setAllCoursesList(res.data);
  }

  
  const getChapters = async () => {
    const res = await requestData("courseDetail", "POST", {
      course_id: params.course_id,
    });
    console.log("ressss",res)
    //console.log(res.data[0].chapters)
    setChapters(res.data[0].chapters);
  };

  const handleNext = () => {

    // all lessons in current course list

    console.log(allCoursesList);
    console.log(params)
    console.log(lesson)
    const foundCourse = allCoursesList.find((val, i) => {
      if (val.course_id === params.course_id) {
        return val;
      }
    })



    let allLessonsInCurrentCourse = [];

    foundCourse.chapters.forEach((chapter, i) => {
      const lessionsInSingleChapter = chapter.lession;
      allLessonsInCurrentCourse = [...allLessonsInCurrentCourse, ...lessionsInSingleChapter]
    })

    console.log(allLessonsInCurrentCourse)


    // all lessons


    // 
    let nextLesson;
    let prevLesson;
    allLessonsInCurrentCourse.forEach((val, i) => {
      if (val.lesson_id === params.lession_id) {
        nextLesson = i + 1;
        prevLesson = i - 1;
      }
    })

    console.log(allLessonsInCurrentCourse[nextLesson], "NEXTLESSON")

    if (allLessonsInCurrentCourse[nextLesson]) {
      closeModal();
      navigate(`/store/course/${params.course_id}/${allLessonsInCurrentCourse[nextLesson].chapter_id}/${allLessonsInCurrentCourse[nextLesson].lesson_id}`)
    } else {
      closeModal();
      navigate(`/store/course/${params.course_id}/${allLessonsInCurrentCourse[prevLesson].chapter_id}/${allLessonsInCurrentCourse[prevLesson].lesson_id}`)
    }

  }


  const hasNextRender = async () => {
    const foundCourse = allCoursesList.find((val, i) => {
      if (val.course_id === params.course_id) {
        return val;
      }
    })


    let allLessonsInCurrentCourse = [];

    if (foundCourse && Object.keys(foundCourse).length) {
      foundCourse.chapters.forEach((chapter, i) => {
        const lessionsInSingleChapter = chapter.lession;
        allLessonsInCurrentCourse = [...allLessonsInCurrentCourse, ...lessionsInSingleChapter]
      })
    }

    console.log(allLessonsInCurrentCourse, "ALLCOURSELIST")

    // all lessons


    // 
    let nextLesson;
    let prevLesson;
    allLessonsInCurrentCourse.forEach((val, i) => {
      if (val.lesson_id === params.lession_id) {
        nextLesson = i + 1;
        prevLesson = i - 1;
      }
    })

    console.log(allLessonsInCurrentCourse[nextLesson], "hasNext")

    if (allLessonsInCurrentCourse[nextLesson]) {
      setHasNext(true)
    } else {
      setHasNext(false)
    }
  }




  useEffect(() => {
    document.querySelector(".navhead").scrollIntoView({
      behavior: "smooth"
    })

    // if (audioRef.current) {
    //   audioRef.current.audio.current.currentTime = 200
    // }
    getChapters()
    fetchAllCourses()
    fetchLessonDetails(params.lession_id)

  }, [])

  useEffect(() => {
    hasNextRender()
  }, [location.pathname])



  const handleAudioDuration = async (d) => {
    const duration = Math.floor(d);
    const h = Math.floor(duration / 3600);
    const m = Math.floor((duration - h * 3600) / 60);
    const s = duration % 60;
    const H = h === 0 ? '' : `${h}:`;
    const M = m < 10 ? `0${m}:` : `${m}:`;
    const S = s < 10 ? `0${s}` : `${s}`;
    const dur = H + M + S
    console.log(dur, "duration")
    const res = await requestData("lessonActivity", "POST", {
      chapter_id: params.chapter_id,
      lesson_id: params.lession_id,
      status: "Started",
      duration: dur
    })

    if (res && res.error === false) {
      console.log("success api call", res)
    }

  }

  const handleAudioDuration2 = async (d) => {
    const duration = Math.floor(d);
    const h = Math.floor(duration / 3600);
    const m = Math.floor((duration - h * 3600) / 60);
    const s = duration % 60;
    const H = h === 0 ? '' : `${h}:`;
    const M = m < 10 ? `0${m}:` : `${m}:`;
    const S = s < 10 ? `0${s}` : `${s}`;
    const dur = H + M + S
    console.log(dur, "duration")

    if (lessonDetails && lessonDetails.lesson_activity_status !== "Completed") {
      const res = await requestData("lessonActivity", "POST", {
        chapter_id: params.chapter_id,
        lesson_id: params.lession_id,
        status: "Completed",
        duration: dur
      })
      if (res && res.error === false) {
        console.log("success api call", res)
      }
      fetchLessonDetails(params.lession_id)
    }


  }

  async function fetchLessonDetails(lession_id) {
    setLoading(true)
    const res = await requestData("lessonDetails", "POST", {
      lesson_id: lession_id
    })
    setLoading(false)

    if (res && res.error === false) {
      setLessonDetails(res.data[0])
      setLesson(res.data[0])
    }
    console.log(res, "lessondetails")
  }




  useEffect(() => {
    if (lessonDetails) {
      if (lessonDetails.lesson_activity_status === "Completed") {
        setMarked(true)
      } else {
        setMarked(false)
      }
    }
  }, [lessonDetails])


  useEffect(() => {
    console.log("lesson", lesson.lesson_file)
  }, [lesson])


  if(loading){
    return (
      <div style={{height:"100%"}}>
        <div className='d-flex justify-content-center align-content-center align-items-center'>
        <MoonLoader
        color='black'
        size={150}
        />
      </div>
      </div>
    )
  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center flex-column text-center navhead mx-4 my-4'>
        <SingleLectureNavbar handleShow={handleShow} lession={lesson && lesson.lesson_title} />
        <h2 className='mt-1'>{lesson && lesson.lesson_title}</h2>
        <div className="row justify-content-center align-items-center">
          <div className="col-sm-12 col-md-8 col-lg-6">

            {
              lesson && Object.keys(lesson).length > 0 && lesson.lesson_file && lesson.lesson_file.split(".").slice(-1)[0] === "mp3" && (
                <AudioPlayer
                  ref={audioRef}
                  autoPlay={false}
                  // onListen={(e)=>{
                  //   console.log(audioRef.current.audio.current.currentTime)
                  //   handleAudioDuration(audioRef.current.audio.current.currentTime)
                  //   console.log(audioRef.current.audio.current.duration)
                  // }}
                  onPause={() => {
                    console.log("Paused")
                    if(audioRef.current){
                      if (audioRef.current?.audio?.current.currentTime !== audioRef?.current?.audio.current.duration) {
                        handleAudioDuration(audioRef.current.audio.current.currentTime)
                      }
                    }
                  }}
                  onEnded={() => {
                    // setMarked(true)
                    openModal()
                    handleAudioDuration2(audioRef.current.audio.current.duration)
                  }}
                  autoPlayAfterSrcChange={false}
                  src={lesson && lesson.lesson_file ? lesson.lesson_file : "https://samplelib.com/lib/preview/mp3/sample-15s.mp3"}
                  header={<Image src={lesson && lesson.image ? lesson.image : 'https://png.pngtree.com/template/20210823/ourmid/pngtree-music-album-cover-modern-style-color-sns-image_578891.jpg'} thumbnail />}
                // other props here
                />

              )
            }

            {
              lesson && Object.keys(lesson).length > 0 && lesson.lesson_file && lesson.lesson_file.split(".").slice(-1)[0] === "pdf" && (
                <div className='mt-3' onContextMenu={(e)=>{
                  e.preventDefault()
                  return false
                }}>
                  {/* <h2>{JSON.stringify(lesson.lesson_file.replace(/\s/g, "%"))}</h2> */}
                  {/* <Document
                    file={{
                      url: 'https://projectsites.in/silvamethod/assets/uploads/0.Silva%20Mind%20Body%20Healing%20Program.pdf'
                    }}
                  /> */}
                  <embed onContextMenu={(e)=>{
                    e.preventDefault()
                    return false
                  }} src={`${lesson.lesson_file}#toolbar=0&navpanes=0&scrollbar=0`} style={{width:"100%",height:"500px"}}></embed>
                  {/* <object width="100%" height="600" data={lesson.lesson_file} type="application/pdf">   </object> */}
                </div>
              )
            }



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
        <Stories data={lesson && lesson.lesson_comment} />
        <LeaveCommentBox color={true} handleSubmit={postLessonComment} />
      </div>
      <SingleLectureFooter
        fetchLessonDetails={fetchLessonDetails} lesson={lesson}
        lessonDetails={lessonDetails} openModal={openModal} handleAudioDuration2={handleAudioDuration2}
        audioRef={audioRef} setMarked={setMarked} marked={marked} setModalShow={openModal} />
      {
        (marked && modalIsOpen) && (
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
          hasNext={hasNext}
          handleNext={handleNext}
          show={modalIsOpen}
          openModal={openModal}
          closeModal={closeModal}
          setModalShow={setIsOpen}
        />
      }
      <div className="offcan">
        <SidebarExample chapters={chapters} placement={"end"} show={show} lessonDetails={lessonDetails} lession={lesson} handleClose={handleClose} course={course_id} />
      </div>
    </>
  )
}

export default SingleLecturePage