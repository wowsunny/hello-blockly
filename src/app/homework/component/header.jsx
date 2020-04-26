import React from 'react';
import "./style.css"
function Header(props) {
    return(
    <div className={"header "+" "+(props.done?"headerDone":"")} onClick={(e)=>{props.handleClick(props.type)}}>{props.data}</div>
    )
}

export default Header;