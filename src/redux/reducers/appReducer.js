import {getUserdData} from "./authReducer";

let AUTHORIZED_SUCCESS = "AUTHORIZED_SUCCESS";

let initialState = {
    authorizedApp: false
};
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHORIZED_SUCCESS:
            return {
                ...state, authorizedApp: true
            }
        default:
            return state;
    }
}

export const autorization = () => ({
    type: AUTHORIZED_SUCCESS,
});

export const setAuthorizationData = () => (dispatch) => {
    let promise = dispatch(getUserdData());
    Promise.all([promise]).then(() => {
        dispatch(autorization());
    });
}

export default appReducer;