import React from "react";
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <div>new post</div>
      <div className="posts"></div>
      <Post message='Hi, how are you?' likesCount='32' />
      <Post message="It's my first post" likesCount='12' />
    </div>
  );
};

export default MyPosts;
