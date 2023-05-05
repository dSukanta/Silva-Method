import React, { useContext, useEffect, useRef, useState } from "react";
import { GoBook } from "react-icons/go";
import { IoMdContacts } from "react-icons/io";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import { TiTick } from "react-icons/ti";
import { AuthContext } from "../../context/AllContext";
import { GrDocumentLocked } from "react-icons/gr";
import { Link } from "react-router-dom";
import { BsShieldLock } from "react-icons/bs";

function MainHeroSection({ data }) {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 });
  const { userData } = useContext(AuthContext);
  // console.log(data && data);
  // const firstChapterId= data && data.chapters[0] && data?.chapters[0]?.chapter_id;
  // const firstLessonId= data && data.chapters[0] && data.chapters[0].lession && data.chapters[0].lession[0].lesson_id;

  console.log(data && data?.chapters[0]?.lession[0]?.lesson_id);

  return (
    <div className="row mx-2 mt-5">
      {isDesktopOrLaptop ? (
        <>
          <div className="col-sm-12 col-md-5">
            <h2 className="white-color">{data && data.course_title}</h2>
            <div className="">
              <div className="d-flex align-items-center gap-4 mb-3">
                <img
                  src={data && data.web_image}
                  alt=""
                  style={{
                    width: "80px",
                    height: "120px",
                    borderRadius: "15px",
                    objectFit: "cover",
                  }}
                />
                <div className="d-flex flex-column">
                  By
                  <span className="white-color" style={{ fontSize: "1.1rem" }}>
                    {data && data.teacher_id}
                  </span>
                  {/* <span className="text-muted" style={{ fontSize: "1.1rem" }}>
                    Founder and CEO of Mindvalley
                  </span> */}
                </div>
              </div>
              <div className="d-flex gap-4 white-color mt-4">
                <span style={{ fontSize: "1.1rem" }}>
                  <GoBook size={20} /> {data && data.total_lessons} Lessons
                </span>
                {/* <span style={{ fontSize: "1.1rem" }}>
                  <IoMdContacts size={20} /> 35,374 Enrolled
                </span> */}
              </div>
              {userData && userData.strip_payment_status !== null ? (
                <div className="d-flex justify-content-start align-items-center">
                  <TiTick size={25} color="white" />
                  <p
                    className="white-color mt-3"
                    style={{ fontSize: "1.1rem" }}
                  >
                    You Own This Program
                  </p>
                </div>
              ) : (
                <div>
                  <Link to={`/silva_membership`}>
                    <GrDocumentLocked />
                    <span className="white-color ms-2">
                      To view All Enroll to our Exciting Courses
                    </span>
                  </Link>
                </div>
              )}
              {userData && userData.strip_payment_status !== null && (
                <Link
                  to={`/store/course/${data && data?.course_id}/${
                    data && data?.chapters[0]?.chapter_id
                  }/${data && data?.chapters[0]?.lession[0]?.lesson_id}`}
                >
                  <button className="primary_btn2 mt-4">Start Program</button>
                </Link>
              )}
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <ReactPlayer
              width={"100%"}
              playing={true}
              height={"400px"}
              controls
              url={
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              }
            />
            {/* <Plyr ref={ref} source={{ type: 'video', sources: [{ src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }] }}
            autoPlay={true}
           /> */}
          </div>
        </>
      ) : (
        <>
          <div className="col-sm-12 col-md-7">
            <ReactPlayer
              width={"100%"}
              playing={true}
              height={"180px"}
              controls
              url={
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              }
            />
          </div>
          <div className="col-sm-12 col-md-5 mt-4 mb-5">
            <h2 className="white-color">{data && data.course_title}</h2>
            <div className="">
              <div className="d-flex align-items-center gap-4 mb-3">
                <img
                  src={data && data.web_image}
                  alt=""
                  style={{
                    width: "80px",
                    height: "120px",
                    borderRadius: "15px",
                    objectFit: "cover",
                  }}
                />
                <div className="d-flex flex-column">
                  {" "}
                  By
                  <span className="white-color" style={{ fontSize: "1.1rem" }}>
                    {data && data.teacher_id}
                  </span>
                  {/* <span className="text-muted" style={{ fontSize: "1.1rem" }}>
                    Founder and CEO of Mindvalley
                  </span> */}
                </div>
              </div>
              <div className="d-flex gap-4 white-color mt-4">
                <span style={{ fontSize: "1.1rem" }}>
                  <GoBook size={20} /> {data && data.total_lessons} Lessons
                </span>
                {/* <span style={{ fontSize: "1.1rem" }}>
                  <IoMdContacts size={20} /> 35,374 Enrolled
                </span> */}
              </div>
              {userData && userData.strip_payment_status !== null ? (
                <div className="d-flex justify-content-start align-items-center">
                  <TiTick size={25} color="white" />
                  <p
                    className="white-color mt-3"
                    style={{ fontSize: "1.1rem" }}
                  >
                    You Own This Program
                  </p>
                </div>
              ) : (
                <div>
                  <Link to={`/silva_membership`}>
                    <GrDocumentLocked />
                    <span className="white-color ms-2">
                      To view All Enroll to our Exciting Courses
                    </span>
                  </Link>
                </div>
              )}
              {userData && userData.strip_payment_status !== null && (
                <Link
                  to={`/store/course/${data && data?.course_id}/${
                    data && data?.chapters[0]?.chapter_id
                  }/${data && data?.chapters[0]?.lession[0]?.lesson_id}`}
                >
                  <button className="primary_btn2 mt-4">Start Program</button>
                </Link>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MainHeroSection;
