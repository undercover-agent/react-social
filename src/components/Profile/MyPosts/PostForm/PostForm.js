import React from "react";
import style from "./PostForm.module.css";
import Button from "./../../../UI/Button/Button";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../../redux/profile-reducer";

const PostForm = props => {
  const newPostText = props.newPostPage;

  let addPost = e => {
    props.dispatch(addPostActionCreator());
    e.preventDefault();
  };

  let onPostChange = e => {
    let text = e.target.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={style.Add__post}>
      <form className={style.form}>
        <textarea
          cols="30"
          rows="10"
          value={newPostText}
          onChange={onPostChange}
        ></textarea>
        <Button onClick={addPost}>add post</Button>
      </form>
    </div>
  );
};

export default PostForm;
