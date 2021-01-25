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
}

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            let newMessage = {usersTextMessages: action.newMessage};
            return {
                ...state,
                messegesText: [...state.messegesText, newMessage],
            }
        default:
            return state;
    }

}


export const sendNewMessage = (newMessage) => ({type: SEND_NEW_MESSAGE, newMessage});