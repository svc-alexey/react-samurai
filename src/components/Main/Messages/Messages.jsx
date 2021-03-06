import React from "react";
import classes from './Messages.module.css';
import * as MdIcons from "react-icons/md";
import userPhoto from "../../../assets/img/userPhoto.png";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";


const Messages = (props) => {
    let messagesElements = props.messages.map(message => <Message key={message.id} id={message.id} name={message.name}
                                                                  text={message.text}/>)

    let messegesText = props.messegesText.map(text => <div
        className={classes.textMessage}>{text.usersTextMessages}</div>)

    let sendMessage = (value) => {
        props.sendNewMessage(value.newMessage);
    }

    return (
        <div className={classes.contentWrapper}>
            <div className={classes.messagesWindow}>
                <div className={classes.users}>
                    <div className={classes.usersHeader}>
                        <p>Messages</p>
                        <div>
                            <MdIcons.MdSettings size={24} color={'#4A569D'}/>
                        </div>
                    </div>
                    {messagesElements}
                </div>
                <div className={classes.chat}>
                    <div className={classes.chatHeader}>
                        <div className={classes.chatUser}>
                            <div className={classes.addPostPhoto}>
                                <img src={userPhoto} alt="userPhoto"/>
                            </div>
                            <div className={classes.userStatus}>
                                <p>John Snow</p>
                                <p className={classes.status}>Online</p>
                            </div>
                        </div>
                        <MdIcons.MdMoreVert size={24} color={'#4A569D'}/>
                    </div>
                    <div className={classes.messages}>
                        {messegesText}
                    </div>
                    <div className={classes.chatInput}>
                        <MessageForm onSubmit={sendMessage}/>
                        <div className={classes.chatIcons}>
                            <MdIcons.MdSentimentSatisfied size={24} color={'#4A569D'}/>
                            <MdIcons.MdCameraEnhance size={24} color={'#4A569D'}/>
                            <MdIcons.MdAttachFile size={24} color={'#4A569D'}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

let MessageForm = (props) => {
    return (
        <form className={classes.inputItems} onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessage'}/>
            <button className={classes.sendMessage}>Send</button>
        </form>
    )
}

MessageForm = reduxForm({
    form: 'addMessage'
})(MessageForm);

export default Messages;