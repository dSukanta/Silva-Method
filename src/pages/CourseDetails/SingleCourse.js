import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const SingleCourse = ({ data }) => {
  //console.log(data);

  const { web_image, course_id, course_title, teacher_id, teacher_name } = data;

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1280px)" });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 });

  return (
    <>
      <Link to={`/store/course/${course_id}`}>
        <div className="course-card course-item-card card-block">
          <img src={web_image} alt="Photo of sunset" />
          <p className="pt-2">{teacher_name}</p>

          <h5 className="course-item-card-title mt-2 mb-3">{course_title}</h5>
        </div>
      </Link>
    </>
  );
};

export default SingleCourse;
