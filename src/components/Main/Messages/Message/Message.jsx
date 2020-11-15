import React from "react";
import classes from './Message.module.css';
import * as MdIcons from "react-icons/md";
import userPhoto from "../../../../img/userPhoto.png";
import {NavLink} from "react-router-dom";


const Message = (props) => {
    return (
        <div className={classes.userInfo}>
            <div className={classes.addPostPhoto}>
                <NavLink to={'/messages/'+ props.id}>
                    <img src={userPhoto} alt="userPhoto"/>
                </NavLink>
            </div>
            <div className={classes.userWrapper}>
                <div className={classes.someUser}>
                    <p>{props.name}</p>
                    <p className={classes.time}>{props.time}</p>
                </div>
                <div className={classes.userText}>{props.text}</div>
            </div>
        </div>
    )
}

export default Message;