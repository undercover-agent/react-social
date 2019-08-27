import React from "react";
import style from "./Navbar.module.css";
import Messages from "./../Messages/Messages";
import Profile from "./../Profile/Profile";
import News from "./../News/News";
import Settings from "./../Settings/Settings";

const Navbar = () => {
  return (
    <nav className={style.Navbar}>
      <h1>Profile</h1>
      <h1>Messages</h1>
      <h1>News</h1>
      <h1>Settings</h1>
    </nav>
  );
};

export default Navbar;
