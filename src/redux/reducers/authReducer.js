import {authAPI} from "../../api/api";
import {stopSubmit} from "redux-form";

let SET_AUTH_DATA = "SET_AUTH_DATA";

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuthorized: false
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
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
export const setUserLogin = (login, id) => ({type: SET_AUTH_DATA, payload: {login, id}});


export const getUserdData = () => (dispatch) => {
    authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
            let {email, password, rememberMe} = data.data;
            let {login, id}= data.data;
            dispatch(setAuthData(email, password, rememberMe, true));
            dispatch(setUserLogin(login, id));
        }
    });
}
export const submitForm = (email, password, rememberMe, isAuthorized) => (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getUserdData());
        }
        else {
            // let message = data.messages.length > 0 ? data.message[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: data.messages[0]}));
        }
    });
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthData(null, null, null, false));
        }
    });
}

export default authReducer;