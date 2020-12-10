import {profileApi} from "../../api/api";

let SET_PROFILE_DATA = "SET_PROFILE_DATA";
let SET_PROFILE_STATUS = "SET_PROFILE_STATUS";

const initialState = {
    profileData: null,
    profileStatus: ''
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PROFILE_DATA:
            return {
                ...state, profileData: action.data
            }
        case SET_PROFILE_STATUS:
            return {
                ...state, profileStatus: action.status
            }
        default:
            return state;
    }
}

export const setProfileData = (data) => ({type: SET_PROFILE_DATA, data});
export const setUserProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status});

export const getProfileData = (userId) => (dispatch) => {
    profileApi.getUserProfile(userId).then(data => {
        dispatch(setProfileData(data));
    });
}
export const getUserProfileStatus = (userId) => (dispatch) => {
    profileApi.getUserProfileStatus(userId).then(status => {
        dispatch(setUserProfileStatus(status));
    });
}
export const updateUserProfileStatus = (status) => (dispatch) => {
    profileApi.updateUserProfileStatus(status).then(response => {
        debugger
        if (response.data.resultCode === 0) dispatch(setUserProfileStatus(status));
    });
}

export default profileReducer;