import React from "react";
import style from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={style.Profile}>
      <h2>My profile</h2>
      <img src="" alt="img-profile" />
      <ul>
        <li>Name + Last Name</li>
        <li>Date birthday</li>
        <li>Number phone</li>
      </ul>
    </div>
  );
};

export default Profile;
