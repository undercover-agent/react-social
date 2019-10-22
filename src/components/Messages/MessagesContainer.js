import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
    let newMessageBody = props.store.getState().dialogPage.newMessageBody;
    let listPost = props.state.dialogsData;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (text) => {
        let action = updateNewMessageBodyCreator(text);
        props.store.dispatch(action);
    };
    return (
        <Messages onNewMessageChange={onNewMessageChange}
                 onSendMessageClick={onSendMessageClick}
                 newMessageBody={newMessageBody}
                 listPost={listPost}/>
    );
};

export default MessagesContainer;