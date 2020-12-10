import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfileData, getUserProfileStatus, updateUserProfileStatus} from "../../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 12806;
        }
        this.props.getProfileData(userId);
        this.props.getUserProfileStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profileData: state.profilePage.profileData,
    profileStatus: state.profilePage.profileStatus
})

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {getProfileData, getUserProfileStatus, updateUserProfileStatus})
)
(ProfileContainer);
