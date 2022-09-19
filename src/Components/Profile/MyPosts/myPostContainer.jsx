import React from "react";
import Post from "./Post/Post";
import classes from "./../MyPosts/MyPosts.module.css";
import { updateNewPostTextActionCreator,addPostActionCreator } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
     <MyPosts
         updateNewPostText={ onPostChange }
         addPost={ addPost }
         posts={state.profilePage.posts}
         newPostText={state.profilePage.newPostText}
     />
    );
};

export default MyPostsContainer;
