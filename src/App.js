import React from 'react';
import classes from './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Main from "./components/Main/Main";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {setAuthorizationData} from "./redux/reducers/appReducer";
import Preloader from "./common/Preloader";
import store from "./redux/configureStore";

class App extends React.Component {
    componentDidMount() {
        this.props.setAuthorizationData();
    }

    render() {
        if (!this.props.authorizedApp) return <Preloader/>
        return (
                <div className={classes.appWrapper}>
                    <HeaderContainer/>
                    <Main/>
                </div>
        );
    }
}

const mapStateToProps = (state) => ({
    authorizedApp: state.app.authorizedApp
})

const AppContainer = connect(mapStateToProps, {setAuthorizationData})(App);

const SNApp = () => {
    return (
        <Router>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </Router>
    )
}
export default SNApp;