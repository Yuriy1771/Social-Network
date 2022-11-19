import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.postItem}>
                <div className={classes.imgPost}>
                    <img src={props.avatar}></img>
                    <div className={classes.namePost}>
                        <span>Yuriy</span>
                    </div>
                </div>

                <div className={classes.textPost}>
                    <span>{props.message}</span>
                    <div className={classes.like}>
                        <span>Like {props.likesCount} </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Post;
