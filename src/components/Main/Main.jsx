import React from "react";
import classes from './Main.module.css';
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";


const Main = () => {
    return (
        <div className={classes.wrapper}>
            <Sidebar/>
            <Content/>
        </div>
    )
}

export default Main;