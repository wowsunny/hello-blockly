import React from 'react';
import { useParams } from "react-router-dom";
function CoursePage() {
    let {courseId} = useParams();
    console.log(courseId);
    
    return (
        <h1>{courseId}</h1>
    )
}

export default CoursePage;