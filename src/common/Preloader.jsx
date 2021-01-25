import React from "react";
import classes from "../components/Main/Friends/Friends.module.css";
import preloader from "../assets/img/loader.gif";

const Preloader = () => {
    return (
        <div>
            <img className={classes.preloader} src={preloader} alt="preloader"/>
        </div>
    )
}

export default Preloader;