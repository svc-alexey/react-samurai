import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {getUserdData} from "../../redux/reducers/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserdData();
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuthorized: state.auth.isAuthorized,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getUserdData})(HeaderContainer);
