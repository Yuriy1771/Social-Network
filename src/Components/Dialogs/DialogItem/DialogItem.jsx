import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";


const ActiveLink = ({isActive}) => 
isActive ? classes.ActiveLink : classes.dialogsItems;

const DialogItem = (props) => {
  return (
    //+ " " + classes.active
    <div className={classes.dialog}> 
      <img src={props.avatar} alt="avatar" />
      <NavLink className={ActiveLink} to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
