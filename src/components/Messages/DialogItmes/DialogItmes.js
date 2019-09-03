import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogItmes.module.css";

const DialogItmes = props => {
  let path = "/messages/" + props.id;
  return (
    <div className={style.item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItmes;
