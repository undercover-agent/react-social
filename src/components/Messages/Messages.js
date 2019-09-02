import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Messages.module.css";
import Dialogs from "./Dialogs/Dialogs";

const Messages = () => {
  return (
    <div className={style.Messages}>
      <h2>Messages</h2>
      <Dialogs />
      <div className={style.messageContainer}>
        <div className={style.dialogItems}>
          <div className={style.item}>
            <NavLink to="/messages/1">NAme 1</NavLink>
          </div>
          <div className={style.item}>
            <NavLink to="/messages/2">NAme 2</NavLink>
          </div>
          <div className={style.item}>
            <NavLink to="/messages/3">NAme 3</NavLink>
          </div>
        </div>
        <div className={style.messageItems}>
          <div className={style.item}>hello 1</div>
          <div className={style.item}>hello 2</div>
          <div className={style.item}>hello 3</div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
