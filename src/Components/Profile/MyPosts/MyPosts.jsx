import React from "react";
import Post from "./Post/Post";
import classes from "./../MyPosts/MyPosts.module.css";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.post} likesCount={p.likesCount} avatar={p.avatar} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}></div>
      {postsElements}
    </div>
  );
};

export default MyPosts;
