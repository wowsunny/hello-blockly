import React from 'react';
import Homework from './component/Homework';
import { Link } from 'react-router-dom';


function DoHomework(params) {
    return (
        <div>
            <Homework />
            <Link to="/">
                <button>back to homepage</button>
            </Link>
            <button onClick={(e) => {
                console.log(window.sendData);
                //必须是iframe加载完成后才可以向子域发送数据
                const childFrameObj = document.getElementById('doHomeworkFrame');
                childFrameObj.contentWindow.postMessage(window.sendData, '*'); //window.postMessage                
            }}>get postData</button>
        </div>
    )
}

export default DoHomework;