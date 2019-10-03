import React from "react";
import style from "./Messages.module.css";
import DialogItmes from "./DialogItmes/DialogItmes";
import Message from "./Message/Message";
import Button from "../UI/Button/Button";

const Messages = props => {
  return (
    <div className={style.Messages}>
      <h2>Messages</h2>
      {props.state.dialogsData.map((value, index) => {
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
      <div>
        <textarea placeholder="enter your message"></textarea>
        <Button onClick={() => alert("alert")}>Отправить</Button>
      </div>
    </div>
  );
};

export default Messages;
