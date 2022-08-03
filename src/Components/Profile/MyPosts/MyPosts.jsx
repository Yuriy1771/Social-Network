import React from "react";
import Post from "./Post/Post";
import classes from "./../MyPosts/MyPosts.module.css";

const MyPosts = (props) => {

  let posts = [
    {id : 1, post : "Hi, how are you?", likesCount : 4},
    {id : 1, post : "It's my first post", likesCount: 54}
  ]

let postsElements = posts
.map( p =>  <Post message={p.post} likesCount={p.likesCount} />)

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
      {postsElements}
    </div>
  );
};

export default MyPosts;
