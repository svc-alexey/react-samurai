import Messages from "./Messages";
import {sendNewMessage} from "../../../redux/reducers/messagesReducers";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messages: state.messagePage.messages,
        messegesText: state.messagePage.messegesText
    }
}
const MessagesContainer = connect(mapStateToProps, {sendNewMessage})(Messages);
export default MessagesContainer;