import React from "react";
import style from "./Header.module.css";
import logo from "./../../assets/images/logo.png";

const Header = () => {
  const cls = [style.container, "flex-box"];
  return (
    <header className={style.header}>
      <div className={cls.join(" ")}>
        <h1 className={style.logotype}>
          <a href="#">
            <img src={logo} alt="Logotype" />
          </a>
        </h1>
        <ul className="inform flex-box">
          <li>
            <button>Sign in</button>
          </li>
          <li>
            <button>Login in</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
