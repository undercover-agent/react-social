let state = {
  profilePage: {
    postData: [
      { message: "lorem ipsum", likesCount: 2 },
      { message: "lorem ipsum, ipsum lorem", likesCount: 12 }
    ]
  },
  dialogPage: {
    dialogsData: [
      { id: "1", name: "Name 1", message: "hello kitty" },
      { id: "2", name: "Name 2", message: "hello man" },
      { id: "3", name: "Name 3", message: "hello world" }
    ]
  }
};

export let addPost = postMessage => {
  let newPost = {
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.postData.push(newPost);
};

export default state;
