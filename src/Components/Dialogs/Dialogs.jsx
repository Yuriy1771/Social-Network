import React from "react";
import classes from "../Dialogs/Dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog + " " + classes.active}><NavLink to='/dialogs/1'>Yuriy</NavLink></div>
        <div className={classes.dialog}>
          <NavLink to='/dialogs/2'>Nika</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to='/dialogs/3'>Liza</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to='/dialogs/4'>Petr</NavLink>
        </div>
        <div className={classes.dialog}>
          <NavLink to='/dialogs/5'>David</NavLink>
        </div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi</div>
        <div className={classes.message}>How is your dream?</div>
        <div className={classes.message}>Nice bro! Thanks</div>
      </div>
    </div>
  );
};

export default Dialogs;
