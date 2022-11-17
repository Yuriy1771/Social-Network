import React from "react";
import classes from "../Dialogs/Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";


const Dialogs = (props) => {

  let state = props.dialogsPage;
  
  let newMessageText = state.newMessageText;
  
  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id}/>
    ));
    
    let messagesElements = state.messages.map((m) => (
      <Message message={m.message}  key={m.id}/>
      ));
      
      let newMessageElement = React.createRef();
      
      let addMessage = () => {
        props.addMessage();
      };
      
      let onMessageChange = (e) => {
        let message = e.target.value;
        props.updateNewMessageText(message);
      }
      
      
  return (
    <div className={classes.dialogs}>
      <div className={classes.shadow}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      </div>
      <div className={classes.messages}>
        {messagesElements}
        <div>
          <textarea className={classes.textareaMessage} ref={newMessageElement} onChange={ onMessageChange } value={ newMessageText }></textarea>
        </div>
        <div>
          <button className={classes.btnSendMessage} onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
