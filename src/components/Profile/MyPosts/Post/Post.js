import React from "react";

const Post = props => {
  return (
    <div>
      <h1>{props.message}</h1>
      <span>like {props.likesCount}</span>
    </div>
  );
};

export default Post;
