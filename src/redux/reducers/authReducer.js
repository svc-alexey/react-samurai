import {authAPI, securityAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

let SET_AUTH_DATA = "SET_AUTH_DATA";
let SET_CAPTCHA = "SET_CAPTCHA";

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuthorized: false,
    authorizedId: null,
    captchaUrl: null
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
        case SET_CAPTCHA:
            return {
                ...state, ...action.payload,
            }
        default:
            return state;
    }
}

export const setAuthData = (email, password, rememberMe, isAuthorized) => ({
    type: SET_AUTH_DATA,
    payload: {email, password, rememberMe, isAuthorized}
});
export const setCaptcha = (captchaUrl) => ({
    type: SET_CAPTCHA,
    payload: {captchaUrl}
});

export const setUserLogin = (login, authorizedId) => ({type: SET_AUTH_DATA, payload: {login, authorizedId}});

export const getUserdData = () => async (dispatch) => {
    let data = await authAPI.authMe();
    if (data.resultCode === 0) {
        let {email, password, rememberMe} = data.data;
        let {login, id} = data.data;
        dispatch(setAuthData(email, password, rememberMe, true));
        dispatch(setUserLogin(login, id));
    }
}

export const submitForm = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(getUserdData());
    } else if (data.resultCode === 10) {
        dispatch(getCaptcha());
    } else {
        // let message = data.messages.length > 0 ? data.message[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: data.messages[0]}));
    }
}

export const logout = () => async (dispatch) => {
    let data = await authAPI.logout();
    if (data.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
    }
}
export const getCaptcha = () => async (dispatch) => {
    let captchaUrl = await securityAPI.getCaptcha();
    dispatch(setCaptcha(captchaUrl));
}

export default authReducer;