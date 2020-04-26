import React from 'react';
import InputTab from './component/InputTab'

class Login extends React.Component {
    constructor() {
        super();
        this.userName = "";
        this.password = "";
    }
    setInput = (dataType, data) => {
        if (dataType == "userName") {
            this.userName = data;
        }
        else if (dataType == "password") {
            this.password = data;
        }
        else return false
    }
    render() {
        return (
            <div >
                <InputTab type="text" dataType="userName" name="userName" setData={(data)=>{this.setInput("userName",data)}}/>
                <InputTab type="password" dataType="password" name="password" setData={(data)=>{this.setInput("password",data)}}/>
                <button onClick={() => { console.log(this.userName, this.password) }}>show</button>
            </div>
        )
    }
}

export default Login;
