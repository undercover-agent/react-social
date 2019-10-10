import React from "react";
import style from "./PostForm.module.css";
import Button from "./../../../UI/Button/Button";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../../redux/profile-reducer";

const PostForm = props => {
  const newPostElement = React.createRef();
  let addPost = e => {
    let text = newPostElement.current.value;
    if (text !== "") {
      props.dispatch(addPostActionCreator);
    }
    e.preventDefault();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={style.Add__post}>
      <form className={style.form}>
        <textarea
          cols="30"
          rows="10"
          ref={newPostElement}
          value={props.newPostPage}
          onChange={onPostChange}
        ></textarea>
        <Button onClick={addPost}>add post</Button>
      </form>
    </div>
  );
};

export default PostForm;
