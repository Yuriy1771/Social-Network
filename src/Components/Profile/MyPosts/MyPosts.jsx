import React from "react";
import Post from "./Post/Post";
import classes from "./../MyPosts/MyPosts.module.css";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../Redux/profile-reducer";
import {useForm} from "react-hook-form";

const MyPosts = (props) => {
    let postsElements = props.posts.map((p) => (
        <Post message={p.post} likesCount={p.likesCount} avatar={p.avatar} key={p.id}/>
    ));

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm addPost={props.addPost}/>
            <div className={classes.posts}></div>
            {postsElements}
        </div>
    );
};

function AddPostForm(props) {

    const {
        register,
        formState: {
            errors,
            isValid,
        },
        handleSubmit,
        reset,
    } = useForm();

    function onSubmit(post) {
        props.addPost(post.post);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <textarea {...register('post',{required: 'error'})} className={classes.textareaPost}/>
            </div>
            <div>
                <button className={classes.btnAddPost} disabled={!isValid}>Add post</button>
            </div>
        </form>
    )
}

export default MyPosts;
