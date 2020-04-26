import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SetHomework from "app/homework/SetHomework";
import DoHomework from "app/homework/DoHomework";
import HomePage from "app/homepage/HomePage";
import LoginMain from "app/login/main";
import CourseMain from 'app/course/main';
function App() {
    return (
        <Router>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/set" component={SetHomework}></Route>
            <Route path="/do" component={DoHomework}></Route>
            <Route path="/loginMain"  component={LoginMain}></Route>
            <Route path="/courseMain" component={CourseMain}></Route>
        </Router>

    )
}

export default App;