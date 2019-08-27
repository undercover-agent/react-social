import React from "react";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";

const MyPosts = props => {
  return (
    <div>
      <PostForm />
      <Post message="Message" />
    </div>
  );
};

export default MyPosts;
