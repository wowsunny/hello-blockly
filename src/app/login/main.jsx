import React from 'react';
import { BrowserRouter as Router, Route, Link, useRouteMatch,Switch, useParams} from "react-router-dom";
import Login from './Login';
import Signup from './Signup';

function LogMain() {
    let {path, url} = useRouteMatch();
    
    return (

    <div>
      <ul>
        <li>
          <Link to={`${url}`}>login</Link>
        </li>
        <li>
          <Link to={`${url}/signup`}>signup</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}`} exact component={Login}/>
        <Route path={`${path}/signup`} component={Signup}/>
      </Switch>
    </div>

    )
}

export default LogMain;
