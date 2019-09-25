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

  getState() {
    return this._state;
  },

  _refreshTree() {},

  addPost() {
    let newPost = {
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._refreshTree();
  },

  updateNewPostText(value) {
    this._state.profilePage.newPostText = value;
    this._refreshTree();
  },

  subscribe(observer) {
    this._refreshTree = observer;
  }
};

window.store = store;

export default store;
