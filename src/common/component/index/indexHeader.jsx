import React from 'react';
import IndexHeaderButton from './button'
import WorkStation from 'common/component/homework/workstation';


import './style.css'
// import logo from '/picture/logo.png'
class IndexHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickList: Array(4).fill(false)
        }

    }
    componentDidMount() {

    }
    handleClick(id) {
        const list = Array(0);
        for (var i = 1; i < 5; i++) {
            list.push((i == id) ? "true" : "false");
        }
        this.setState({ clickList: list })



    }
    render() {
        return (
            <div id="header" >
                <img src="/picture/logo.png" />
                <IndexHeaderButton name="课程索引" isClick={this.state.clickList[0]} id={1} handleClick={this.handleClick.bind(this)} />
            </div>
        )
    }
}

export default IndexHeader;