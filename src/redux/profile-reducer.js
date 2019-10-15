const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postData: [
    { id: 1, message: "lorem ipsum", likesCount: 2 },
    { id: 2, message: "lorem ipsum, ipsum lorem", likesCount: 12 }
  ],
  newPostText: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    case ADD_POST:
      let body = state.newPostText;
      let id = state.postData.length + 1;
      let likes = Math.floor(Math.random() * 100);
      if (body !== "") {
        state.postData.push({
          id: id,
          message: body,
          likesCount: likes
        });
      }
      state.newPostText = "";
      return state;
    default:
      return state;
  }
};

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

export default profileReducer;
