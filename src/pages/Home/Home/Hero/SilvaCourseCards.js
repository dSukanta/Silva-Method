import React, { useContext, useEffect, useState } from 'react'
import { Badge, Button, Card, ProgressBar } from 'react-bootstrap'
import { BsFillPersonFill } from "react-icons/bs";
import { baseUrl, requestData, requestData3 } from '../../../../utils/baseUrl';
import { useMediaQuery } from 'react-responsive';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import Slider from 'react-slick';
import { Link, useLocation } from 'react-router-dom';
import MoonLoader from "react-spinners/MoonLoader";
import LoggedInHeroSection from './LoggedInHeroSection';
import LoggedInHeroSection2 from './LoginHeroSection2';
import { AuthContext } from '../../../../context/AllContext';

function SilvaCourseCards() {
    const { userData, userToken } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1280px)' })
    const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 1279 })
    const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 })
    const [allCourses, setAllCourses] = useState([]);
    const [startedCourses, setStartedCourses] = useState([]);
    const [notStartedCourses, setnotStartedCourses] = useState([]);

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        prevArrow: <GrFormPrevious />,
        nextArrow: <GrFormNext />,
        slidesToShow: isDesktopOrLaptop ? 4 : isTablet ? 2 : 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: isDesktopOrLaptop ? '0%' : "10%",

    };

    const fetchAllCourses = async () => {
        setLoading(true);
        const res = await requestData3("courseListWithChild", "POST", {});
        setLoading(false);
        console.log(res, "resduta")

        if (!res) {
            return false;
        }
        let courses = []
        for (let course of res.data) {
            // let isCourseStarted=false;
            // let isCourseHasNotStarted = false;
            let allLessonsInCurrentCourse = [];
            course.chapters.forEach((chapter, i) => {
                const lessionsInSingleChapter = chapter.lession;
                allLessonsInCurrentCourse = [...allLessonsInCurrentCourse, ...lessionsInSingleChapter]
            })


            let numofcompleted = 0;
            let hasStarted = false;
            let isCourseCompleted = true
            allLessonsInCurrentCourse.forEach((ls, i) => {
                if (!ls.lesson_activity_status || ls.lesson_activity_status === "Started") {
                    isCourseCompleted = false
                }
                if (ls.lesson_activity_status) {
                    hasStarted = true
                }
                if (ls.lesson_activity_status === "Completed" && ls.lesson_activity_duration) {
                    console.log("started")
                    ++numofcompleted
                }
            })


            courses.push({
                courseData: course,
                isCourseStarted: isCourseCompleted ? false : hasStarted,
                isCourseCompleted,
                numofcompleted
            })
        }

        const coursesNotStarted = courses.filter((cc, i) => cc.isCourseStarted === false);
        const coursesStarted = courses.filter((cc, i) => cc.isCourseStarted === true);

        setStartedCourses(coursesStarted);
        setnotStartedCourses(coursesNotStarted);
        setAllCourses(courses);

        console.log(courses, "courses")
        // setAllCourses(res.data);
    }

    useEffect(() => {
        // setTimeout(()=>{
        //     fetchAllCourses()
        // },5000)
        fetchAllCourses()
    }, [])

    if (loading) {
        return (
            <div style={{ height: "100%" }}>
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
        <div className={`mb-5 mt-5 ${isDesktopOrLaptop ? 'container' : ''}`}>
            <div className="row justify-content-center coursesslider">
                <LoggedInHeroSection2 text={"New Courses"} />

                <Slider {...settings}>
                    {
                        allCourses.map((allc, i) => (

                            <div className="col-sm-6 col-md-4 py-4 px-2">
                                <Link to={`/store/course/${allc.courseData.course_id}/`}>
                                    <Card className="text-start cardbody" style={{ borderRadius: "20px", width: "97%", height: "500px" }}>
                                        <Card.Header className='bg-transparent'
                                            style={{ borderBottom: "none", minHeight: "100px" }}
                                        >
                                            <div className='d-flex justify-content-start flex-column align-content-center gap-3 mt-3'>
                                                <h5><Badge bg="dark">New</Badge></h5>
                                                <h6 className='text-dark'>Your Program is Ready 🎉</h6>
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Img style={{ width: "100%", height: isDesktopOrLaptop ? "200px" : "150px" }} src={allc.courseData.web_image} />
                                            <div className='d-flex justify-content-between align-items-center pt-4'>
                                                <div className='d-flex flex-column'>
                                                    <Card.Text className='text-dark'>
                                                        {allc.courseData.course_title} <br /> {allc.courseData.teacher_name}
                                                    </Card.Text>
                                                </div>
                                                {/* <GrFormNext size={30} /> */}

                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="bg-transparent d-flex justify-content-start gap-3">
                                            <span style={{ color: "black", fontWeight: "600" }}>
                                                Total Chapters: {allc.courseData.total_chapters}
                                            </span>
                                            <span style={{ color: "black", fontWeight: "600" }}>
                                                Total Lessons: {allc.courseData.total_lessons}
                                            </span>

                                        </Card.Footer>
                                    </Card>
                                </Link>
                            </div>

                        ))
                    }
                </Slider>

                {/*  */}


                {/*  */}


            </div>


            {/*  */}

            <div className="row justify-content-center coursesslider">
                <LoggedInHeroSection2 text={"Courses Yet to Start"} />

                <Slider {...settings}>

                    {
                        notStartedCourses.map((allc, i) => (

                            <div className="col-sm-6 col-md-4 py-4 px-2">
                                <Link to={`/store/course/${allc.courseData.course_id}/`}>
                                    <Card className="text-start cardbody" style={{ borderRadius: "20px", width: "97%", height: "500px" }}>
                                        <Card.Header className='bg-transparent'
                                            style={{ borderBottom: "none", minHeight: "100px" }}
                                        >
                                            <div className='d-flex justify-content-start flex-column align-content-center gap-3 mt-3'>
                                                <h5><Badge bg="dark">New</Badge></h5>
                                                <h6 className='text-dark'>Your Program is Ready 🎉</h6>
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Img style={{ width: "100%", height: isDesktopOrLaptop ? "200px" : "150px" }} src={allc.courseData.web_image} />
                                            <div className='d-flex justify-content-between align-items-center pt-4'>
                                                <div className='d-flex flex-column'>
                                                    <Card.Text className='text-dark'>
                                                        {allc.courseData.course_title} <br /> {allc.courseData.teacher_name}
                                                    </Card.Text>
                                                </div>
                                                {/* <GrFormNext size={30} /> */}

                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="bg-transparent d-flex justify-content-start gap-3">
                                            <span style={{ color: "black", fontWeight: "600" }}>
                                                Total Chapters: {allc.courseData.total_chapters}
                                            </span>
                                            <span style={{ color: "black", fontWeight: "600" }}>
                                                Total Lessons: {allc.courseData.total_lessons}
                                            </span>

                                        </Card.Footer>
                                    </Card>
                                </Link>
                            </div>

                        ))
                    }
                </Slider>

                {/*  */}


                {/*  */}


            </div>
            {/*  */}

            {/*  */}
            <div className="row justify-content-center coursesslider">
                <LoggedInHeroSection2 text={"Ongoing Courses"} />

                <Slider {...settings}>
                    {
                        startedCourses.map((sc, i) => (
                            <div className="col-5 py-4">
                                <Link to={`/store/course/${sc.courseData.course_id}/`}>
                                    <Card className="text-start py-2 cardbody" style={{ borderRadius: "20px", width: "97%", height: "550px" }}>
                                        <Card.Header className='bg-transparent'
                                            style={{ borderBottom: "none" }}
                                        >
                                            <div className='d-flex justify-content-start flex-column align-items-center gap-3'>
                                                <div className=''>
                                                    <h5 className='text-dark'>
                                                        {sc.courseData.course_title}
                                                    </h5>
                                                    <p>
                                                        {sc.numofcompleted} of {sc.courseData.total_lessons} Lessons Completed
                                                    </p>

                                                    <ProgressBar variant="warning" now={Math.floor((parseInt(sc.numofcompleted) / sc.courseData.total_lessons) * 100)} />

                                                </div>
                                                {/* <GrFormNext size={30} /> */}
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card.Img style={{ width: "100%", height: isDesktopOrLaptop ? "200px" : "150px" }} src={sc.courseData.web_image} />
                                            <div className='d-flex justify-content-between align-items-center pt-4'>
                                                <div className='d-flex flex-column'>
                                                    <Card.Text className='text-dark'>
                                                        <br /> {sc.courseData.teacher_name}
                                                    </Card.Text>
                                                </div>
                                                {/* <GrFormNext size={30} /> */}

                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="bg-transparent d-flex justify-content-between gap-2">
                                            <span style={{ color: "black", fontWeight: "400" }}>
                                                Total Chapters: {sc.courseData.total_chapters}
                                            </span>
                                            <span style={{ color: "black", fontWeight: "400" }}>
                                                Total Lessons: {sc.courseData.total_lessons}
                                            </span>

                                        </Card.Footer>
                                    </Card>
                                </Link>
                            </div>
                        ))
                    }
                </Slider>

                {/*  */}


                {/*  */}


            </div>
            {/*  */}
        </div>
    )
}

export default SilvaCourseCards