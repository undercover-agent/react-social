import React from "react";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = props => {
  return (
    <div className={style.Profile}>
      <h2>My profile</h2>
      <ProfileInfo />
      <MyPosts postData={props.postData} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
