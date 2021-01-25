import React from "react";
import classes from './Profile.module.css';
import background from "../../../assets/img/background.png";
import * as FaIcons from 'react-icons/fa';
import ProfileBar from "./ProfileBar/ProfileBar";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileData/ProfileDataForm";


class Profile extends React.Component {
    state = {
        isEdit: false,
        profileStatus: this.props.profileStatus,
        editProfile: false
    }

    isEditShow = () => {
        this.setState({
            isEdit: true
        })
    }
    isEditHide = () => {
        this.setState({
            isEdit: false,
        })
        this.props.updateUserProfileStatus(this.state.profileStatus)
    }

    isEditProfileShow = () => {
        this.setState({
            editProfile: true
        })
    }

    isEditProfileHide = () => {
        this.setState({
            editProfile: false,
        })
    }

    setProfileStatus = (e) => {
        this.setState({
            profileStatus: e.currentTarget.value,
        })
    }

    onPhotoSelected = (e) => {
        if (e.target.files.length) {
            this.props.savePhoto(e.target.files[0]);
        }
    }

    submitProfileForm = (data) => {
        this.props.submitProfileForm(data).then(
            () => {
                this.isEditProfileHide();

            }
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.profileStatus !== this.props.profileStatus)
            this.setState({
                profileStatus: this.props.profileStatus,
            })
    }

    render() {
        return (
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <div className={classes.dash}>
                        <img src={background} alt="background"/>
                    </div>
                    <ProfileBar profileData={this.props.profileData} isOwner={this.props.isOwner}
                                onPhotoSelected={this.onPhotoSelected}/>
                    <div className={classes.profileInfo}>
                        <div className={classes.aboutUser}>
                            <div className={classes.status}
                                 onDoubleClick={this.isEditShow}> Status: {this.state.isEdit ?
                                <input onChange={this.setProfileStatus} autoFocus={true} onBlur={this.isEditHide}
                                       value={this.state.profileStatus}/> :
                                <div>{this.props.profileStatus}</div>}</div>
                            <h2><FaIcons.FaInfo size={16} color={'#008000'}/>Personal Information
                            </h2>
                            {this.state.editProfile ? <ProfileDataForm initialValues={this.props.profileData}
                                                                       profileData={this.props.profileData}
                                                                       onSubmit={this.submitProfileForm}/>
                                : <ProfileData profileData={this.props.profileData}/>}
                            {this.props.isOwner ?
                                this.state.editProfile ? <button className={classes.editProfileBtn}
                                                                 onClick={this.isEditProfileHide}>Cancel</button> :
                                    <button className={classes.editProfileBtn} onClick={this.isEditProfileShow}>Edit
                                        Profile</button> : null}
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
            </div>
        )
    }
}


export default Profile;