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
  
  let dialogsData = [
    { id: 1, name: "Yuriy" },
    { id: 2, name: "Nika" },
    { id: 3, name: "Liza" },
    { id: 4, name: "Petr" },
    { id: 5, name: "David" },
  ];

let messagesData = [
  {id : 1, message : 'Hi'},
  {id : 2, message : 'How is your dream ?'},
  {id : 3, message : 'Nice bro! Thanks ?'},
]

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}
      </div>
      <div className={classes.messages}>
        {/* <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message}/> */}
      </div>
    </div>
  );
};

export default Dialogs;
