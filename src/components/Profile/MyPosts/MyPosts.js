import React from "react";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";

const postData = [
  { message: "lorem ipsum", likesCount: 2 },
  { message: "lorem ipsum, ipsum lorem", likesCount: 12 }
];

const MyPosts = props => {
  return (
    <div>
      <PostForm />
      {postData.map((value, index) => {
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
