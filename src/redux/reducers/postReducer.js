let SEND_POST = "SEND_POST";
let UPDATE_NEW_POST_BODY = "UPDATE_NEW_POST_BODY";

const initialState = {
    posts: [
        {id: 1, postLabel: 'First Post', postText: 'Hello its my first post'},
        {id: 2, postLabel: 'Second Post', postText: 'Yo-Yo-Yo'}
    ],
    postBody: 'it'
}


const postReducer = (state = initialState, action) =>  {

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

export default postReducer;