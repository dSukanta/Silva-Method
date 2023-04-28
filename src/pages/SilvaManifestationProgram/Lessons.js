import React, { useEffect, useState } from "react";
import CustomAccordion from "./CustomAccordion";
import { useParams } from "react-router-dom";

function Lessons() {
  const { id } = useParams();
  //console.log(id);

  const [course, setCourse] = useState([]);

  const getCourses = async () => {
    const myHeaders = new Headers();
    myHeaders.append("ApiKey", "40bb9d38c66e40a86678979286f4e2b5");
    myHeaders.append("Device", "Android");
    myHeaders.append("Language", "english");

    const formData = new FormData();
    formData.append("course_id", id);
    // formData.append("no_of_records", "100");

    const options = {
      method: "POST",
      headers: myHeaders,
      body: formData,
    };
    const res = await fetch(
      `https://projectsites.in/silvamethod/api/courseDetail`,
      options
    );
    const data = await res.json();
    //console.log(data.data.classes);
    setCourse(data.data);
  };

  useEffect(() => {
    getCourses();
  }, [id]);

  //console.log(course);

  return (
    <div className="mt-3">
        {course.length>0 && course[0].chapters.map((chapter)=>
            <CustomAccordion data={chapter}/>
        )}
      {/* <CustomAccordion /> */}
      {/* <CustomAccordion />
           <CustomAccordion />
           <CustomAccordion />
           <CustomAccordion />
           <CustomAccordion /> */}
    </div>
  );
}

export default Lessons;
