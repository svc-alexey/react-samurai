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
const MessagesContainer = connect(mapStateToProps, {updateMessage, sendNewMessage})(Messages);
export default MessagesContainer;