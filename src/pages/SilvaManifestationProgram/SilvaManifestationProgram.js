import React, { useContext, useEffect, useRef, useState } from "react";
import StickyNavbar from "./StickyNavbar";
import MainHeroSection from "./MainHeroSection";
import MainTabs from "./MainTabs";
import LeaveCommentBox from "./LeaveCommentBox";
import SocialShareButtons from "./SocialShareButtons";
import { useParams } from "react-router-dom";
import { requestData } from "../../utils/baseUrl";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../context/AllContext";

function SilvaManifestationProgram() {
  const { userData } = useContext(AuthContext)

  window.addEventListener("scroll", function () {
    console.log("scrolling");
  });

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

  const postCourseComment = async (e, data) => {
    e.preventDefault();
    const options = {
      course_id: id,
      comment: data.comment,
      name: data.name,
      email: data.email,
      website: data.website ? data.website : "",
    };
    console.log(userData);
    if(userData==null || userData.strip_payment_status!=="paid"){
      toast.error("Sorry! Only Registered Members Can Comment.", {
        position: "top-center",
      });
    }else{
      try {
        const res = await requestData("CourseComment", "POST", options);
        //console.log(res);
        toast.success(
          "Hey there! We have received your comment.Thanks for your valuable comment 🙂",
          {
            position: "top-center",
          }
        );
        getCourses();
      } catch (error) {
        //console.log(error);
        toast.error("Something went wrong ! Please try after some time.", {
          position: "top-center",
        });
      }
    }
    
    //console.log(options)
  };

  // console.log(course);


  useEffect(()=>{
    document.querySelector(".nothing").scrollIntoView({
      behavior:"smooth"
    })
  },[])

  return (
    <div
      className="mainlandingpage"
      style={{ width: "100vw", minHeight: "100vh", paddingBottom: "20px" }}
    >
      <div className="nothing"></div>
      <StickyNavbar />
      <div className="container">
        <MainHeroSection data={course.length > 0 && course[0]}/>
        <MainTabs data={course.length > 0 ? course[0]:{}} />
       { (userData!==null || userData?.strip_payment_status=="paid") && <LeaveCommentBox handleSubmit={postCourseComment} />}
        <SocialShareButtons />
      </div>
    </div>
  );
}

export default SilvaManifestationProgram;
