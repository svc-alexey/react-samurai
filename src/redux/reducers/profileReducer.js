import {userApi} from "../../api/api";

let SEND_POST = "SEND_POST";
let UPDATE_NEW_POST_BODY = "UPDATE_NEW_POST_BODY";
let SET_PROFILE_DATA = "SET_PROFILE_DATA";

const initialState = {
    posts: [
        {id: 1, postLabel: 'First Post', postText: 'Hello its my first post'},
        {id: 2, postLabel: 'Second Post', postText: 'Yo-Yo-Yo'}
    ],
    postBody: 'it',
    profileData: null
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_POST_BODY:
            return {
                ...state, postBody: action.body
            }
        case SEND_POST:
            let newPost = {
                id: 3,
                postLabel: '3 Post',
                postText: state.postBody
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                postBody: ''
            }
        case SET_PROFILE_DATA:
            return {
                ...state, profileData: action.data
            }
        default:
            return state;
    }
}

export const sendPost = () => ({type: SEND_POST});
export const updatePostBody = (body) => {
    return {
        type: UPDATE_NEW_POST_BODY,
        body: body
    }
}
export const setProfileData = (data) => ({type: SET_PROFILE_DATA, data});

export const setUserProfile = (userId) => (dispatch) => {
    userApi.getUserProfile(userId).then(data => {
        dispatch(setProfileData(data));
    });
}

export default profileReducer;