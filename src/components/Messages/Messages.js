import React from "react";
import style from "./Messages.module.css";
import Dialogs from "./Dialogs/Dialogs";

const Messages = () => {
  return (
    <div className={style.Messages}>
      <h2>Messages</h2>
      <Dialogs />
      <div className={style.messageContainer}>
        <div className={style.dialogItems}>
          <div className={style.item}>NAme 1</div>
          <div className={style.item}>NAme 2</div>
          <div className={style.item}>NAme 3</div>
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
