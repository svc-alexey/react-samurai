import {profileApi} from "../../api/api";
import {stopSubmit} from "redux-form";

let SET_PROFILE_DATA = "SET_PROFILE_DATA";
let SET_PROFILE_STATUS = "SET_PROFILE_STATUS";
let SET_PHOTO_SUCCESS = "SET_PHOTO_SUCCESS";

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
        case SET_PHOTO_SUCCESS:
            return {
                ...state, profileData: {...state.profileData, photos: action.photos}
            }
        default:
            return state;
    }
}

export const setProfileData = (data) => ({type: SET_PROFILE_DATA, data});
export const setUserProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status});
export const setPhotoSuccess = (photos) => ({type: SET_PHOTO_SUCCESS, photos});

export const getProfileData = (userId) => async (dispatch) => {
    let data = await profileApi.getUserProfile(userId);
    dispatch(setProfileData(data));
}

export const getUserProfileStatus = (userId) => async (dispatch) => {
    let status = await profileApi.getUserProfileStatus(userId);
    dispatch(setUserProfileStatus(status));
}
export const updateUserProfileStatus = (status) => async (dispatch) => {
    let response = await profileApi.updateUserProfileStatus(status);
    if (response.data.resultCode === 0) dispatch(setUserProfileStatus(status));
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileApi.savePhoto(file);
    if (response.data.resultCode === 0) dispatch(setPhotoSuccess(response.data.data.photos));
}

export const submitProfileForm = (data) => async (dispatch, getState) => {
    debugger
    let userId = getState().auth.authorizedId;
    let response = await profileApi.submitProfileForm(data);
    if (response.data.resultCode === 0) {
        dispatch(getProfileData(userId));
    } else {
        dispatch(stopSubmit('profile', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}


export default profileReducer;