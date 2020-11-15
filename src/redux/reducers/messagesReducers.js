let UPDATE_MESSAGE_BODY = 'UPDATE_MESSAGE_BODY';
let SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';


const initialState = {
    messages: [
        {id: 1, name: "John Snow", time: "11:00", text: "Lorem ipsum dolor."},
        {id: 2, name: "Jane Doe", time: "14:00", text: "Lorem ipsum dolor."}
    ],
    messegesText: [
        {usersTextMessages: 'Lorem ipsum dolor'},
        {usersTextMessages: 'dolor ipsul lorem'},
        {usersTextMessages: 'ipsum lorem dolor'},
    ],
    messageBody: ''
}

export default function messagesReducer(state = initialState, action) {
    switch (action.type){
        case UPDATE_MESSAGE_BODY:
            return{...state, messageBody: action.body};
        case SEND_NEW_MESSAGE:
            let newMessage = {usersTextMessages: state.messageBody};
            return {
                ...state,
                messegesText: [...state.messegesText, newMessage],
                messageBody: ''
            }
        default:
            return state;
    }

}


export const updateMessage = (body) => ({type: UPDATE_MESSAGE_BODY, body:body});
export const sendNewMessage = () => ({type:SEND_NEW_MESSAGE});