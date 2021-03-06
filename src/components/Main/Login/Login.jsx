import React from "react";
import classes from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {submitForm} from "../../../redux/reducers/authReducer";
import {Input} from "../../../common/Forms/FormsContols";
import {MaxLength, required} from "../../../utilities/validators/validators";
import {Redirect} from "react-router-dom"
import Preloader from "../../../common/Preloader";
import {authorizedIdSelector, isAuthorizedSelector} from "../../../redux/selectors/authSelectors";

let MaxLength25 = MaxLength(25);
let LoginForm = (props) => {
    return (
        <div className={classes.wrap}>
            <form className={classes.loginForm} onSubmit={props.handleSubmit}>
                <h1>Hello, <strong>Friend!</strong></h1>
                <div>
                    <label>Email</label>
                    <div><Field name={'email'} component={Input} validate={[required, MaxLength25]}/></div>
                </div>
                <div>
                    <label>Password:</label>
                    <div><Field name={"password"} component={Input} type={'password'}
                                validate={[required, MaxLength25]}/></div>
                </div>
                <div className={classes.checkbox}><Field name={"rememberMe"} component={'input'} type={"checkbox"}/>Remember
                    Me
                </div>
                {props.error && <div className={classes.errorField}>{props.error}</div>}
                {props.captcha &&
                <div>
                    <img src={props.captcha} alt="captcha"/>
                    <Field name={'captcha'} component={Input} validate={[required]}/>
                </div>
                }
                <button className={classes.loginBtn}>Login</button>
            </form>
        </div>
    )
}
LoginForm = reduxForm(
    {
        form: 'login'
    }
)(LoginForm);

const Login = (props) => {
    if (props.isAuthorized) {
        if (!props.id) {
            return <Preloader/>
        }
        return <Redirect to={`/profile`}/>
    }

    let submitForm = (data) => {
        debugger
        props.submitForm(data.email, data.password, data.rememberMe, data.captcha);
    }
    return <LoginForm onSubmit={submitForm} captcha={props.captchaUrl}/>
}

let mapStateToProps = (state) => ({
    isAuthorized: isAuthorizedSelector(state),
    id: authorizedIdSelector(state),
    captchaUrl: state.auth.captchaUrl
});

export default connect(mapStateToProps,
    {
        submitForm,
    }
)(Login);
