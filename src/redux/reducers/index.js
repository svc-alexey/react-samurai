import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import messagesReducers from "./messagesReducers";
import userReducer from "./userReducer";
import authReducer from "./authReducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducers,
    usersPage: userReducer,
    auth: authReducer
});