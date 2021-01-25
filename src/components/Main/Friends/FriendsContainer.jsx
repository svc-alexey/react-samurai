import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow
} from "../../../redux/reducers/userReducer";
import Friends from "./Friends";
import React from "react";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    currentPageSelector, isFetchingSelector, isFollowingSelector,
    totalUsersCountSelector,
    usersCountSelector,
    usersSelector
} from "../../../redux/selectors/friendsSelectors";

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
        users: usersSelector(state),
        totalUsersCount: totalUsersCountSelector(state),
        usersCount: usersCountSelector(state),
        currentPage: currentPageSelector(state),
        isFetching: isFetchingSelector(state),
        isFollowing: isFollowingSelector(state)
    }
};

export default compose(
    connect(mapStateToProps, {getUsers, setCurrentPage, follow, unfollow}),
    withAuthRedirect
)(FriendsContainer);

