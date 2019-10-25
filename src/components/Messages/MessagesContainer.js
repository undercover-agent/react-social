import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import Messages from "./Messages";
import StoreContext from "../../store-context";

const MessagesContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    let newMessageBody = store.getState().dialogPage.newMessageBody;
                    let listPost = store.getState().dialogPage.dialogsData;
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator());
                    };

                    let onNewMessageChange = (text) => {
                        let action = updateNewMessageBodyCreator(text);
                        store.dispatch(action);
                    };
                    return (
                        <Messages onNewMessageChange={onNewMessageChange}
                                  onSendMessageClick={onSendMessageClick}
                                  newMessageBody={newMessageBody}
                                  listPost={listPost}/>
                    )
                }
            }
        </StoreContext.Consumer>

    );
};

export default MessagesContainer;