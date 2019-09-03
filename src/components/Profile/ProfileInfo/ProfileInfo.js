import React from "react";
import style from "./ProfileInfo.module.css";
import profile from "./../../../assets/images/profile-foto.jpg";

const ProfileInfo = () => {
  return (
    <div className={style.ProfileInfo}>
      <img src={profile} alt="img-profile" />
      <ul>
        <li>Emma Watson</li>
        <li>Родилась: 15 апреля 1990 г.</li>
        <li>Рост: 1,65 м</li>
        <li>Профессия: актриса, фотомодель</li>
        <li>Образование: Брауновский университет (2014 г.),</li>
      </ul>
    </div>
  );
};

export default ProfileInfo;
