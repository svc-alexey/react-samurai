import {combineReducers} from "redux";
import postReducer from "./postReducer";
import messagesReducers from "./messagesReducers";


export const rootReducer = combineReducers({
    postsPage: postReducer,
    messagePage: messagesReducers
});