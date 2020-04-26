import React from 'react';
import "./style.css"

function SetToolBox(params) {
    return (
        <div className={"workStation"+" "+params.classType}>
            <iframe src="./blocklyPages/pages/setToolBox.html" frameBorder="1"></iframe>
        </div>
    );
}

export default SetToolBox;