import React from "react";
import classes from './Main.module.css';
import Home from "./Home/Home";
import { Route } from "react-router-dom";
import Friends from "./Friends/Friends";
import Messages from "./Messages/Messages";


const Main = () => {
    return (
        <div className={classes.wrapper}>
            <Route exact path={'/'}>
                <Home/>
            </Route>
            <Route exact path={'/friends'}>
                <Friends/>
            </Route>
            <Route exact path={'/messages'}>
                <Messages/>
            </Route>
        </div>
    )
}

export default Main;