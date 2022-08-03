import React from "react";
import Post from "./Post/Post";
import classes from "./../MyPosts/MyPosts.module.css";

const MyPosts = (props) => {

  let postData = [
    {id : 1, post : "Hi, how are you?", likesCount : 4},
    {id : 1, post : "It's my first post", likesCount: 54}
  ]

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={classes.posts}></div>
      <Post message={postData[0].post} likesCount={postData[0].likesCount} />
      <Post message={postData[1].post} likesCount={postData[1].likesCount} />
    </div>
  );
};

export default MyPosts;
