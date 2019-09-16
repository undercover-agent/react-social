import React from "react";
import style from "./PostForm.module.css";
import Button from "./../../../UI/Button/Button";

const PostForm = props => {
  let newPostElement = React.createRef();

  let addPost = e => {
    alert(props.addPost(newPostElement.current.value));
    e.preventDefault();
  };

  return (
    <div className={style.Add__post}>
      <form className={style.form}>
        <textarea cols="30" rows="10" ref={newPostElement}></textarea>
        <Button onClick={addPost}>add post</Button>
      </form>
    </div>
  );
};

export default PostForm;
