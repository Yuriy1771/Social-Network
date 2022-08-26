import React from "react";
import classes from "./NewsElement.module.css";

const NewsElement = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.newsBlock}>
        <div className={classes.description}>
          <img src={props.avatar} alt="avatar" />
          <span>{props.name}</span>
        </div>
        <div className={classes.textNews}>
          <p>{props.text}</p>
        </div>
        <div className={classes.pictureNews}>
          <img
            src={props.picture}
            alt=""
          />
        </div>
        <div className={classes.likeCount}>
          <span>Like : {props.likes} </span>
        </div>
      </div>
    </div>
  );
};

export default NewsElement;
