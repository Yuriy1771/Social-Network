import React from "react";
import classes from "../Dialogs/Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
  
  let state = props.store.getState().dialogsPage;
  
      let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
      };
      
      let onMessageChange = (message) => {
        props.store.dispatch(updateNewMessageTextActionCreator(message));
      }
      
      
  return (
  <Dialogs updateNewMessageText={ onMessageChange }
           addMessage={addMessage}
           dialogsPage={state}
  />
  );
};

export default DialogsContainer;
