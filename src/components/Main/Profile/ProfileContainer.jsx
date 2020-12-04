import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../../redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 12806;
        }
        this.props.setUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profileData: state.profilePage.profileData,
})

let RouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(RouterProfileContainer);