import {combineReducers} from "redux";
import profileReducer from "./profileReducer";
import messagesReducers from "./messagesReducers";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import {reducer as formReducer} from 'redux-form'
import feedReducer from "./feedReducer";
import appReducer from "./appReducer";


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: messagesReducers,
    usersPage: userReducer,
    feedPage: feedReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});