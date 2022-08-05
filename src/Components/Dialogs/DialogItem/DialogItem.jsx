import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={classes.dialog + " " + classes.active}>
      <img src={props.avatar} alt="avatar" />
      <NavLink className={classes.name} to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
