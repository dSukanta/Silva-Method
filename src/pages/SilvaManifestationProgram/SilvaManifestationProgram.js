import React, { useEffect, useRef, useState } from 'react'
import StickyNavbar from './StickyNavbar'
import MainHeroSection from './MainHeroSection'
import MainTabs from './MainTabs'
import LeaveCommentBox from './LeaveCommentBox'
import SocialShareButtons from './SocialShareButtons'
import { useParams } from 'react-router-dom'

function SilvaManifestationProgram() {
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

 // console.log(course);

    return (
        <div className="mainlandingpage" style={{ width: "100vw",minHeight:"100vh",paddingBottom:"20px" }}>
                <StickyNavbar />
            <div className='container'>
                <MainHeroSection />
                <MainTabs data={course.length>0 && course[0]}/>
                <LeaveCommentBox data={course.length>0 && course[0]}/>
                <SocialShareButtons />
            </div>
            
        </div>

    )
}

export default SilvaManifestationProgram;
