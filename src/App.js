import React from 'react';
import classes from './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Main from "./components/Main/Main";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (
        <Router>
            <div className={classes.appWrapper}>
                <HeaderContainer/>
                <Main/>
            </div>
        </Router>
    );
}

export default App;
