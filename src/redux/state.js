import { rerenderEntireTree } from "./../rerender";

let state = {
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
};

window.state = state;

export let addPost = () => {
  let newPost = {
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = value => {
  state.profilePage.newPostText = value;
  rerenderEntireTree(state);
};

export default state;
