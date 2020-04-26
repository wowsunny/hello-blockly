import React from 'react';
import { BrowserRouter as Router, Route, Link, useRouteMatch, Switch, useParams } from "react-router-dom";
import CourseList from './CourseList';
import CoursePage from './CoursePage';

function CourseMain() {
    let { path, url } = useRouteMatch();

    return (

        <div>
            <Router>
                <ul>
                    <li>
                        <Link to={`${url}`}>CourseList</Link>
                    </li>

                </ul>

                <Switch>
                    <Route path={`${path}`} exact component={CourseList} />
                    <Route path={`${path}/:courseId`} component={CoursePage} />
                </Switch>
            </Router>
        </div>

    )
}

export default CourseMain;
