import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {
    getProfileData,
    getUserProfileStatus,
    updateUserProfileStatus,
    savePhoto, submitProfileForm
} from "../../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {profileDataSelector, profileStatusSelector} from "../../../redux/selectors/profileSelectors";
import {authorizedIdSelector} from "../../../redux/selectors/authSelectors";
import Preloader from "../../../common/Preloader";

class ProfileContainer extends React.Component {

    reProfile = () => {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedId;
        }
        this.props.getProfileData(userId);
        this.props.getUserProfileStatus(userId);
    }

    componentDidMount() {
        this.reProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.reProfile();
        }
    }

    render() {
        if (!this.props.profileData) {
            return <Preloader/>
        }
        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
        )
    }

}

let mapStateToProps = (state) => ({
    profileData: profileDataSelector(state),
    profileStatus: profileStatusSelector(state),
    authorizedId: authorizedIdSelector(state),
})

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {getProfileData, getUserProfileStatus, updateUserProfileStatus, savePhoto, submitProfileForm})
)
(ProfileContainer);
