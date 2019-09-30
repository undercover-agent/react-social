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
      ]
    }
  },

  _refreshTree() {},

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

  dispatch(action) {
    if (action.type === "ADD-POST") {
      this._addPost();
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._updateNewPostText(action.newText);
    }
  }
};

window.store = store;

export default store;
