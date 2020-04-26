import React from 'react';
import InputTab from './component/InputTab'

class Login extends React.Component {
    constructor() {
        super();
        this.userName = "";
        this.password = "";
    }
    setInput = (props) => {
        return (
            <InputTab type={props.type} setData={(data) => {
                console.log("here", this.userName);
                if (props.dataType == "userName") {
                    this.userName = data;
                }
                else if (props.dataType == "password") {
                    this.password = data;
                }
                else return false
            }} />
        )
    }
    render() {
        return (
            <div >
                <this.setInput type="text" dataType="userName" />
                <this.setInput type="password" dataType="password" />
                <this.setInput type="password" dataType="password" />
                <button onClick={() => { console.log(this.userName, this.password) }}>show</button>
            </div>
        )
    }
}

export default Login;
