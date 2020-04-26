import React from 'react';
import './style.css';
import SetWorkspace from './component/SetWorkspace';
import SetToolBox from './component/SetToolBox';
import Header from './component/header';
import { Link } from "react-router-dom";

class SetHomework extends React.Component {
    constructor(props) {
        super();
        this.state = {
            workspaceUp: false,
            toolboxUp: true,
            workspaceBlock: null,
            toolboxBlock: null,
            argumentList: null,
            homeworkBody: null,
            homeworkAnsw: null,
            doneList: [false, false]

        }
    }
    componentDidMount() {
        let self = this;    //为了避免作用域及缓存
        window.receiveMessageFromIndex = function (event) {
            if (event != undefined) {
                console.log('react have recieved the message:', event.data);
                // var newDiv = document.createElement("div");
                // newDiv.innerHTML = event.data;

                // self.setState({
                //     workspaceBlock: newDiv.innerText
                // })
                if (event.data.type == "workspace") {

                    self.setState({
                        workspaceBlock: event.data.code,
                        argumentList: event.data.argumentList,
                        homeworkBody: event.data.homeworkBody,
                        homeworkAnsw: event.data.homeworkAnsw,
                        doneList: [true, self.state.doneList[1]]
                    })

                }
                else if (event.data.type == "toolbox") {
                    self.setState({
                        toolboxBlock: event.data.code,
                        doneList: [self.state.doneList[0], true]

                    })
                }
                else console.log("error");
                console.log(self.state);


            }

        }

        //监听message事件
        window.addEventListener("message", window.receiveMessageFromIndex, false);
    };

    handleClick = (pos) => {

        if (pos == "workspace") {
            console.log(1);

            this.setState({ workspaceUp: !this.state.workspaceUp });

        }
        else if (pos == "toolbox") {
            console.log(2);

            this.setState({ toolboxUp: !this.state.toolboxUp });
        }
        else {
            console.log("error");

        }
        console.log(this.state);

    }
    postData = () => {
        var predata = {
            workspaceBlock: this.state.workspaceBlock,
            toolboxBlock: this.state.toolboxBlock,
            // argumentList: this.state.argumentList,
            homeworkBody: this.state.homeworkBody,
            homeworkAnsw: this.state.homeworkAnsw
        }
        var data = JSON.stringify(predata);

        const Http = new XMLHttpRequest();
        const url = "http://yngsh.natapp1.cc/homework";
        Http.open("post", url, true);
        // Access-Control-Allow-Origin:  http://127.0.0.1:3000
        // Access-Control-Allow-Methods: POST
        // Access-Control-Allow-Headers: Content-Type, Authorization
        Http.setRequestHeader('Content-Type','application/json;charset:utf-8');
        Http.setRequestHeader( 'Access-Control-Allow-Origin','*');
        console.log(data);
        Http.send(data);
    }
    render() {
        return (
            <div>
                <div className="scrollbox">
                    <Header data="设置工作区" handleClick={this.handleClick} type="workspace" done={this.state.doneList[0]} />
                    <SetWorkspace classType={this.state.workspaceUp ? "scrollUp" : "scrollDown"} />
                </div >
                <div className="scrollbox" >
                    <Header data="设置工具箱" handleClick={this.handleClick} type="toolbox" done={this.state.doneList[1]} />
                    <SetToolBox classType={this.state.toolboxUp ? "scrollUp" : "scrollDown"} />
                </div>
                <Link to="/">
                    <button>back to homepage</button>
                </Link>
                <button onClick={(e) => {
                    window.sendData = this.state;
                }}>send data to doPage</button>
                <button onClick={this.postData}>post data</button>
            </div>
        )

    }
}
export default SetHomework;