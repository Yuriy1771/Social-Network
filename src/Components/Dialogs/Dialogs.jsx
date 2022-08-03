import React from "react";
import classes from "../Dialogs/Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Yuriy" },
    { id: 2, name: "Nika" },
    { id: 3, name: "Liza" },
    { id: 4, name: "Petr" },
    { id: 5, name: "David" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your dream ?" },
    { id: 3, message: "Nice bro! Thanks ?" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
