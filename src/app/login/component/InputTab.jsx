import React, { createRef } from 'react';
import './style.css';
function InputTab(props) {
    var inputRef = createRef();
    console.log(props.setData());
    return (
        <div  className="InputTab">
            <label htmlFor={props.name}>{props.name}</label>
            <input className={props.name} ref={inputRef} type={props.type} onChange={() => {
                if (inputRef) props.setData(inputRef.current.value)                
            }} />
        </div>
    )
}

export default InputTab;
