import React from 'react';
import classes from './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter as Router} from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
    return (
        <Router>
            <div className={classes.appWrapper}>
                <Header/>
                <Main/>
            </div>
        </Router>
    );
}

export default App;
