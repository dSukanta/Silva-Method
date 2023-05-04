import React, { useState, useEffect } from "react";
import { Image, Offcanvas, ProgressBar } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
import { BsCheckCircleFill } from "react-icons/bs";
import { requestData } from "../../../utils/baseUrl";
import { useNavigate, useParams } from "react-router-dom";

function SidebarExample({ show, handleClose, ...props }) {
  //console.log(props);
  const completed = 3;
  const [chapters, setChapters] = useState([]);
  const navigate = useNavigate();
  //const { lession_id } = useParams();

  //console.log(lession_id);

  const getChapters = async () => {
    const res = await requestData("courseDetail", "POST", {
      course_id: props && props.course,
    });
    //console.log(res.data[0].chapters)
    setChapters(res.data[0].chapters);
  };

  useEffect(() => {
    getChapters();
  }, []);

  const data = [
    {
      title: "Preparation",
      completed: "3 / 3",
      lessons: [
        {
          title: "Intro 1 - Blah Blah Blah",
          img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
          duration: "10 mins",
          completed: true,
        },
        {
          title: "Intro 2 - Blah Blah Blah",
          img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
          duration: "15 mins",
          completed: true,
        },
        {
          title: "Intro 3 - Blah Blah Blah",
          img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
          duration: "12 mins",
          completed: true,
        },
      ],
    },
    {
      title: "The Six Phase Medication",
      completed: "2 / 7",
      lessons: [
        {
          title: "Intro 1 - Blah Blah Blah",
          img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
          duration: "10 mins",
          completed: true,
        },
        {
          title: "Intro 2 - Blah Blah Blah",
          img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
          duration: "15 mins",
          completed: true,
        },
        {
          title: "Intro 3 - Blah Blah Blah",
          img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
          duration: "4 mins",
          completed: false,
        },
        {
          title: "Intro 4 - Blah Blah Blah",
          img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
          duration: "5 mins",
          completed: false,
        },
        {
          title: "Intro 5 - Blah Blah Blah",
          img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
          duration: "20 mins",
          completed: false,
        },
        {
          title: "Intro 6 - Blah Blah Blah bah",
          img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
          duration: "10 mins",
          completed: false,
        },
        {
          title: "Intro 7 - Blah Blah Blah",
          img: "https://assets.mindvalley.com/api/v1/assets/c6cfed91-b485-43fc-9284-098f77dde4ff.jpg?transform=q_90,w_160,c_fill",
          duration: "8 mins",
          completed: false,
        },
      ],
    },
  ];
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
                  className="d-flex justify-content-between align-items-center align-content-center mb-4 activediv"
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
                        : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    }
                    style={{ width: "120px", height: "100%" }}
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
                  {/* {
                                                value.completed ? (
                                                    <BsCheckCircleFill size={30} color={"green"} />
                                                ) : (
                                                    <span className='white-color' style={{ fontSize: "1.2rem" }}>{" < "}</span>
                                                )
                                            } */}
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
