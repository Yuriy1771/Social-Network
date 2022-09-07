const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
switch(action.type) {
    case ADD_MESSAGE : 
    let newMessage = {
        id: 4,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;

      case  UPDATE_NEW_MESSAGE_TEXT:
        state.newMessageText = action.messageText;
        return state;

        default: 
        return state;
}
}

export const addMessageActionCreator = () => {
    return {
      type: "ADD-MESSAGE",
    };
  };
  
  export const updateNewMessageTextActionCreator = (message) => {
    return {
      type: "UPDATE-NEW-MESSAGE-TEXT",
      messageText: message,
    };
  };

export default dialogsReducer;