import React from "react";
import style from "./PostForm.module.css";
import Button from "./../../../UI/Button/Button";

const PostForm = props => {
  const newPostText = props.newPostText;

  let addPost = e => {
    e.preventDefault();
    props.addPost();
  };

  let onPostChange = e => {
    let text = e.target.value;
    props.updateNewPostText(text);
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
