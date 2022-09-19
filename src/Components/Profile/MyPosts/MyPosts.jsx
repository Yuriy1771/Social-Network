import React from "react";
import Post from "./Post/Post";
import classes from "./../MyPosts/MyPosts.module.css";
import { updateNewPostTextActionCreator,addPostActionCreator } from "../../../Redux/profile-reducer"; 

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.post} likesCount={p.likesCount} avatar={p.avatar} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
      props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={classes.posts}></div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
