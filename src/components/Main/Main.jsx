import React from "react";
import classes from './Main.module.css';
import {Redirect, Route, Switch} from "react-router-dom";
import MessagesContainer from "./Messages/MessagesContainer";
import Newsfeed from './Newsfeed/Newsfeed'
import FriendsContainer from "./Friends/FriendsContainer";
import ProfileContainer from "./Profile/ProfileContainer";
import Login from "./Login/Login";


const Main = (props) => {
    return (
        <div className={classes.wrapper}>
            <Switch>
                <Redirect exact from="/" to="/profile"/>
                <Route path='/profile/:userId?'>
                    <ProfileContainer/>
                </Route>
                <Route path={'/friends'}>
                    <FriendsContainer/>
                </Route>
                <Route path={'/messages'}>
                    <MessagesContainer/>
                </Route>
                <Route path={'/newsfeed'}>
                    <Newsfeed/>
                </Route>
                <Route path={'/login'}>
                    <Login/>
                </Route>
                <Route path={'*'}>
                    <div>404 not found</div>
                </Route>
            </Switch>
        </div>
    )
}

export default Main;
