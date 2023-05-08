import React, { useState, useEffect } from "react";
import { Image, Offcanvas, ProgressBar } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { BsCheckCircleFill } from "react-icons/bs";
import { requestData } from "../../../utils/baseUrl";
import { useNavigate, useParams } from "react-router-dom";

function SidebarExample({chapters, show,handleClose, lession, lessonDetails, ...props }) {
  //console.log(props);
  const completed = 3;
  const params = useParams()
  // const [allLessonList,setallLessonList] = useState([]);
  const navigate = useNavigate();
  //const { lession_id } = useParams();

  //console.log(lession_id);

  // const getChapters = async () => {
  //   const res = await requestData("courseDetail", "POST", {
  //     course_id: params.course_id,
  //   });
  //   console.log("ressss",res)
  //   //console.log(res.data[0].chapters)
  //   setChapters(res.data[0].chapters);
  // };

  // useEffect(() => {
  //   getChapters();
  // }, []);

  // useEffect(()=>{
  //   getLessonList()
  // },[chapters])

  async function getLessonList(){
    // const foundCourse = chapters.find((val, i) => {
    //   if (val.course_id === params.course_id) {
    //     return val;
    //   }
    // })

    let allLessonsInCurrentCourse = [];

   
      chapters.forEach((chapter, i) => {
        const lessionsInSingleChapter = chapter.lession;
        allLessonsInCurrentCourse = [...allLessonsInCurrentCourse, ...lessionsInSingleChapter]
      })

      // setallLessonList(allLessonsInCurrentCourse)
      console.log(allLessonsInCurrentCourse,"ALLCOURSELIST")
  }


  // useEffect(()=>{
  //    fetchLessonDetails()
  // },[allLessonList])

  // async function fetchLessonDetails(){
  //   if(allLessonList && allLessonList.length>0){
  //     let promisesArr = [];
  //     for(let l of allLessonList){
  //       promisesArr.push(requestData("lessonDetails","POST",{
  //        lesson_id:l.lesson_id
  //       }))
  //     }

  //     let newres = await Promise.all(promisesArr)
  //     newres = newres.map((list,i)=>{
  //       return list.data
  //     })
  //     console.log(newres,"ALLCOURSELIST")
  //   }
  // }


  return (
    <Offcanvas show={show} onHide={handleClose} {...props} responsive="lg">
      <Offcanvas.Header className="d-flex justify-content-end">
        <AiOutlineClose size={30} color="white" onClick={handleClose} />
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="mt-3">
          {chapters.map((chapter, i) => (
            <div>
              {chapter.lession.length > 0 && (
                <div style={{ width: "100%" }}>
                  <ProgressBar
                    now={(100 * completed) / chapter.lession.length}
                  />
                  <h6 className="mt-3 white-color">
                    {completed} / {chapter.lession.length} Lessons completed
                  </h6>
                </div>
              )}
              <p className="text-start white-color">
                {chapter.chapter_title} <br />
              </p>
              {chapter.lession.map((lessionItem, i) => (
                <div
                  className={`d-flex justify-content-between align-items-center align-content-center mb-4 activehoverdiv ${lession?.lesson_title === lessionItem?.lesson_title ? 'activediv' : ''}`}
                  onClick={() => {
                    navigate(
                      `/store/course/${props.course}/${lessionItem.chapter_id}/${lessionItem.lesson_id}`
                    );
                    //window.location.reload();
                  }}
                >
                  <img
                    src={
                      lessionItem.image
                        ? lessionItem.image
                        : "https://png.pngtree.com/template/20210823/ourmid/pngtree-music-album-cover-modern-style-color-sns-image_578891.jpg"
                    }
                    style={{ width: "80px", height: "100%" }}
                  />
                  <div className="d-flex flex-column align-items-center justify-content-center mx-3">
                    <a
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={lessionItem.lesson_title}
                      data-tooltip-place="top"
                      data-tooltip-variant="light"
                    >
                      <p
                        className="white-color"
                        style={{ wordBreak: "break-word" }}
                      >
                        {lessionItem.lesson_title.substring(0, 20)}
                      </p>
                    </a>
                    {/* <p className='white-color'>{value.duration}</p> */}
                  </div>
                  {
                    true ? (
                      <BsCheckCircleFill size={30} color={"green"} onClick={()=>{
                        console.log(lessionItem)
                      }} />
                    ) : (
                      <span className='white-color' style={{ fontSize: "1.2rem" }}>{" < "}</span>
                    )
                  }
                </div>
              ))}
              <hr />
            </div>
          ))}
        </div>
      </Offcanvas.Body>
      <Tooltip id="my-tooltip" />
    </Offcanvas>
  );
}

export default SidebarExample;
