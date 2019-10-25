import React from "react";
import PostForm from "./PostForm/PostForm";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../store-context";


const PostFormContainer = props => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    const newPostText = store.getState().profilePage.newPostText;
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    };

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
                    };
                    return (
                        <PostForm updateNewPostText={onPostChange} addPost={addPost} newPostText={newPostText}/>
                    )
                }
            }

        </StoreContext.Consumer>
    );
};

export default PostFormContainer;
