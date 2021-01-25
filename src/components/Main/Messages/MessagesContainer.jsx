import Messages from "./Messages";
import {sendNewMessage} from "../../../redux/reducers/messagesReducers";
import {connect} from "react-redux";
import {
    messagesSelector,
    messagesTextSelector
} from "../../../redux/selectors/messagesSelectors";

let mapStateToProps = (state) => {
    return {
        messages: messagesSelector(state),
        messegesText: messagesTextSelector(state)
    }
}
const MessagesContainer = connect(mapStateToProps, {sendNewMessage})(Messages);
export default MessagesContainer;