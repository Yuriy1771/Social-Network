import React from 'react';
import classes from "../../FindUsers/FindUsers.module.css";
import preloader from "../../../assets/images/Loader.svg";

const Preloader = (props) => {
    return (
        <div className={classes.loader}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;

