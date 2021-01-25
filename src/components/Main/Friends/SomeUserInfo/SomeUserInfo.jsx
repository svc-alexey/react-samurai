import React from "react";
import classes from './SomeUserInfo.module.css';
import userPhoto from '../../../../assets/img/userPhoto.png'
import {NavLink} from "react-router-dom";


const SomeUserInfo = (props) => {
    return (
        <div className={classes.someUser}>
            <div className={classes.someUserInfo}>
                <div className={classes.userPhoto}>
                    <NavLink to={`/profile/${props.id}`}> <img src={props.photo ? props.photo : userPhoto}
                                                               alt="userPhoto"/>
                    </NavLink>
                </div>
                <div className={classes.userName}>{props.userName}</div>
                <div className={classes.status}>{props.status}</div>
            </div>
            <div className={classes.btn}>
                {props.followed ? <button disabled={props.isFollowing.some(id => id === props.id)} onClick={() => {
                        props.unfollow(props.id);
                    }} className={classes.followBtn}>Follow</button> :
                    <button disabled={props.isFollowing.some(id => id === props.id)} onClick={() => {
                        props.follow(props.id);
                    }} className={classes.followBtn}>Unfollow</button>}
            </div>
        </div>
    )
}

export default SomeUserInfo;
