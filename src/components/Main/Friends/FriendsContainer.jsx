import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../../redux/reducers/userReducer";
import Friends from "./Friends";
import React from "react";

class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.usersCount);
    }

    render() {
        return (
            <Friends {...this.props}/>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        usersCount: state.usersPage.usersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing
    }
};

export default connect(mapStateToProps, {
    getUsers,
    setCurrentPage,
    follow,
    unfollow,
})(FriendsContainer);

