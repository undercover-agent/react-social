import React from "react";
import style from "./Messages.module.css";
import DialogItmes from "./DialogItmes/DialogItmes";
import Message from "./Message/Message";
import Button from "../UI/Button/Button";

const Messages = props => {
    console.log(props.store);
    let newMessageBody = props.newMessageBody;

    let onSendMessageClick = () => {
        props.onSendMessageClick();
    };

    let onNewMessageChange = e => {
        let body = e.target.value;
        props.onNewMessageChange(body)
    };

    return (
        <div className={style.Messages}>
            <h2>Messages</h2>
            {props.listPost.map((value, index) => {
                return (
                    <div className={style.messageContainer} key={index}>
                        <div className={style.dialogItems}>
                            <DialogItmes id={value.id} name={value.name}/>
                        </div>
                        <div className={style.messageItems}>
                            <Message message={value.message}/>
                        </div>
                    </div>
                );
            })}
            <div>
        <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="enter your message"
        />
                <Button onClick={onSendMessageClick}>Отправить</Button>
            </div>
        </div>
    );
};

export default Messages;
