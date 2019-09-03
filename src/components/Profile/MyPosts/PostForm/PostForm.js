import React from "react";
import style from "./PostForm.module.css";
import Button from "./../../../UI/Button/Button";

const PostForm = props => {
  return (
    <div className={style.Add__post}>
      <form className={style.form}>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <Button>add post</Button>
      </form>
    </div>
  );
};

export default PostForm;
