import React from "react";
import classes from './ProfileData.module.css';


const ProfileData = (props) => {
    return (
        <div>
            <div className={classes.aboutMe}>
                <strong>About Me:</strong> {props.profileData.aboutMe}
            </div>
            <div className={classes.lookingForAJob}>
                <strong>Looking for a
                    job:</strong>{props.profileData.lookingForAJob ? 'Looking' : 'Not looking'}
            </div>
            <div className={classes.lookingForAJobDescription}>
                {props.profileData.lookingForAJobDescription}
            </div>
            <div className={classes.contacts}>
                <p>My contacts:</p>
                {Object.keys(props.profileData.contacts).map(key => {
                    return <Contact key={key} title={key} value={props.profileData.contacts[key]}/>
                })}
            </div>
        </div>
    )
}

const Contact = ({title, value}) => {
    return (
        <div className={classes.contact}>
            <b>{title}</b>: {value}
        </div>
    )
}

export default ProfileData;
