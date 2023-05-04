import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { TiTickOutline } from "react-icons/ti";
import { requestData } from "../../../utils/baseUrl";
import { useNavigate } from "react-router-dom";

function SingleLectureFooter({
  setMarked,
  marked,
  setModalShow,
  lession_id,
  chapter_id,
  course_id,
}) {
    const navigate= useNavigate();
  const [chapters,setChapters] = useState([]);
  const [currentLesson,setCurrentLesson]= useState(0);
  const [currentChapter,setCurrentChapter]= useState(0);


  const getLessions = async () => {
    const res = await requestData("courseDetail", "POST", {
      course_id: course_id,
    });
   // console.log(res.data[0].chapters);
   setChapters(res.data[0].chapters)
  };

  useEffect(() => {
    getLessions();
  }, []);

 // let i=0 ; let j=0;

  //let currentChapter = 0;
// let currentLesson = 0;

function next(){
    console.log("function running");
    let currentlessonslength = chapters[currentChapter].lession.length-1;
    if(currentLesson+1>currentlessonslength){
        if(chapters[currentChapter+1].lession[0]){
            setCurrentChapter(++currentChapter)
            setCurrentLesson(0)
        }
    }else{
        setCurrentLesson(++currentLesson)
    }
}

function prev(){
    if(currentLesson!==0){
       setCurrentLesson( --currentLesson)
    }else{
       let currentlessonslength = chapters[currentChapter-1].lession.length-1;
       if(currentlessonslength){
           if(chapters[currentChapter-1].lession[currentlessonslength]){
           setCurrentChapter(--currentChapter)
           setCurrentLesson(currentlessonslength)
       }
       }
    }
}


  return (
    <Navbar>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-between">
        <Navbar.Text className="mx-5 text-dark" onClick={prev}>
          <GrLinkPrevious style={{ marginRight: "10px" }} size={25} /> Previous
        </Navbar.Text>
        {/* {!marked && (
          <button
            className="primary_btn2"
            onClick={() => {
              setMarked(true);
              setModalShow();
            }}
          >
            Mark As Complete
          </button>
        )}
        {marked && (
          <h4 className="text-success">
            <TiTickOutline color="green" /> Completed
          </h4>
        )} */}
        <Navbar.Text className="mx-5 text-dark" onClick={next}>
          Next <GrLinkNext style={{ marginLeft: "10px" }} size={25}/>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default SingleLectureFooter;
