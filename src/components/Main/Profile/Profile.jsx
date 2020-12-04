import React from "react";
import classes from './Profile.module.css';
import PostsContainer from "./Posts/PostsContainer";
import background from "../../../assets/img/background.png";
import userPhoto from "../../../assets/img/userPhoto.png";
import * as FaIcons from 'react-icons/fa';
import {NavLink} from "react-router-dom";
import Preloader from "../../../common/Preloader";


const Profile = (props) => {

    if (!props.profileData) {
        return <Preloader/>
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.dash}>
                    <img src={background} alt="background"/>
                </div>
                <div className={classes.profileInfo}>
                    <div className={classes.userBar}>
                        <div className={classes.profilePhoto}>
                            <img src={props.profileData.photos.small ? props.profileData.photos.small : userPhoto} alt="userPhoto"/>
                        </div>
                        <div className={classes.userName}>{props.profileData.fullName}</div>
                        <div className={classes.userSocialNetworks}>
                            <NavLink to={'/'}> <FaIcons.FaFacebookSquare size={24} color={'#314755'}/>
                            </NavLink>
                            <NavLink to={'/'}> <FaIcons.FaYoutube size={24} color={'#314755'}/>
                            </NavLink>
                            <NavLink to={'/'}> <FaIcons.FaTwitterSquare size={24} color={'#314755'}/>
                            </NavLink>
                            <NavLink to={'/'}> <FaIcons.FaVk size={24} color={'#314755'}/>
                            </NavLink>
                            <NavLink to={'/'}> <FaIcons.FaInstagramSquare size={24} color={'#314755'}/>
                            </NavLink>
                        </div>
                        <button className={classes.followBtn}>Follow</button>
                    </div>
                </div>
                <div className={classes.profileLanding}>
                    <div className={classes.aboutUser}>
                        <h2><FaIcons.FaInfo size={16} color={'#008000'}/>Personal Information
                        </h2>
                        <div className={classes.aboutMe}>
                            <strong>About Me:</strong> {props.profileData.aboutMe}
                        </div>
                        <div className={classes.workStatus}>
                            <strong>Looking for a job:</strong>{props.profileData.lookingForAJob ? 'Looking':'Not looking'}
                        </div>
                        <div className={classes.workFindDescription}>
                            {props.profileData.lookingForAJobDescription}
                        </div>
                    </div>
                    <div className={classes.userActivity}>
                        <h2>User activity</h2>
                        <div className={classes.userAction}>
                            <div><strong>User</strong> has posted a photo</div>
                            <div>7 minutes ago</div>
                        </div>
                    </div>
                </div>
            </div>
            <PostsContainer/>
        </div>
    )
}

export default Profile;