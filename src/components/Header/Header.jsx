import React from "react";
import style from "./Header.module.css";
import logo from "./../../assets/images/logo.png";
import Button from "../UI/Button/Button";

const Header = () => {
  const cls = [style.container, "flex-box"];
  return (
    <header className={style.header}>
      <div className={cls.join(" ")}>
        <h1 className={style.logotype}>
          <img src={logo} alt="Logotype" />
        </h1>
        <Button>Exit</Button>
      </div>
    </header>
  );
};

export default Header;
