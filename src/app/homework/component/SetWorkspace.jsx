import React from 'react';
import "./style.css"

function SetWorkspace(params) {
    return (
        <div className={"workStation"+" "+params.classType}>
            <iframe src="./blocklyPages/pages/setWorkspace.html" frameBorder="1"></iframe>
        </div>
    );
}

export default SetWorkspace;