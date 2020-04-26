import React from 'react';
import "./style.css";

function Homework(params) {
    return (
        <div className="workStation">
            <iframe id="doHomeworkFrame" src="./blocklyPages/pages/homework.html" frameBorder="1"></iframe>
        </div>


    );
}

export default Homework;