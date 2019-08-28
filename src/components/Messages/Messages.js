import React from "react";
import style from "./Messages.module.css";
import Dialogs from "./Dialogs/Dialogs";

const Messages = () => {
  return (
    <div className={style.Messages}>
      <h2>Messages</h2>
      <Dialogs />
    </div>
  );
};

export default Messages;
