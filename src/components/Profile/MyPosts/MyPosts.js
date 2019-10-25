import React from "react";
import Post from "./Post/Post";
import PostFormContainer from "./PostFormContainer";

const MyPosts = props => {
    debugger;
    return (
        <div>
            <PostFormContainer
                store={props.store}
            />
            {props.store.postData.map((value, index) => {
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
