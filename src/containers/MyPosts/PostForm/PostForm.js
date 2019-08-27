import React from "react";
import Button from "./../../../components/UI/Button/Button";
import style from "./PostForm.module.css";

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
