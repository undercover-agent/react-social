import React from "react";
import style from "./Navbar.module.css";
import Messages from "./../Messages/Messages";
import Profile from "./../Profile/Profile";
import News from "./../News/News";
import Settings from "./../Settings/Settings";

const Navbar = () => {
  return (
    <nav className={style.Navbar}>
      <ul>
        <li>
          <Profile />
        </li>
        <li>
          <Messages />
        </li>
        <li>
          <News />
        </li>
        <li>
          <Settings />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
