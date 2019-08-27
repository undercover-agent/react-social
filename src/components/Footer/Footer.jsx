import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  const cls = [style.Footer];
  return (
    <footer className={cls.join(" ")}>
      <div className="container">
        <span className="copyright">
          Copyright © 2019 Developed by Vlad Houston
        </span>
      </div>
    </footer>
  );
};

export default Footer;
