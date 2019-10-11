import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "lorem ipsum", likesCount: 2 },
        { id: 2, message: "lorem ipsum, ipsum lorem", likesCount: 12 }
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

window.store = store;

export default store;
