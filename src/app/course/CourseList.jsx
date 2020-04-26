import React from 'react';
import "./style.css";
import { BrowserRouter as Router, Route, Link, useRouteMatch, Switch } from "react-router-dom";
function CourseList() {
    let { url } = useRouteMatch();
    return (
        <div>
            <div>
                <Link to={`/courseMain/course1`}>
                    <div className="courseBlock">
                        <div className="innerBlock"></div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CourseList;
