import React from "react";
import { NavLink  } from "react-router-dom";
import classes from './Navbar.module.css';

const ActiveLink = ({isActive}) => isActive ? classes.active : classes.item ;

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" className = {ActiveLink}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" className = {ActiveLink}>Message</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" className = {ActiveLink}>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/music" className = {ActiveLink}>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/settings" className = {ActiveLink}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
