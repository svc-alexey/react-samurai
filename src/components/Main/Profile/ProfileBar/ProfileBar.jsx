import React from "react";
import classes from './ProfileBar.module.css';
import userPhoto from "../../../../assets/img/userPhoto.png";
import * as FaIcons from 'react-icons/fa';

const ProfileBar = (props) => {
    return (
        <div className={classes.profileInfo}>
            <div
                className={classes.userBar}>
                <div className={classes.profilePhoto}>
                    <img
                        src={props.profileData.photos ? props.profileData.photos.small : userPhoto}
                        alt="userPhoto"/>
                </div>
                {props.isOwner &&
                <input onChange={props.onPhotoSelected} className={classes.addPhoto} type={'file'}/>}
                <div className={classes.userName}>{props.profileData.fullName} </div>
                <div className={classes.userSocialNetworks}>
                    <FaIcons.FaFacebookSquare size={24} color={'#314755'}/>
                    <FaIcons.FaYoutube size={24} color={'#314755'}/>
                    <FaIcons.FaTwitterSquare size={24} color={'#314755'}/>
                    <FaIcons.FaVk size={24} color={'#314755'}/>
                    <FaIcons.FaInstagramSquare size={24} color={'#314755'}/>
                </div>
                <button className={classes.followBtn}>Follow</button>
            </div>
        </div>
    )
}

export default ProfileBar;