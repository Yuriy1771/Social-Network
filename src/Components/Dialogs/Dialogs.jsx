import React from "react";
import classes from "../Dialogs/Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../Redux/dialogs-reducer";


const Dialogs = (props) => {
  
  let state = props.store.getState().dialogsPage;
  
  let newMessageText = state.newMessageText;
  
  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
    ));
    
    let messagesElements = state.messages.map((m) => (
      <Message message={m.message} />
      ));
      
      let newMessageElement = React.createRef();
      
      let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
      };
      
      let onMessageChange = (e) => {
        let message = e.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(message));
      }
      
      
  return (
    <div className={classes.dialogs}>
      <div className={classes.shadow}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      </div>
      <div className={classes.messages}>
        {messagesElements}
        <div>
          <textarea ref={newMessageElement} onChange={ onMessageChange } value={ newMessageText }></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
