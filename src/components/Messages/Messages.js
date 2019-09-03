import React from "react";
import style from "./Messages.module.css";
import DialogItmes from "./DialogItmes/DialogItmes";
import Message from "./Message/Message";

const Messages = () => {
  return (
    <div className={style.Messages}>
      <h2>Messages</h2>
      <div className={style.messageContainer}>
        <div className={style.dialogItems}>
          <DialogItmes id="1" name="NAme 1" />
          <DialogItmes id="2" name="NAme 2" />
          <DialogItmes id="3" name="NAme 3" />
        </div>
        <div className={style.messageItems}>
          <Message message="hello 1" />
          <Message message="hello 2" />
          <Message message="hello 3" />
        </div>
      </div>
    </div>
  );
};

export default Messages;
