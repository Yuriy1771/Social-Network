import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src={props.avatar}></img>
      {props.message}
      <div>
        <span>Like </span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
