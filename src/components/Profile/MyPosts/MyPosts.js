import React from "react";
import Post from "./Post/Post";
import PostFormContainer from "./PostFormContainer";

const MyPosts = props => {
  return (
    <div>
      <PostFormContainer
          postData={props.postData}
          dispatch={props.dispatch}
          newPostText={props.newPostText}
      />
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
