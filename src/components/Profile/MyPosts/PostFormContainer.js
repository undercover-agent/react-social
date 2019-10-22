import React from "react";
import PostForm from "./PostForm/PostForm";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const PostFormContainer = props => {
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
       <PostForm  updateNewPostText={onPostChange} addPost={addPost} newPostText={props.newPostText}/>
    );
};

export default PostFormContainer;
