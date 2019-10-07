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
    }
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

  _addPost() {
    let newPost = {
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._refreshTree();
  },
  _updateNewPostText(value) {
    this._state.profilePage.newPostText = value;
    this._refreshTree();
  },
  _addNewMessage() {
    let body = this._state.dialogPage.newMessageBody;
    let id = this._state.dialogPage.dialogsData.length + 1;
    let randomName = Math.random()
      .toString(36)
      .substring(7);
    if (body !== "") {
      this._state.dialogPage.dialogsData.push({
        id: id,
        name: randomName,
        message: body
      });
    }
    this._state.dialogPage.newMessageBody = "";
    this._refreshTree();
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updateNewPostText(action.newText);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogPage.newMessageBody = action.body;
      this._refreshTree();
    } else if (action.type === SEND_MESSAGE) {
      this._addNewMessage();
    }
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
