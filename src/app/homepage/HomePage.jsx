import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
function HomePage(params) {
    return (
        <div className='HomePage'>
            <div className='container'>
                <div className='linkContainer'>
                    <Link className='link' to="/set">
                        <p>go to set homework</p>
                    </Link>
                </div>
                <div className='linkContainer'>
                    <Link className='link' to="/do">
                        <p>go to do homework</p>
                    </Link>
                </div>
                <div className='linkContainer'>
                    <Link className='link' to="/loginMain">
                        <p>go to login main</p>
                    </Link>
                </div>
                <div className='linkContainer'>
                    <Link className='link' to="/courseMain">
                        <p>go to course main</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage;