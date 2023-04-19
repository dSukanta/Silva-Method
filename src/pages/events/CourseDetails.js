import React from 'react'
import {Route, Link, Routes, useParams} from 'react-router-dom';

function CourseDetails() {
    const params = useParams();
    console.log(params);

  return (
    <>
        <h1>Course Details</h1>
    </>
  )
}

export default CourseDetails