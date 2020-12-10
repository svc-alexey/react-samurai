let SEND_POST = "SEND_POST";

const initialState = {
    posts: [
        {id: 1, postLabel: 'First Post', postText: 'Hello its my first post'},
        {id: 2, postLabel: 'Second Post', postText: 'Yo-Yo-Yo'}
    ],
}

const feedReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_POST:
            let newPost = {
                id: 3,
                postLabel: 'Post',
                postText: action.newPostText
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

export const sendPost = (newPostText) => ({type: SEND_POST, newPostText});

export default feedReducer;