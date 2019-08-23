import React from "react";
import style from "./Header.module.css";

const Header = () => {
  const cls = [style.container, "flex-box"];
  return (
    <header className={style.header}>
      <div className={cls.join(" ")}>
        <h1 className="logotype">
          <a href="#">
            <img src="751337_logo_512x512.png" alt="Logotype" />
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
