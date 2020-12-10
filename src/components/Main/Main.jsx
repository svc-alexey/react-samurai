import React from "react";
import classes from './Main.module.css';
import {Route} from "react-router-dom";
import MessagesContainer from "./Messages/MessagesContainer";
import Newsfeed from './Newsfeed/Newsfeed'
import FriendsContainer from "./Friends/FriendsContainer";
import RouterProfileContainer from "./Profile/ProfileContainer";
import Login from "./Login/Login";


const Main = (props) => {
    return (
        <div className={classes.wrapper}>
            <Route exact path={'/profile/:userId'}>
                <RouterProfileContainer/>
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
        </div>
    )
}

export default Main;
