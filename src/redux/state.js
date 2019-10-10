import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    profilePage: {
      postData: [
        { message: "lorem ipsum", likesCount: 2 },
        { message: "lorem ipsum, ipsum lorem", likesCount: 12 }
      ],
      newPostText: ""
    },
    dialogPage: {
      dialogsData: [
        { id: "1", name: "Name 1", message: "hello kitty" },
        { id: "2", name: "Name 2", message: "hello man" },
        { id: "3", name: "Name 3", message: "hello world" }
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },

  _refreshTree() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._refreshTree = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this._refreshTree();
  }
};

//Actions
export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  };
};

export const updateNewPostTextActionCreator = text => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
};

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  };
};
export const updateNewMessageBodyCreator = value => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: value
  };
};

window.store = store;

export default store;
