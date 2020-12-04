import {authAPI} from "../../api/api";
import {createDispatchHook} from "react-redux";

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
                ...state, ...action.data,
                isAuthorized: true
            }
        default:
            return state;
    }
}

export const setAuthData = (data) => ({type: SET_AUTH_DATA, data});

export const getUserdData = () => (dispatch) => {
    authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthData(data.data));
        }
    });
}


export default authReducer;