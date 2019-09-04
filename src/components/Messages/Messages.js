import React from "react";
import style from "./Messages.module.css";
import DialogItmes from "./DialogItmes/DialogItmes";
import Message from "./Message/Message";

const dialogsData = [
  { id: "1", name: "Name 1", message: "hello kitty" },
  { id: "2", name: "Name 2", message: "hello man" },
  { id: "3", name: "Name 3", message: "hello world" }
];

const Messages = () => {
  return (
    <div className={style.Messages}>
      <h2>Messages</h2>
      {dialogsData.map((value, index) => {
        return (
          <div className={style.messageContainer} key={index}>
            <div className={style.dialogItems}>
              <DialogItmes id={value.id} name={value.name} />
            </div>
            <div className={style.messageItems}>
              <Message message={value.message} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Messages;
