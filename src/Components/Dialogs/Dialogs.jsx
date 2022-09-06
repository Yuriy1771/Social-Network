import React from "react";
import classes from "../Dialogs/Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch({type: 'ADD-MESSAGE'});
  };

  let onMessageChange = () => {
    let message = newMessageElement.current.value;
    props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', messageText: message});
  }


  return (
    <div className={classes.dialogs}>
      <div className={classes.shadow}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      </div>
      <div className={classes.messages}>
        {messagesElements}
        <div>
          <textarea ref={newMessageElement} onChange={ onMessageChange } value={ props.newMessageText }></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
