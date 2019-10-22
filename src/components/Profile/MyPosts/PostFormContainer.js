import React from "react";
import PostForm from "./PostForm/PostForm";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


const PostFormContainer = props => {
    const newPostText = props.store.getState().profilePage.newPostText;
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (
        <PostForm  updateNewPostText={onPostChange} addPost={addPost} newPostText={newPostText}/>
    );
};

export default PostFormContainer;
