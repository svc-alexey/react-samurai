import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getUserdData, logout} from "../../redux/reducers/authReducer";
import {
    authorizedIdSelector,
    isAuthorizedSelector,
    loginSelector
} from "../../redux/selectors/authSelectors";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuthorized: isAuthorizedSelector(state),
        login: loginSelector(state),
        authorizedId : authorizedIdSelector(state),
    }
}

export default connect(mapStateToProps, {getUserdData, logout})(HeaderContainer);
