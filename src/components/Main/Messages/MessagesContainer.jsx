import React from "react";
import Messages from "./Messages";
import {sendNewMessage, updateMessage} from "../../../redux/reducers/messagesReducers";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messages: state.messagePage.messages,
        messageBody: state.messagePage.messageBody,
        messegesText: state.messagePage.messegesText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessage: (body) => {
            dispatch(updateMessage(body));
        },
        sendNewMessage: () => {
            dispatch(sendNewMessage());
        }
    }
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);
export default MessagesContainer;