import React from "react";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";

const MyPosts = props => {
  return (
    <div>
      <PostForm />
      {props.postData.map((value, index) => {
        return (
          <Post
            message={value.message}
            likesCount={value.likesCount}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default MyPosts;
