import React from 'react';
import classes from "../../FindUsers/FindUsers.module.css";
import preloader from "../../../assets/images/Loader.svg";

const Preloader = (props) => {
    return (
        <div className={classes.preloader}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader;

