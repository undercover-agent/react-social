import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = props => {
    return (
        <div className={style.Profile}>
            <h2>My profile</h2>
            <ProfileInfo />
            <MyPosts
                postData={props.postData}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
                store={props.store}
            />
        </div>
    );
};

export default Profile;
