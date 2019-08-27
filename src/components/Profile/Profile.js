import React from "react";
import style from "./Profile.module.css";
import profile from "./../../assets/images/profile-foto.jpg";

const Profile = () => {
  return (
    <div className={style.Profile}>
      <h2>My profile</h2>
      <div className={style.container}>
        <img src={profile} alt="img-profile" />
        <ul>
          <li>Emma Watson</li>
          <li>Родилась: 15 апреля 1990 г.</li>
          <li>Рост: 1,65 м</li>
          <li>Профессия: актриса, фотомодель</li>
          <li>Образование: Брауновский университет (2014 г.),</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
